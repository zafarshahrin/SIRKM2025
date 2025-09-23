<template>
  <section class="programme-buttons" aria-label="Programme quick links">
    <div class="container">
      <div class="buttons-grid">
        <div
          v-for="(btn, i) in buttons"
          :key="i"
          class="prog-card"
          :class="btn.colorClass"
        >
          <div class="icon" v-html="btn.icon"></div>

          <div class="card-content">
            <h3>{{ btn.title }}</h3>
            <p class="desc" v-if="btn.desc">{{ btn.desc }}</p>

            <!-- internal route -->
            <router-link
              v-if="btn.type === 'route'"
              :to="btn.to"
              class="card-action"
              >{{ btn.cta }}</router-link
            >

            <!-- external link / file -->
            <a
              v-else
              :href="btn.href"
              class="card-action"
              target="_blank"
              rel="noopener noreferrer"
              >{{ btn.cta }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const buttons = [
  {
    title: "General Programme",
    desc: "Overview / full schedule",
    type: "route",
    to: "/programme/general",
    cta: "View General",
    colorClass: "blue",
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M16 2v4M8 2v4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
  },
  {
    title: "Parallel Session 1",
    desc: "Track A — sessions & rooms",
    type: "route",
    to: "/programme/parallel-1",
    cta: "Open Session 1",
    colorClass: "green",
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="12" r="3" stroke="currentColor" stroke-width="1.5"/><circle cx="16" cy="7" r="2" stroke="currentColor" stroke-width="1.5"/></svg>`
  },
  {
    title: "Parallel Session 2",
    desc: "Track B — sessions & rooms",
    type: "route",
    to: "/programme/parallel-2",
    cta: "Open Session 2",
    colorClass: "orange",
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M8 9h8M8 13h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`
  },
  {
    title: "Programme (PDF)",
    desc: "Download full programme (PDF)",
    type: "file",
    href: "/files/programme.pdf", // <-- put the PDF in public/files/programme.pdf
    cta: "Download PDF",
    colorClass: "red",
    icon: `<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" stroke="currentColor" stroke-width="1.5"/><path d="M14 2v6h6" stroke="currentColor" stroke-width="1.5"/></svg>`
  }
];
</script>

<style scoped>
.programme-buttons {
  padding: 28px 0 40px;
  background: #fff;
  font-family: "Open Sans", sans-serif;
}
.container {
  width: 92%;
  max-width: 1200px;
  margin: 0 auto;
}

/* grid */
.buttons-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 18px;
}

/* responsive */
@media (max-width: 1024px) {
  .buttons-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .buttons-grid { grid-template-columns: 1fr; }
}

/* card */
.prog-card {
  display: flex;
  gap: 18px;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  color: #fff;
  box-shadow: 0 6px 18px rgba(0,0,0,0.08);
  transition: transform .18s ease, box-shadow .18s ease;
}
.prog-card:hover { transform: translateY(-6px); box-shadow: 0 14px 30px rgba(0,0,0,0.12); }

.prog-card .icon { width: 56px; height: 56px; display:flex; align-items:center; justify-content:center; }
.prog-card .icon svg { width: 36px; height: 36px; color: rgba(255,255,255,0.95); }

.card-content h3 { margin:0 0 6px; font-size: 18px; font-weight:700; }
.card-content .desc { margin: 0 0 10px; font-size: 13px; opacity: 0.95; }

/* CTA */
.card-action {
  display: inline-block;
  padding: 8px 12px;
  background: rgba(255,255,255,0.95);
  color: #222;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 700;
  font-size: 13px;
}

/* color themes */
.blue { background: linear-gradient(135deg,#0d6efd 0,#1469e9 100%); }
.green { background: linear-gradient(135deg,#28a745 0,#2fb04a 100%); }
.orange { background: linear-gradient(135deg,#ff7a00 0,#ff8f1a 100%); }
.red { background: linear-gradient(135deg,#d9232d 0,#e34b47 100%); }
</style>
