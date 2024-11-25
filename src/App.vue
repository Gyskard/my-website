<template>
  <body>
    <div class="max-w-screen-sm mx-auto">
      <Header />
      <RouterView />
      <Footer />
    </div>
  </body>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>