<template>
  <div id="app" class="h-screen flex flex-col">
    <Navbar />
    <router-view class="flex-1" />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/uicomponents/navbar.vue";
import Footer from "./components/uicomponents/footer.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>
