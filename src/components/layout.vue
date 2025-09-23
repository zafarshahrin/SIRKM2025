<template>
  <Navbar></Navbar>
  <main class="min-h-screen text-black pb-30"><router-view /></main>
  <Footer />
</template>

<script setup>
import Navbar from "./uicomponents/navbar.vue";
import Footer from "./uicomponents/footer.vue";
</script>

<style lang="scss" scoped></style>
