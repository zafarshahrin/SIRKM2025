<template>
  <header class="header">
    <div class="flex justify-end items-center w-full">
      <div class="flex w-[65%] items-center">
        <!-- Black slanted div -->
        <div
          class="bg-black text-white font-bold flex items-center px-10 gap-8 pr-13"
          style="clip-path: polygon(0% 0%, 100% 0%, 96% 100%, 4% 100%)">
          <div class="pr-10 pl-5">SIRKM'25</div>
          <div class="bg-amber-500 transform skew-x-40 px-4">
            <div class="-skew-x-40 text-white px-4 h-10 flex items-center">
              SEMINAR ON INFORMATION RETRIEVAL AND KNOWLEDGE MANAGEMENT 2025
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full flex justify-center">
      <div class="w-[60%] flex items-center justify-between">
        <!-- Logo -->
        <div class="logo shrink-0">
          <router-link to="/">
            <img
              src="https://www.ftsm.ukm.my/sirkm2022/sirkm2022/images/logo-sirkmbaru.png"
              alt="SIRKM Logo" />
          </router-link>
        </div>

        <!-- Navigation -->
        <nav class="menu">
          <ul>
            <li><router-link to="/">HOME</router-link></li>
            <li><router-link to="/calls">CALLS</router-link></li>
            <li>
              <router-link to="/invited-speaker">INVITED SPEAKER</router-link>
            </li>
            <li>
              <router-link to="/abstract-submission"
                >ABSTRACT SUBMISSION</router-link
              >
            </li>
            <li><router-link to="/programme">PROGRAMME</router-link></li>
            <li><router-link to="/registration">REGISTRATION</router-link></li>
            <li><router-link to="/committee">COMMITTEE</router-link></li>
            <li><router-link to="/media">MEDIA</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
// No script needed, Vue Router handles navigation
</script>

<style scoped>
/* === Top Bar === */
.top-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
}

.top-bar .left {
  background: #000;
  color: #fff;
  padding: 6px 20px;
}

.top-bar .right {
  background: #f39c12; /* orange */
  color: #fff;
  padding: 6px 20px;
  text-transform: uppercase;
}

/* === Logo + Navigation === */
.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 40px;
}

.logo img {
  max-height: 70px;
}

/* === Menu === */
.menu ul {
  display: flex;
  gap: 25px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu a {
  color: #000;
  font-weight: 600;
  text-decoration: none;
  font-size: 14px;
  padding: 6px 0;
  position: relative;
}

.menu a:hover {
  color: #f39c12;
}
</style>
