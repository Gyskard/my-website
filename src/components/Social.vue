<template>
  <div class="flex justify-center w-full flex-wrap gap-2 mt-10">
    <a v-for="media in medias" :href="media.url">
      <button
      
      class="btn btn-sm btn-outline text-[#b5b5b5] hover:border-[#b5b5b5] hover:bg-[#b5b5b5]/10"
    >
      <span :class="media.icon"></span> {{ media.name }}
  </button>
    </a>
    
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const medias = ref([
  {
    name: "Linkedin",
    icon: "icon-[tabler--brand-linkedin]",
    url: "https://www.linkedin.com/in/thomas-margueritat",
  },
  {
    name: "Github",
    icon: "icon-[tabler--brand-github]",
    url: "https://github.com/Gyskard",
  },
  {
    name: "Instagram",
    icon: "icon-[tabler--brand-instagram]",
    url: "https://www.instagram.com/thomas.margueritat",
  },
  {
    name: "Flickr",
    icon: "icon-[tabler--brand-flickr]",
    url: "https://www.flickr.com/photos/thomas-margueritat",
  },
  {
    name: "Facebook",
    icon: "icon-[tabler--brand-facebook]",
    url: "https://www.facebook.com/thomas.margueritat.42/",
  },
]);
</script>
