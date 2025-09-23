<template>
  <header class="header">
    <!-- Top Bar -->
    <div class="top-bar">
      <div class="left">SIRKM'25</div>
      <div class="text-red-500">
        SEMINAR ON INFORMATION RETRIEVAL AND KNOWLEDGE MANAGEMENT 2025
      </div>
    </div>

    <div class="nav-container">
      <!-- Logo -->
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/logo.png" alt="SIRKM Logo" />
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
