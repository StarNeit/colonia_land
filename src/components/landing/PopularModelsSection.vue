<template>
  <div class="container mx-auto px-6">
    <div class="bg-white rounded-2xl shadow-sm pt-10 sm:pt-28 px-6 sm:px-16 pb-10 sm:pb-30 md:pb-44">
      <h1 class="text-3xl sm:text-4xl font-extrabold text-center text-font-primary mb-5 sm:mb-10">
        Most popular models
      </h1>
      <p class="text-center text-lg sm:text-xl text-font-secondary2 max-w-[700px] mx-auto">
        Take a look at the most popular trailers & tractor units from our customers.
        Choose from hundreds of offers.
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <ModelCard
          v-for="(item, index) of models"
          :key="index"
          :image="item.image"
          :description="item.description"
          :price="item.price"
          :title="item.title"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ModelCard from '@/components/landing/components/ModelCard.vue';

export default defineComponent({
  components: {
    ModelCard,
  },
  setup() {
    const models = [
      {
        image: '/images/model_1.png',
        title: 'Planen/Gardinenauflieger',
        description: 'Verschiedenen Varianten von Schmitz - Cargobull, Krone, Kögel oder ähnl.',
        price: 600,
      },
      {
        image: '/images/model_2.png',
        title: 'Kühlauflieger',
        description: 'Verschiedenen Varianten von Schmitz - Cargobull, Krone, Kögel oder ähnl.',
        price: 1390,
      },
      {
        image: '/images/model_3.png',
        title: '4⨯2 Sattelzugmashine',
        description: 'Verschiedenen Varianten von Schmitz - Cargobull, Krone, Kögel oder ähnl.',
        price: 2290,
      },
    ];

    return {
      models,
    };
  },
});
</script>
