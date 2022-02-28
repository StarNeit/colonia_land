<template>
  <div class="container mx-auto px-6 py-10 sm:pt-24 sm:pb-20">
    <div class="rounded-2xl bg-surface-2 py-10 sm:py-20 px-5">
      <h1 class="text-white font-bold text-3xl sm:text-4xl text-center mb-6">
        Get notified when we're launching
      </h1>
      <p class="text-center text-font-secondary3 text-lg sm:text-xl max-w-[760px] mx-auto">
        Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed
        consectetur neque tristique pellentesque.
      </p>

      <div class="md:flex md:items-center justify-center mt-12">
        <input
          class="h-10 sm:h-12 bg-white rounded-md px-4 md:mr-4 text-md sm:text-lg w-full mb-4 md:mb-0 md:w-[344px]"
          placeholder="Enter you email"
        />
        <button class="flex justify-center items-center text-white bg-surface-4 text-md sm:text-lg h-10 sm:h-12 px-10 rounded-md w-full md:w-40">
          Notify Me
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
  },
});
</script>
