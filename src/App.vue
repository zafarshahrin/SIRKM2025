<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/uicomponents/navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>
