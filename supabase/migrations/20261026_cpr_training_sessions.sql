-- 참여한 대원 성함 저장
-- RLS를 켜고 익명 사용자는 INSERT만 가능하게 설정합니다.
create table if not exists public.cpr_training_sessions (
  session_id uuid primary key,
  participants text[] not null,
  created_at timestamptz not null default now(),
  constraint cpr_participants_count check (cardinality(participants) between 1 and 50),
  constraint cpr_participants_no_empty check (array_position(participants, '') is null)
);

alter table public.cpr_training_sessions enable row level security;
revoke all on table public.cpr_training_sessions from public, anon, authenticated;
grant insert on table public.cpr_training_sessions to anon;

drop policy if exists "Anonymous can submit CPR attendance" on public.cpr_training_sessions;
create policy "Anonymous can submit CPR attendance"
on public.cpr_training_sessions
for insert
to anon
with check (
  cardinality(participants) between 1 and 50
  and array_position(participants, '') is null
);

