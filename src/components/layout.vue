<template>
  <Navbar></Navbar>
  <div class="h-screen text-black"><router-view class="flex-1" /></div>
  <Footer />
</template>

<script setup>
import Navbar from "./uicomponents/navbar.vue";
import Footer from "./uicomponents/footer.vue";
</script>

<style lang="scss" scoped></style>
