<template>
  <div class="flex flex-col items-center pt-3">
    <div class="w-12 h-12 rounded-md bg-surface-2 flex justify-center items-center mb-8">
      <img
        src="/images/icon_upload.png"
        alt="upload-icon"
      >
    </div>
    <h6 class="text-lg font-bold mb-5">
      {{ title }}
    </h6>
    <p class="text-center text-gray-400 px-10 text-font-secondary2">
      {{ description }}
    </p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
};
</script>
