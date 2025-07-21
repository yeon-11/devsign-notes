// 탑버튼 기능
const topBtn = document.getElementById("topBtn");

// 스크롤 시 버튼 보이기/숨기기
window.addEventListener("scroll", () => {
  topBtn.style.display = window.scrollY > 100 ? "block" : "none";
});

// 탑버튼 클릭 시 부드럽게 위로
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 페이지 로드시 숨기기
topBtn.style.display = "none";


// 마크다운 카드 열고닫기
let activeCard = null;

document.querySelectorAll('.markdown-card').forEach(card => {
  card.addEventListener('click', () => {
    const file = card.getAttribute('data-file');
    if (!file) return;

    const viewer = document.getElementById('markdown-viewer');

    // 이미 열린 카드를 다시 클릭한 경우: 닫기
    if (activeCard === card) {
      viewer.classList.remove('active');
      setTimeout(() => {
        viewer.innerHTML = '';
        activeCard.classList.remove('active');
        activeCard = null;

        // 모든 카드 다시 보이게
        document.querySelectorAll('.markdown-card').forEach(c => {
          c.style.display = 'block';
        });
      }, 300);
      return;
    }

    // 다른 카드 클릭 시 기존 내용 제거
    if (activeCard && activeCard !== card) {
      activeCard.classList.remove('active');
    }

    activeCard = card;
    card.classList.add('active');

    // 현재 카드만 보이게, 나머지 숨기기
    document.querySelectorAll('.markdown-card').forEach(c => {
      c.style.display = c === card ? 'block' : 'none';
    });

    loadMarkdown(`md/${file}`);
  });
});


// 마크다운 로딩 함수
function loadMarkdown(filePath) {
  fetch(filePath)
    .then(res => res.text())
    .then(text => {
      const html = marked.parse(text);
      const viewer = document.getElementById('markdown-viewer');
      viewer.innerHTML = html;

      // 닫기 버튼 추가
      const closeBtn = document.createElement('button');
      closeBtn.innerText = '닫기';
      closeBtn.className = 'markdown-close-btn';
      closeBtn.addEventListener('click', () => {
        viewer.classList.remove('active');
        setTimeout(() => {
          viewer.innerHTML = '';
          if (activeCard) {
            activeCard.classList.remove('active');
            activeCard = null;
          }

          // 모든 카드 다시 보이게
          document.querySelectorAll('.markdown-card').forEach(c => {
            c.style.display = 'block';
          });
        }, 300);
      });

      viewer.appendChild(closeBtn);

      // 트랜지션 클래스 추가
      viewer.classList.add('active');

      // viewer가 화면에 바로 보이도록 스크롤!
      const viewerTop = viewer.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: viewerTop - 20,
        behavior: 'smooth'
      });
    })
    .catch(() => {
      document.getElementById('markdown-viewer').innerHTML =
        '<p style="color:red;">파일을 불러오지 못했습니다.</p>';
    });
}
