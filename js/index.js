//  아코디언 섹션 불러오기
const sections = [
  "photoshop.html",
  "illustrator.html",
  "figma.html",
  "aftereffects.html",
  "html.html",
  "css.html",
  "js.html",
  "dartpad.html",
];

async function loadSectionsParallel() {
  const container = document.getElementById("shortcutAccordion");

  const htmlList = await Promise.all(
    sections.map(async (file) => {
      const res = await fetch(`section/${file}`);
      return await res.text();
    })
  );

  // 순서대로 붙이기
  htmlList.forEach((html) => {
    container.innerHTML += html;
  });
}

loadSectionsParallel();


//  마크다운 카드 데이터
const guides = [
  { title: "Vuetify + Vite", desc: "프로젝트 셋업 가이드", file: "vuetify-vite-setup-guide.md" },
  { title: "React", desc: "프로젝트 셋업 가이드", file: "react-setup-guide.md" },
  { title: "Next.js", desc: "프로젝트 설치 & 셋업 가이드", file: "nextjs-setup-guide.md" },
  { title: "Python + Django", desc: "가상환경 설정 & 설명 가이드", file: "django-setup-guide.md" },
  { title: "GitHub Pages", desc: "설치 & 정적 사이트 배포 가이드", file: "github-pages-deploy-guide.md" },
  { title: "Flutter", desc: "VSCode 프로젝트 셋업 가이드", file: "flutter-setup-guide.md" },
  { title: "DartPad", desc: "IntelliJ로 프로젝트 시작 가이드", file: "dartpad-setup-guide.md" },
  { title: "AI 영상", desc: "AI 영상 생성 강의 요약 가이드", file: "ai_video_generation_summary.md" },
];


//  카드 렌더링
function renderCards() {
  const container = document.getElementById("markdown-cards");
  container.innerHTML = ""; // 기존 카드 초기화

  guides.forEach((g) => {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-3";

    const card = document.createElement("div");
    card.className = "card h-100 shadow-sm hover-pointer";
    card.style.cursor = "pointer";

    card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${g.title}</h5>
        <p class="card-text">${g.desc}</p>
      </div>
    `;

    // 카드 클릭 이벤트 등록
    card.addEventListener("click", () => loadMarkdown(g.file, g.title));

    col.appendChild(card);
    container.appendChild(col);
  });
}

renderCards();

//  마크다운 로드 + 모달 표시
async function loadMarkdown(file, title) {
  try {
    const res = await fetch(`./md/${file}`);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

    const text = await res.text();
    const parsed = marked.parse ? marked.parse(text) : marked(text);

    const viewer = document.getElementById("markdown-viewer");
    viewer.innerHTML = parsed;

    document.getElementById("markdownModalLabel").innerText = title;

    const modalEl = document.getElementById("markdownModal");
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  } catch (e) {
    const viewer = document.getElementById("markdown-viewer");
    viewer.innerHTML =
      `<p class="text-danger">파일을 불러올 수 없습니다: <code>${file}</code></p>`;
    document.getElementById("markdownModalLabel").innerText = "에러";
    console.error(`마크다운 불러오기 실패: ${file}`, e);
  }
}



//  탑 버튼 기능
const topButton = document.createElement("button");
topButton.className = "btn position-fixed border-0 bg-transparent";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.display = "none";
topButton.style.zIndex = "1050";
topButton.innerHTML = `<i id="topIcon" class="bi bi-arrow-up-circle-fill fs-1 text-secondary"></i>`;
document.body.appendChild(topButton);

const topIcon = document.getElementById("topIcon");

// 스크롤 이벤트로 버튼 표시/숨김
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

// 버튼 클릭
topButton.addEventListener("mousedown", () => {
  topIcon.classList.remove("text-secondary");
  topIcon.classList.add("text-primary");
});

// 색상 복구
topButton.addEventListener("mouseup", () => {
  topIcon.classList.remove("text-primary");
  topIcon.classList.add("text-secondary");
  window.scrollTo({ top: 0, behavior: "smooth" });
});