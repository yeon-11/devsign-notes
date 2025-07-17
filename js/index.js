// 탑버튼
const topBtn = document.getElementById("topBtn");

// 스크롤 이벤트
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});

// 클릭 시 부드럽게 위로
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 페이지 로드시 숨기기
topBtn.style.display = "none";
