// ========== 아코디언 섹션 불러오기 ========== 
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
  if (!container) return;

  try {
    const htmlList = await Promise.all(
      sections.map(async (file) => {
        const res = await fetch(`section/${file}`);
        if (!res.ok) throw new Error(`${file} 로드 실패 (${res.status})`);
        return await res.text();
      })
    );

    // 순서대로 붙이기
    htmlList.forEach((html) => {
      container.insertAdjacentHTML("beforeend", html);
    });
  } catch (e) {
    container.innerHTML = `
      <div class="alert alert-danger">
        섹션을 불러오지 못했습니다. 경로를 확인하거나 새로고침 해보세요.<br>
        <small class="text-muted">${e.message}</small>
      </div>`;
    console.error("[섹션 로드 실패]", e);
  }
}

loadSectionsParallel();



// ========== 아코디언 닫기 버튼 기능 (모바일 포함) ==========
document.addEventListener("click", (e) => {
  const btn = e.target.closest('[data-close="true"]');
  if (!btn) return;

  const collapse = btn.closest(".accordion-collapse");
  if (!collapse) return;

  const instance = bootstrap.Collapse.getOrCreateInstance(collapse, {
    toggle: false,
  });

  // 닫기 실행
  instance.hide();

  // 모바일 Safari 대응: 닫힘 애니메이션 종료 후 스크롤
  const scrollToTop = () => {
    // 첫 번째는 smooth, 안 먹히면 두 번째로 강제
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => window.scrollTo(0, 0), 400);
  };

  collapse.addEventListener("hidden.bs.collapse", () => {
    // collapse 애니메이션이 끝나도 레이아웃 반영이 약간 늦어서 지연
    setTimeout(scrollToTop, 100);
  }, { once: true });
});



// ========== 마크다운 카드 데이터 ========== 
const guides = [
  {
    title: "Vuetify + Vite",
    desc: "프로젝트 셋업 가이드",
    file: "vuetify-vite-setup-guide.md",
  },
  {
    title: "React",
    desc: "프로젝트 셋업 가이드",
    file: "react-setup-guide.md",
  },
  {
    title: "Next.js",
    desc: "프로젝트 설치 & 셋업 가이드",
    file: "nextjs-setup-guide.md",
  },
  {
    title: "Python + Django",
    desc: "가상환경 설정 & 설명 가이드",
    file: "django-setup-guide.md",
  },
  {
    title: "GitHub Pages",
    desc: "설치 & 정적 사이트 배포 가이드",
    file: "github-pages-deploy-guide.md",
  },
  {
    title: "Flutter",
    desc: "VSCode 프로젝트 셋업 가이드",
    file: "flutter-setup-guide.md",
  },
  {
    title: "DartPad",
    desc: "IntelliJ로 프로젝트 시작 가이드",
    file: "dartpad-setup-guide.md",
  },
  {
    title: "AI 영상",
    desc: "AI 영상 생성 강의 요약 가이드",
    file: "ai_video_generation_summary.md",
  },
];

//  카드 렌더링
function renderCards() {
  const container = document.getElementById("markdown-cards");
  if (!container) return;

  container.innerHTML = "";

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
    const parsed = window.marked?.parse
      ? window.marked.parse(text)
      : window.marked(text);

    const viewer = document.getElementById("markdown-viewer");
    viewer.innerHTML = parsed;

    document.getElementById("markdownModalLabel").innerText = title;

    const modalEl = document.getElementById("markdownModal");
    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  } catch (e) {
    const viewer = document.getElementById("markdown-viewer");
    viewer.innerHTML = `<p class="text-danger">파일을 불러올 수 없습니다: <code>${file}</code></p>`;
    document.getElementById("markdownModalLabel").innerText = "에러";
    console.error(`마크다운 불러오기 실패: ${file}`, e);
  }
}



// ========== HTML 모달 열기 ========== 
function openHtmlModal({ file, title = "문서 보기" }) {
  const iframe = document.getElementById("html-viewer");
  const label = document.getElementById("htmlModalLabel");
  if (!iframe) return;

  // 이전 내용 잔상 방지
  iframe.src = "";
  iframe.src = file;

  if (label) label.textContent = title;

  const modal = new bootstrap.Modal(document.getElementById("htmlModal"));
  modal.show();
}

// 이벤트 위임: data-open="html"을 가진 요소 클릭 감지
document.addEventListener("click", (e) => {
  const trigger = e.target.closest('[data-open="html"]');
  if (!trigger) return;

  // a태그 새탭/이동 방지
  if (trigger.tagName === "A") e.preventDefault();

  const file = trigger.getAttribute("data-file");
  const title = trigger.getAttribute("data-title") || "문서 보기";

  if (!file) {
    console.warn("data-file 누락: HTML 모달을 열 수 없습니다.");
    return;
  }

  openHtmlModal({ file, title });
});



// ========== 탑 버튼 기능 ========== 
const topButton = document.createElement("button");
topButton.className = "btn position-fixed border-0 bg-transparent";
topButton.style.bottom = "20px";
topButton.style.right = "20px";
topButton.style.display = "none";
topButton.style.zIndex = "500";
topButton.innerHTML = `<i id="topIcon" class="bi bi-arrow-up-circle-fill fs-1 text-dark"></i>`;
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
topButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
