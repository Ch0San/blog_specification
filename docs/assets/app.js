
// simple client-side filter for the spec sections
const q = (s, el=document) => el.querySelector(s);
const qa = (s, el=document) => [...el.querySelectorAll(s)];

const sections = [
  { id: "overview", title: "개요" },
  { id: "stack", title: "기술 스택" },
  { id: "db", title: "데이터베이스" },
  { id: "security", title: "보안" },
  { id: "structure", title: "프로젝트 구조" },
  { id: "run", title: "실행 방법" },
];

window.addEventListener("DOMContentLoaded", () => {
  const nav = q("nav");
  sections.forEach(s => {
    const a = document.createElement("a");
    a.href = `#${s.id}`;
    a.textContent = s.title;
    nav.appendChild(a);
  });

  const input = q("#search");
  input.addEventListener("input", () => {
    const term = input.value.toLowerCase();
    qa("[data-card]").forEach(card => {
      const txt = card.textContent.toLowerCase();
      card.style.display = txt.includes(term) ? "" : "none";
    });
  });
});
