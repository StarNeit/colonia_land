<template>
  <div class="rounded-xl border p-5 flex flex-col items-center xl:items-start sm:mb-8">
    <div class="md:h-40 mb-14">
      <img
        :src="image"
        alt="model"
      >
    </div>
    <div class="flex-grow">
      <h6 class="font-bold text-font-primary text-lg mb-2">
        {{ title }}
      </h6>
      <p class="text-font-secondary2 text-sm">
        {{ description }}
      </p>
    </div>
    <div class="pt-8 w-full">
      <div class="flex items-center mb-8">
        <span class="text-font-secondary2 mr-3">ab</span>
        <h3 class="text-4xl font-extrabold text-font-primary">
          €{{ price }}
        </h3>
        <span class="text-font-secondary2 ml-3"> /mo</span>
      </div>

      <button class="rounded-md bg-surface-4 py-2 text-white w-full">
        Jetzt mieten
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    image: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
};
</script>
