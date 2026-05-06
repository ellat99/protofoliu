const projects = [
  {
    n: "01", title: "Best Movers", year: "2024",
    role: "Website corporate · UX & Development",
    description: "Platformă de prezentare pentru o companie de mutări din România. Focus pe conversii, formulare de cerere ofertă rapide și performanță mobile.",
    tags: ["Next.js","UI/UX","SEO"],
    image: "bestmovers.jpg",
    url: "https://bestmovers.ro/"
  },
  {
    n: "02", title: "The Factory Agency", year: "2024",
    role: "Site agenție · Branding digital",
    description: "Identitate digitală îndrăzneață pentru o agenție creativă. Tipografie monumentală, animații fluide și un sistem de grilă editorial.",
    tags: ["Design","Motion","Frontend"],
    image: "factory.jpg",
    url: "https://thefactory.agency/"
  },
  {
    n: "03", title: "Urban Caves", year: "2025",
    role: "Real estate · E-commerce experience",
    description: "Experiență premium pentru apartamente urbane boutique. Galerii imersive, story telling vizual și un proces de rezervare elegant.",
    tags: ["Webflow","3D","CMS"],
    image: "urbancaves.jpg",
    url: "https://www.urbancaves.ro/"
  }
];

const tech = ["React","Next.js","TypeScript","Tailwind","Figma","Webflow","Node.js","Framer Motion","GSAP"];

const wrap = document.getElementById("projects");
wrap.innerHTML = projects.map((p,i)=>`
  <article class="project ${i%2?'reverse':''}">
    <div class="media">
      <a href="${p.url}" target="_blank" rel="noopener noreferrer">
        <img src="${p.image}" alt="Mockup proiect ${p.title}" loading="lazy" />
      </a>
    </div>
    <div class="meta">
      <div class="meta-row"><span class="num">${p.n}</span><span>${p.year}</span></div>
      <h3>${p.title}</h3>
      <p class="role">${p.role}</p>
      <p class="desc">${p.description}</p>
      <div class="tags">${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}</div>
      <a class="live-link" href="${p.url}" target="_blank" rel="noopener noreferrer">Vizitează site-ul live ↗</a>
    </div>
  </article>
`).join("");

document.getElementById("tech-chips").innerHTML = tech.map(t=>`<span class="chip">${t}</span>`).join("");
document.getElementById("year").textContent = new Date().getFullYear();
