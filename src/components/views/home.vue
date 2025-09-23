<template>
  <div class="home-content">
    <!-- Hero Section -->
    <section class="hero">
      <div class="overlay">
        <div class="hero-content">
          <!-- You can add text or leave it blank -->
        </div>
      </div>
    </section>

    <!-- Download Buttons -->
    <section class="downloads">
      <div class="button-container">
        <a href="#" download class="download-btn">
          <i class="fa-solid fa-download"></i> GENERAL PROGRAMME SCHEDULE
        </a>
        <a href="#" download class="download-btn">
          <i class="fa-solid fa-download"></i> PARALLEL SESSION 1 &amp; 2
          SCHEDULE
        </a>
        <a href="#" download class="download-btn">
          <i class="fa-solid fa-download"></i> PARALLEL SESSION 3 SCHEDULE
        </a>
        <a href="#" download class="download-btn">
          <i class="fa-solid fa-download"></i> E-PROCEEDING
        </a>
      </div>
    </section>

    <!-- Introduction (SEPARATE SECTION, BELOW THE BUTTONS) -->
    <section class="introduction">
      <div class="container">
        <h2>Introduction</h2>
        <p>
          The Seminar on Information Retrieval and Knowledge Management 2022
          (SIRKM'22) welcome all researchers to share their ongoing research and
          provide an opportunity to share their work. SIRKM'22 aims to encourage
          knowledge sharing by providing a platform for interactive discussions
          with experts in information retrieval, knowledge management, and its
          related fields. It also hopes to encourage community-building by
          connecting early and advanced researchers. SIRKM'22 is jointly
          organised by the Universiti Kebangsaan Malaysia (UKM) and the Society
          of Information Retrieval and Knowledge Management, Malaysia (PECAMP).
        </p>
        <p>
          SIRKM was founded in 2017, is a PECAMP key event for the discussion of
          research on information retrieval and knowledge management. Our past
          SIRKM were SIRKM'20-Online (University of Malaya), SIRKM'18
          (International Islamic University Malaysia), and SIRKM'17 (Universiti
          Putra Malaysia).
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
// no JS needed
</script>

<style scoped>
/* wrapper - add bottom padding so fixed footer won't overlap content */
.home-content {
  display: block;
  width: 100%;
  /* If your footer is fixed/absolute, increase this value to match footer height */
  padding-bottom: 120px;
}

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
  background: #fff; /* keeps the buttons area white */
  padding: 30px 20px;
  text-align: center;
}

.button-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap; /* Responsive for smaller screens */
  margin-bottom: 0; /* keep introduction directly below */
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
  gap: 8px; /* space between icon and text */
  transition: background 0.3s ease;
}

.download-btn:hover {
  background: #f39c12;
}

/* Ensure Font Awesome icons display correctly inside scoped */
.download-btn i {
  font-family: "Font Awesome 6 Free" !important;
  font-weight: 900 !important; /* solid icons */
}

/* === Introduction Section (separate, BELOW downloads) === */
.introduction {
  background: transparent; /* leave it transparent so footer is visible below */
  padding: 36px 20px;
}

.introduction .container {
  max-width: 1000px;
  margin: 0 auto;
}

.introduction h2 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #1d3557;
  text-align: left;
}

.introduction p {
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 12px;
  color: #333;
  text-align: justify;
}
</style>
