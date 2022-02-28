<template>
  <div class="container mx-auto py-5 px-6 pt-20">
    <h1 class="font-extrabold text-center text-3xl sm:text-4xl mt-2 mb-4">
      About us
    </h1>
    <p class="text-center text-lg sm:text-xl text-font-secondary2">
      Unsere Mission: Transport aus Leidenschaft.
    </p>

    <div class="md:flex mt-10 sm:mt-20">
      <div class="w-full md:w-1/2 pr-3 mb-10 md:mb-0">
        <video
          class="rounded-xl w-full sm:min-h-[400px]"
          controls
        >
          <source
            src=""
            type="video/mp4"
          >
        </video>
      </div>
      <div class="w-full md:w-1/2 pl-0 md:pl-10">
        <h6 class="text-font-primary font-bold text-2xl sm:text-3xl mt-2 mb-2 sm:mb-6">
          Unsere Mission
        </h6>
        <p class="text-font-secondary2 text-lg sm:text-xl pr-0 sm:pr-8 mb-8">
          Colonia ist ein herstellerunabhängiger Vermieter und integrierter Dienstleister für die Transport - und
          Logistikindustrie. Wir stellen Deine Bedürfnisse in den Mittelpunkt und sorgen dafür, dass lhre Ware sicher
          ans Ziel kommt.
        </p>

        <button class="rounded-md bg-surface-4 py-2 sm:py-4 px-10 text-white text-md sm:text-xl">
          Find out more
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
