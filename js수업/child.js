
// 부모창에 입력한 이름을 가져와서 자식창의 input태그에 넣기
//  새 창을 열어준 부모창(메인창)은 window.opener이다.
let parent_name = window.opener.document.getElementById("name");

// 자식의 input 태그 가져오기
let childName = document.getElementById("childName");
// input 태그의 value에 부모의 이름 input 태그 value 값 넣기

childName.value = parent_name.value;

// 이메일을 클릭하면 부모창의 input태그에 넣기

const list = document.querySelectorAll(".emailText");

list.forEach( text => { text.addEventListener('click', () => {
    // 부모창의 이메일 input 태그 가져오기
    let parentEmail = window.opener.document.getElementById("email");
    parentEmail.value = text.innerText;
    window.close();
 }) } );

// function a(text){
//     text.addEventListener('click', function(){});
// }