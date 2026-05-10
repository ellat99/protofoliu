const projects = [
  {
    n: "01",
    title: "Best Movers",
    role: "Website corporate · UX/UI & Development",
    description:
      "A website for a moving company in Romania. Focus on conversions, quick quote request forms, and mobile performance.",
    tags: ["Wordpress", "UI/UX", "PHP", "CSS"],
    image: "assets/bestmovers.jpg",
    url: "https://bestmovers.ro/",
    sticker: "LIVE NOW",
  },
  {
    n: "02",
    title: "SEO Factory",
    role: "Agency website · Digital branding",
    description:
      "A bold digital identity for a creative agency. Monumental typography, fluid animations, and an editorial grid system.",
    tags: ["Wordpress", "PHP", "CSS"],
    image: "assets/seofactory.png",
    url: "https://seo-factory.ro/",
    sticker: "AGENCY ✦",
  },
  {
    n: "03",
    title: "Urban Caves",
    role: "Real estate · E-commerce experience",
    description:
      "Premium e-commerce website for high-end furniture, finishes, and interior design items.",
    tags: ["Magento", "UI/UX", "Web Design"],
    image: "assets/urbancaves.png",
    url: "https://www.urbancaves.ro/",
    sticker: "NEW ✿",
  },
];

const tech = [
  "Figma",
  "Adobe Express",
  "Wordpress",
  "Magento",
  "HTML",
  "CSS",
  "JavaScript",
  "Adobe XD",
];

const wrap = document.getElementById("projects");
wrap.innerHTML = projects
  .map(
    (p, i) => `
  <article class="project ${i % 2 ? "reverse" : ""}" data-reveal>
    <div class="media" data-tilt>
      <span class="sticker">${p.sticker}</span>
      <a href="${p.url}" target="_blank" rel="noopener noreferrer" aria-label="Vizitează ${p.title}">
        <img src="${p.image}" alt="Mockup proiect ${p.title}" loading="lazy" />
      </a>
    </div>
    <div class="meta">
      <h3>${p.title}</h3>
      <p class="role">${p.role}</p>
      <p class="desc">${p.description}</p>
      <div class="tags">${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      <a class="live-link" href="${p.url}" target="_blank" rel="noopener noreferrer">Visit the live website ↗</a>
    </div>
  </article>
`,
  )
  .join("");

document.getElementById("tech-chips").innerHTML = tech
  .map((t) => `<span class="chip">${t}</span>`)
  .join("");
document.getElementById("year").textContent = new Date().getFullYear();

/* ===== Scroll reveal ===== */
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.15 },
);
document
  .querySelectorAll(".project, [data-reveal]")
  .forEach((el) => io.observe(el));

/* ===== 3D tilt on project media ===== */
document.querySelectorAll("[data-tilt]").forEach((card) => {
  const max = 8;
  card.addEventListener("mousemove", (e) => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(1000px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg) scale(1.02)`;
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

/* ===== Parallax pe imaginile proiectelor la scroll ===== */
const imgs = document.querySelectorAll(".media img");
window.addEventListener(
  "scroll",
  () => {
    imgs.forEach((img) => {
      const r = img.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      const p =
        (r.top + r.height / 2 - window.innerHeight / 2) / window.innerHeight;
      img.style.setProperty("--py", `${(p * -20).toFixed(1)}px`);
      if (!img.style.transform.includes("scale"))
        img.style.transform = `translateY(${(p * -20).toFixed(1)}px)`;
    });
  },
  { passive: true },
);
