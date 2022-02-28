<template>
  <div class="bg-surface-0">
    <div class="container mx-auto px-6 pt-12 pb-0">
      <h1 class="text-4xl sm:text-6xl font-bold sm:font-extrabold text-center text-font-secondary1 max-w-[700px] mx-auto mb-6">
        What kind of vehicule do you need?
      </h1>
      <p class="text-center text-lg sm:text-xl text-font-secondary2 max-w-[800px] mx-auto">
        Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commondo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-9 md:pr-12 max-w-[1015px] mx-auto transform translate-y-32 -mt-16">
        <VehiculeCard
          v-for="(item, index) in vehicules"
          :key="index"
          :image="item.image"
          :title="item.title"
        />
      </div>
    </div>
  </div>

  <div class="container mx-auto px-6 mb-10 sm:mb-20 mt-52">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
      <ProfitCard
        v-for="(item, index) in profits"
        :key="index"
        :title="item.title"
        :description="item.description"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import VehiculeCard from '@/components/landing/components/VehiculeCard.vue';
import ProfitCard from '@/components/landing/components/ProfitCard.vue';

export default defineComponent({
  components: {
    VehiculeCard,
    ProfitCard,
  },
  setup() {
    const vehicules = [
      { image: '/images/vehicule_trucks.png', title: 'Trucks' },
      { image: '/images/vehicule_trailers.png', title: 'Trailers' },
      { image: '/images/vehicule_both.png', title: 'Both' },
    ];

    const profits = [
      {
        title: 'Höchste Qualität',
        description: 'Miete völlig flexibel Marken - Auflieger von Schmitz - Cargobull, Krone, Koegel',
      },
      {
        title: '100% flexibel',
        description: 'Vereinbare monatlich anpassbare individuelle Mietverträge',
      },
      {
        title: 'Unsere Kunden lieben uns',
        description: 'Transport ist unsere Leidenschaft. Deswegen erreichen wir bei der',
      },
      {
        title: 'Günstige Preise',
        description: 'Durch ein individuelles Angebot fährst Du zu einem günstigen Preis.',
      },
    ];

    return {
      vehicules,
      profits,
    };
  },
});
</script>
