// script.js
let startTime, endTime;

function showTeemo() {
    const teemoImage = document.getElementById('teemo');
    teemoImage.style.display = 'block'; // Teemo 보이기
    startTime = new Date().getTime(); // 시작 시간 기록
}

// 키보드 이벤트 리스너
document.addEventListener('keydown', function(event) {
    if (event.key === 'f') { // F 키가 눌리면
        endTime = new Date().getTime(); // 종료 시간 기록
        const reactionTime = endTime - startTime; // 반응 속도 계산
        document.getElementById('result').innerText = `반응 속도: ${reactionTime} ms`;
        // 여기에 프로게이머 사진을 보여주는 로직 추가
    }
});

// 일정 시간 후에 Teemo를 보이도록 설정
setTimeout(showTeemo, Math.random() * 2000 + 1000); // 1~3초 사이의 랜덤 시간
