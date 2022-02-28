<template>
  <div class="container mx-auto px-6 pt-2 mb-12">
    <div class="pt-16 pb-10 sm:pb-28 px-6 sm:px-24 bg-white rounded-2xl shadow-sm">
      <div class="xl:flex">
        <div class="w-fll xl:w-1/4">
          <h3 class="text-3xl sm:text-4xl font-extrabold text-font-primary mb-3">
            What our customers say about us
          </h3>
          <p class="text-lg sm:text-xl text-font-secondary2">
            Libero fames augue nisl porttitor nisi, quis, ld ac elit odio vitae elementum enim vitae nullamcorper
          </p>
        </div>
        <div class="w-full xl:w-3/4 flex flex-col items-center xl:flex-row xl:pl-28 sm:pt-10 mb-2">
          <div class="rounded-full w-40 sm:w-60 h-40 sm:h-60 flex-shrink-0 mt-6">
            <img
              src="/images/avatar.png"
              alt="customer"
            >
          </div>
          <div class="sm:pl-8 pt-5 xl:pt-2">
            <p class="font-bold text-xl sm:text-2xl text-surface-4 sm:leading-9 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            </p>
            <p>
              Judith Black
            </p>
            <p class="font-bold">
              CEO, Tuple
            </p>
          </div>
        </div>
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
