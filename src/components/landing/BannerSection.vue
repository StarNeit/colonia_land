<template>
  <div class="bg-surface-3 w-full">
    <div class="container mx-auto pt-10 sm:pt-20 pb-10 sm:pb-16 px-6">
      <div class="w-full xl:w-1/2">
        <h1 class="text-4xl sm:text-6xl font-bold text-white mb-5">
          Auflieger mieten?
          Hier bist Du richtig.
        </h1>
        <p class="text-lg sm:text-xl text-font-secondary3 pr-10 mb-10">
          Monatliche Miete zum Fixpreis ohne zusätzliche Kosten. Wirberaten Dich gerne - unser Sortiment umfasst
          Planenauflieger, Kofferauflieger und Kühlauflieger.
        </p>

        <p class="text-white font-medium">
          USED BY
        </p>
        <div class="flex pt-5">
          <a
            href="#"
            class="mr-5 sm:mr-20"
          >
            <img
              src="/images/used_1.png"
              alt="tuple"
            >
          </a>
          <a
            href="#"
            class="mr-5 sm:mr-20"
          >
            <img
              src="/images/used_2.png"
              alt="workcation"
            >
          </a>
          <a href="#">
            <img
              src="/images/used_3.png"
              alt="statickit"
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BannerSection',
  components: {
  },
});
</script>
