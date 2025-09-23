<template>
  <section class="hero">
    <div class="overlay">
      <div class="hero-content">
        <!-- You can add text or leave it blank -->
      </div>
    </div>
  </section>

  <!-- Download Buttons + Introduction -->
  <section class="downloads">
    <div class="button-container">
      <a href="#" download class="download-btn">
        <i class="fa-solid fa-download"></i> GENERAL PROGRAMME SCHEDULE
      </a>
      <a href="#" download class="download-btn">
        <i class="fa-solid fa-download"></i> PARALLEL SESSION 1 & 2 SCHEDULE
      </a>
      <a href="#" download class="download-btn">
        <i class="fa-solid fa-download"></i> PARALLEL SESSION 3 SCHEDULE
      </a>
      <a href="#" download class="download-btn">
        <i class="fa-solid fa-download"></i> E-PROCEEDING
      </a>
    </div>


  </section>
</template>

<script setup>
// no JS needed yet
</script>

<style scoped>
/* === Hero Section === */
.hero {
  position: relative;
  background: url("@/assets/homepageslider.png") no-repeat center center/cover;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero .overlay {
  background: rgba(255, 255, 255, 0.05);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  text-align: center;
  color: #fff;
}

/* === Download Buttons Section === */
.downloads {
  background: #fff;
  padding: 40px 20px;
  text-align: center;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap; /* Responsive for smaller screens */
  margin-bottom: 40px;
}

.download-btn {
  background: #1d3557;
  color: #fff;
  padding: 12px 20px;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background 0.3s ease;
}

.download-btn:hover {
  background: #f39c12;
}

/* === Introduction Section === */
.introduction {
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
}

.introduction h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 15px;
  text-align: center;
  color: #1d3557;
}

.introduction p {
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 15px;
  color: #333;
  text-align: justify;
}
</style>
