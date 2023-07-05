
function getPageno() {

  const param = new URLSearchParams(location.search);
  const pageno = parseInt(param.get('pageno'));

  if(isNaN(pageno))
    return 1;
  else if(pageno<1)
    return 1;
  return pageno;
}

// 기본 매개변수(default parameter)
async function fetch(pageno=1, pagesize=10) {
  const api = "http://sample.bmaster.kro.kr/contacts";
  const url = `${api}?pageno=${pageno}&pagesize=${pagesize}`;

  // $.ajax()는 병렬처리(비동기 처리)되는 코드 -> 언제 끝날 지 모른다
  // 비동기코드를 리턴받는 result는 "미래에 값이 들어올 것이다"란 값을 가진다
  // (Promise)
  try {
    return await $.ajax(url);
  } catch(err) {
    console.log(err);
    return null;
  }
}


