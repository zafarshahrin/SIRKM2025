<template>
  <header>
    <nav class="navbar">
      <!-- Left: Logo -->
      <div class="logo">
        <img src="@/assets/logo.png" alt="SIRKM Logo" />
      </div>

      <!-- Right: Navigation Links -->
      <ul class="nav-list">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/calls">Calls</router-link></li>
        <li><router-link to="/speaker">Invited Speaker</router-link></li>
        <li><router-link to="/abstract">Abstract Submission</router-link></li>
        <li><router-link to="/programme">Programme</router-link></li>
        <li><router-link to="/registration">Registration</router-link></li>
        <li><router-link to="/committee">Committee</router-link></li>
        <li><router-link to="/media">Media</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: inline-block;
  width: 100%;
  z-index: 999;
  line-height: 0px;
  top: 0px;
  background: #fff;
  position: relative;
  margin-bottom: -5px;
}

header:before {
  content: "";
  background: #fff;
  position: absolute;
  left: -12%;
  top: 0px;
  width: 50.3%;
  height: 125px;
  z-index: 9;
  transform: skew(40deg);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
}

@media (max-width: 767px) {
  header:before {
    display: none;
  }
}

.navbar {
  display: flex;
  justify-content: space-between; /* Logo left, nav right */
  align-items: center;
  height: 125px;
  padding: 0 40px;
}

.logo img {
  height: 90px; /* Adjust as needed */
  width: auto;
}

.nav-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-list li {
  margin: 0 15px;
}

.nav-list li a {
  text-decoration: none;
  color: #333;
  font-size: 14px;
  font-weight: 600;
}

.nav-list li a:hover,
.nav-list li a.router-link-exact-active {
  color: #0056b3;
}
</style>
