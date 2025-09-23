<template>
  <section class="hero">
    <div class="hero-overlay">
      <div class="hero-text">
        <h1>Welcome to SIRKM 2025</h1>
        <p>Seminar on Information Retrieval and Knowledge Management</p>
      </div>
    </div>
  </section>
</template>

<script setup>
// No JS needed for now
</script>

<style scoped>
.hero {
  position: relative;
  height: 500px; /* adjust as needed */
  background: url('@/assets/banner.jpg') no-repeat center center;
  background-size: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.4); /* dark overlay so text is visible */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-text {
  color: #fff;
}

.hero-text h1 {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 10px;
}

.hero-text p {
  font-size: 20px;
  font-weight: 300;
}
</style>
