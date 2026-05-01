//0430-11:00~

const scores = [85, 92, 78, 96, 88, 73, 91];

const highScores1 = scores.filter(score => score >= 90);

//score는 재료, filter 함수가 처리할 데이터(하나의 점수)
// => 이 재료를 가지고 우측의 행동을 진행하라
// score >= 90, 재료가 90 이상인지 확인하여 걸러내라

const scores = [85, 92, 78, 96, 88, 73, 91];

// const highScores1 = scores.filter((score) => score >= 90);
const highScores1 = scores.filter(function (score) {
  return score >= 90;
});

console.log(highScores1);

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

const students = [
  { name: "김철수", score: 85 },
  { name: "이영희", score: 92 },
  { name: "박민수", score: 78 },
  { name: "정수진", score: 96 },
];

const renderStudents = (studentList) => {
  const container = document.getElementById("studentlist");
  container.innerHTML = studentList.map(
    (student) => `
    <div class = "student-card ${student.score >= 90 ? 'high-score' : ''}">
    <h3>${student.name}</h3>
    <p>점수: ${student.score}점</p>
    <p>등급: ${getGrade(student.scores)}</p>
    </div>
    `).join('');
  };


//  students 배열: 이름 & 점수
// {~~~~~} : 객체이다
// renderStudents() 함수 : 학생 명단을 참고하여 브라우저 화면에 그려준다..
// studentslist라는 재료를 넣으면 화면에 표시해준다.
// 이 상황은 '조리기구'에 비유할 수 있다.

// map 명단을 하나씩 확인하여 HTML 태그로 변경하는 과정
// 너의 점수가 90점 이상이니?
// true: high-score(CSS) 배경색이 변경된다.
// false : 아무것도 설정하지 않는다.

// join: 위에서 map을 실행하면 여러 세트의 HTML 태그가 만들어지는데
// 그것들을 모두 하나로 결합한다.

ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
const students = [
  { name: "김철수", score: 85 },
  { name: "이영희", score: 92 },
  { name: "박민수", score: 78 },
  { name: "정수진", score: 96 },
];

const getGrade = (score) => {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  return 'D';
};

const renderStudents = (studentList) => {
  const container = document.getElementById('studentList');
  container.innerHTML = studentList.map(
    (student) => `
    <div class="student-card ${student.score >= 90 ? 'high-score' : ''}">
    <h3>${student.name}</h3>
    <p>점수: ${student.score}점</p>
    <p>등급: ${getGrade(student.score)}</p>
    </div>
    `).join('');
  };

// 보너스 점수 추가 이벤트
document.getElementById('addBonusBtn').addEventListener('click', () => {
  // 모든 학생에게 5점 추가 (단, 100점 초과 불가)
  students.forEach((student) => {
    student.score = Math.min(student.score + 5, 100);
  });
  renderStudents(students);
});

  renderStudents(students);

//  students 배열: 이름 & 점수
// {~~~~~} : 객체이다
// renderStudents() 함수 : 학생 명단을 참고하여 브라우저 화면에 그려준다..
// studentslist라는 재료를 넣으면 화면에 표시해준다.
// 이 상황은 '조리기구'에 비유할 수 있다.

// map 명단을 하나씩 확인하여 HTML 태그로 변경하는 과정
// 너의 점수가 90점 이상이니?
// true: high-score(CSS) 배경색이 변경된다.
// false : 아무것도 설정하지 않는다.

// join: 위에서 map을 실행하면 여러 세트의 HTML 태그가 만들어지는데
// 그것들을 모두 하나로 결합한다.

// 이 코드는 "학생 명단을 하나씩 훑으면서(map),
//  점수에 따라 색칠 공부를 좀 하고(삼항 연산자,
//  예쁜 HTML 카드 모양으로 포장해
// 한줄로 합친 뒤(join), 화면에"

// html 문서: 아파트 건물
// document: 건물 1 전체
// head, body: 각각의 층
// div, p, span: 각 방들
// 문자열, 속성: 방안의 가구들


// JS는 이 아파트 관리 사무소이다. DOM이라는 것을 이용하여 어떤 방(요소)에든 접근해서 통제한다
// 가구 이동, 벽지 변경, 새로운 방 만들기......


// document.getElementById('price').textContent = "19,900원"; // 가격 변경
// document.querySelector('.button').style.color = "red"; // 색상 변경
// document.createElement('div'); // 새로운 div 태그를 만든다

// DOM 특징
// 1. 실시간 반영
// 2. 부모 자식 관계
// 3. 중요!! 양방향 소통(JS <-> HTML)
//

let itemCount = 0;

function addItem () {
  itemCount++;
  updateDisplay();
}

function removeItem () {
  if(itemCount > 0){
    itemCount--;    
  }
  updateDisplay();
}

function resetCart () {
  itemCount = 0;
  updateDisplay();
}

function updateDisplay() {
  const countElement = document.getElementById('count');
  const statusElement = document.getElementById('status');
  
  countElement.textContent = itemCount;

  if (itemCount === 0) {
    statusElement.textContent = "장바구니가 비었습니다";
    statusElement.style.color = 'gray';
  } else if (itemCount < 5){
    statusElement.textContent = "더 담으세요";
    statusElement.style.color = 'blue';
  } else {
    statusElement.textContent = "무료배송이 가능합니다";
    statusElement.style.color = 'red';
  }
}

updateDisplay();