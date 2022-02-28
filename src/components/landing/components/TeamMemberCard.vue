<template>
  <div class="flex flex-col items-center mb-12">
    <div class="rounded-full w-36 h-36 sm:w-56 sm:h-56 mb-6 rounded-full overflow-hidden">
      <img
        :src="avatar"
        alt="avatar"
      >
    </div>
    <span class="text-md sm:text-lg font-medium text-font-primary">{{ name }}</span>
    <span class="text-info font-medium text-md sm:text-lg">{{ title }}</span>
    <div class="flex justify-center items-center pt-2">
      <span
        role="button"
        class="cursor-pointer mx-2"
      >
        <img
          src="/images/icon-twitter.png"
          alt="twitter"
        >
      </span>
      <span
        role="button"
        class="cursor-pointer mx-2"
      >
        <img
          src="/images/icon-linkedin.png"
          alt="linkedin"
        >
      </span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    avatar: {
      type: String,
    },
    name: {
      type: String,
    },
    title: {
      type: String,
    },
  },
};
</script>
