const qa = [
  {q:'숨을 안 쉬면 무조건 CPR을 해야 하나요?',a:'반응이 없고 정상적인 호흡이 없거나 헐떡이는 호흡만 보이면 심정지로 판단하고 CPR을 시작합니다.',n:'주변 안전을 확인하고 119에 신고하세요. 일반인은 맥박 확인에 시간을 쓰지 말고, 신고 상담원의 안내에 따라 가슴압박을 시작합니다.'},
  {q:'심장이 뛰는 사람에게 CPR을 하면 위험하지 않나요?',a:'불필요한 압박은 손상을 줄 수 있지만, 심정지가 의심되는 상황에서 CPR을 지연하는 것이 더 위험합니다.',n:'반응이 없고 숨이 없거나 헐떡이는 비정상 호흡이면 심정지를 의심하세요. 정상 호흡이 확인되면 압박하지 말고 119에 신고해 관찰합니다.'},
  {q:'갈비뼈가 부러지면 어떻게 하나요?',a:'갈비뼈 손상이 발생할 수 있지만 생명을 살리는 것이 우선입니다. 정확한 자세로 압박을 계속합니다.',n:'가슴 중앙(가슴뼈 아래쪽 절반)을 수직으로 누르고, 매 압박 뒤 가슴이 완전히 올라오도록 합니다.'},
  {q:'가슴압박은 어느 정도 깊이로 하나요?',a:'성인은 가슴 중앙을 충분히 깊게 눌러야 합니다. 마네킹 실습에서 강사의 시범을 보고 올바른 자세와 깊이를 익혀요.',n:'어린이와 영아는 방법이 다릅니다. 현장 실습과 강사의 안내를 따르세요.'},
  {q:'가슴압박은 어떤 리듬으로 하나요?',a:'빠르고 일정한 리듬으로 압박하고, 중단을 줄여야 합니다. 진행자가 시범을 보이고 모임원이 번갈아 연습해 봅니다.',n:'숫자를 외우기보다 실습에서 일정한 리듬과 자세를 익히고 서로 피드백을 나눠요.'},
  {q:'인공호흡을 꼭 해야 하나요?',a:'인공호흡이 어렵거나 망설여져도 가슴압박을 바로 시작하세요.',n:'교육받았고 할 수 있다면 가슴압박과 인공호흡을 함께 합니다. 익수처럼 호흡 문제가 원인일 수 있는 경우에는 인공호흡이 중요합니다. 망설여지면 119 상담원의 안내를 따르세요.'},
  {q:'CPR은 언제까지 해야 하나요?',a:'119구급대가 인계받거나 환자가 정상적인 호흡 등 회복 징후를 보일 때까지 지속합니다.',n:'정상적으로 숨을 쉬고 회복한 경우에는 압박을 멈추고 상태를 관찰합니다. AED 분석·충격 안내 때만 잠시 손을 떼고, 안내 직후 CPR을 재개합니다.'},
  {q:'AED(자동심장충격기)는 일반인도 사용할 수 있나요?',a:'네. 전원을 켜고 음성 안내에 따라 사용하면 됩니다.',n:'패드를 맨 가슴에 붙이고 분석·충격 시에는 모두 환자에게서 떨어지게 하세요. 충격 여부와 관계없이 AED가 안내하면 즉시 CPR을 재개합니다.'},
  {q:'AED로 충격을 주면 심장이 멈추는 것 아닌가요?',a:'심장의 치명적인 부정맥을 교정하기 위한 장비입니다. 모든 심정지 환자에게 충격을 주는 것은 아닙니다.',n:'AED가 심장 리듬을 분석해 충격이 필요한 경우에만 안내합니다. 분석·충격 전 주변 사람이 환자에게 닿지 않도록 확인하세요.'},
  {q:'CPR을 하다가 사람이 잘못되면 처벌받나요?',a:'선의로 한 응급처치에는 법적 보호 규정이 있지만, 모든 경우에 책임이 면제되는 것은 아닙니다.',n:'고의나 중대한 과실 등 예외가 있을 수 있습니다. 구체적인 상황에 대한 법적 판단은 별도로 확인해야 합니다.'},
  {q:'침대 위에서도 CPR을 해도 되나요?',a:'가능하면 단단하고 평평한 바닥에서 실시합니다.',n:'환자를 바닥으로 옮기느라 압박 시작이 지연되지 않도록 하세요. AED가 있으면 함께 가져와 사용합니다.'},
  {q:'여성에게 CPR을 할 때 가슴을 눌러도 되나요?',a:'성별과 관계없이 가슴 중앙의 정확한 위치를 압박해야 합니다.',n:'옷을 필요한 만큼 열어 정확한 위치에 압박하고, AED 패드는 맨 피부에 부착합니다. 노출은 처치에 필요한 범위로 최소화합니다.'},
  {q:'임산부에게도 CPR을 해도 되나요?',a:'네. 즉시 CPR을 시행하고 임신 사실을 119에 알립니다.',n:'도움을 요청하고 AED도 사용하세요. 임신 중 상황별 처치는 구조대·의료진과 교육받은 사람의 지침을 따릅니다.'},
  {q:'어린아이도 성인처럼 압박하나요?',a:'소아와 영아는 압박 깊이와 방법이 다릅니다.',n:'연령과 체격에 따라 손의 개수·압박 깊이 등이 달라집니다. 교육받은 방법을 적용하고 119 상담원의 안내를 따르세요.'},
  {q:'물에 빠진 사람도 CPR을 하나요?',a:'안전한 장소로 구조한 후 반응과 호흡을 확인하고 필요하면 CPR을 실시합니다.',n:'물속 구조는 자신의 안전이 우선입니다. 익수 후 심정지는 산소 부족이 원인인 경우가 많아 인공호흡과 가슴압박을 함께 하는 것이 중요합니다. 교육받은 구조자는 가능한 빨리 호흡을 제공하고 119에 신고하세요.'},
  {q:'술에 취해 쓰러진 사람도 CPR을 해야 하나요?',a:'술 냄새와 관계없이 반응과 정상 호흡 여부로 판단합니다.',n:'반응이 없고 정상 호흡이 없거나 헐떡이면 119 신고와 CPR이 필요합니다. 정상 호흡이 있더라도 응급상황일 수 있으니 119에 신고하고 호흡을 계속 확인하세요.'},
  {q:'입에서 피가 나면 인공호흡을 해야 하나요?',a:'감염 위험이 있거나 인공호흡이 어렵다면 가슴압박을 우선 실시합니다.',n:'혈액에 직접 닿지 않도록 하고, 가능하면 보호장비나 호흡 보조기구를 사용하세요. 인공호흡이 어렵다면 성인에게는 가슴압박만이라도 바로 시작합니다.'},
  {q:'혼자 있는데 사람이 쓰러지면 어떻게 하나요?',a:'119에 신고하고 스피커폰으로 안내받으며 CPR을 시작합니다.',n:'휴대전화를 스피커폰으로 켜 두고 상담원 안내를 따르세요. 주변에 사람이 있으면 AED를 가져오도록 요청합니다.'},
  {q:'AED 패드는 옷 위에 붙여도 되나요?',a:'아니요. 가슴을 노출하고 피부에 직접 부착합니다.',n:'패드가 피부에 잘 붙도록 가슴을 말리고, 약물 패치가 있으면 장갑을 끼고 제거한 뒤 닦아냅니다. 물에 젖은 환경에서는 안전을 확보하고 가슴을 닦은 후 부착합니다.'},
  {q:'CPR을 하다가 환자가 움직이면 멈춰야 하나요?',a:'정상적인 호흡과 명확한 회복 징후가 나타났는지 확인해야 합니다. 단순 경련이나 헐떡임은 회복으로 보지 않습니다.',n:'정상 호흡과 뚜렷한 회복이 확인된 경우 압박을 멈추고 계속 관찰하세요. 정상 호흡이 없거나 판단이 어려우면 CPR을 이어가며 119 안내를 따릅니다.'}
];
const topics=['기본 판단','기본 판단','압박 요령','압박 요령','압박 요령','인공호흡','CPR 지속','AED 사용','AED 사용','법률','상황별 대응','상황별 대응','상황별 대응','어린이 CPR','익수','상황별 대응','상황별 대응','신고와 도움','AED 사용','회복 확인'];
const intro=document.querySelector('#intro'),lesson=document.querySelector('#lesson'),finish=document.querySelector('#finish'),card=document.querySelector('#card');
const cardText=document.querySelector('#cardText'),note=document.querySelector('#note'),noteText=document.querySelector('#noteText');
let index=-1,touchX=0,touchY=0;
const total=qa.length*2;
let sessionId='';
const supabaseUrl='https://rebjcoazabhkcobjjzkj.supabase.co';
const supabasePublishableKey='sb_publishable_56dLyg6nM0RWsDsHy08kPA_cMQHPt1J';
function makeSessionId(){if(crypto.randomUUID)return crypto.randomUUID();return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const r=Math.random()*16|0;return(c==='x'?r:(r&3|8)).toString(16)})}
function showIntro(){index=-1;intro.hidden=false;lesson.hidden=true;finish.hidden=true;window.location.hash='home'}
function start(){index=0;sessionId=makeSessionId();intro.hidden=true;finish.hidden=true;lesson.hidden=false;render()}
function render(){if(index>=total){lesson.hidden=true;finish.hidden=false;return}if(index<0){showIntro();return}lesson.hidden=false;intro.hidden=true;finish.hidden=true;
 const item=Math.floor(index/2),isAnswer=index%2===1,data=qa[item];
 document.querySelector('#cardKind').textContent=isAnswer?'답변':'질문';document.querySelector('#counter').textContent=`${String(index+1).padStart(2,'0')} / ${total}`;
 document.querySelector('#questionNumber').textContent=`질문 ${String(item+1).padStart(2,'0')}`;document.querySelector('#topic').textContent=topics[item];
 document.querySelector('#progressFill').style.width=`${((index+1)/total)*100}%`;document.querySelector('#progress').setAttribute('aria-valuenow',index+1);
 document.querySelector('#typePill').textContent=isAnswer?'함께 확인할 답':'함께 이야기할 질문';document.querySelector('#cardMark').textContent=isAnswer?'A':'Q';
 document.querySelector('#cardKicker').textContent=isAnswer?'의견을 나눈 뒤 자료와 함께 확인해요':'진행자가 읽고, 모두 편하게 의견을 나눠요';
 card.classList.toggle('answer',isAnswer);cardText.textContent=isAnswer?data.a:data.q;
 note.hidden=!(isAnswer&&data.n);noteText.textContent=data.n||'';
 document.querySelector('#cardFoot').textContent=isAnswer?'역할을 바꾸고 다음 주제로 이어가요':'각자 정답을 맞히는 시간이 아니에요';
 document.querySelector('#nextButton').innerHTML=index===total-1?'함께 마무리하기 <span aria-hidden="true">✓</span>':isAnswer?'다음 주제로 <span aria-hidden="true">→</span>':'답을 함께 확인하기 <span aria-hidden="true">→</span>';
}
function next(){if(index<0){start();return}index++;render()}function prev(){if(index<=0){showIntro();return}index--;render()}
document.querySelector('#startButton').addEventListener('click',start);document.querySelector('#nextButton').addEventListener('click',next);document.querySelector('#prevButton').addEventListener('click',prev);document.querySelector('#homeButton').addEventListener('click',showIntro);document.querySelector('#restartButton').addEventListener('click',start);
document.addEventListener('keydown',e=>{if(document.querySelector('#sourcesDialog').open)return;if(e.key==='ArrowRight')next();if(e.key==='ArrowLeft')prev()});
card.addEventListener('touchstart',e=>{touchX=e.changedTouches[0].screenX;touchY=e.changedTouches[0].screenY},{passive:true});card.addEventListener('touchend',e=>{const dx=e.changedTouches[0].screenX-touchX,dy=e.changedTouches[0].screenY-touchY;if(Math.abs(dx)>48&&Math.abs(dx)>Math.abs(dy)*1.25){dx<0?next():prev()}},{passive:true});
const dialog=document.querySelector('#sourcesDialog');document.querySelector('#sourcesButton').addEventListener('click',()=>dialog.showModal());document.querySelector('#closeDialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
const attendanceForm=document.querySelector('#attendanceForm'),participantNames=document.querySelector('#participantNames'),attendanceStatus=document.querySelector('#attendanceStatus'),saveAttendanceButton=document.querySelector('#saveAttendanceButton');
attendanceForm.addEventListener('submit',async e=>{
 e.preventDefault();
 const names=participantNames.value.split(/\r?\n/).map(name=>name.trim()).filter(Boolean);
 if(!names.length){attendanceStatus.textContent='참여한 대원 성함을 적어 주세요.';participantNames.focus();return}
 if(names.length>50){attendanceStatus.textContent='성함은 한 번에 50분까지 적을 수 있어요.';participantNames.focus();return}
 if(names.some(name=>name.length>80)){attendanceStatus.textContent='성함은 한 줄에 적당한 길이로 입력해 주세요.';participantNames.focus();return}
 saveAttendanceButton.disabled=true;attendanceStatus.textContent='참여 기록을 저장하고 있어요.';
 try{
  const response=await fetch(`${supabaseUrl}/rest/v1/cpr_training_sessions?on_conflict=session_id`,{method:'POST',headers:{apikey:supabasePublishableKey,Authorization:`Bearer ${supabasePublishableKey}`,'Content-Type':'application/json',Prefer:'resolution=ignore-duplicates,return=minimal'},body:JSON.stringify({session_id:sessionId||makeSessionId(),participants:names})});
  if(!response.ok)throw new Error('attendance_save_failed');
  attendanceStatus.textContent='참여 기록을 저장했습니다. 함께해 주셔서 고맙습니다.';participantNames.value='';participantNames.disabled=true;saveAttendanceButton.textContent='저장 완료';
 }catch(error){attendanceStatus.textContent='저장하지 못했습니다. 연결 상태를 확인한 뒤 다시 시도해 주세요.';saveAttendanceButton.disabled=false}
});
render();

