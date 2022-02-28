<template>
  <div class="bg-surface-1">
    <BannerSection />
    <VehiculeSection />
    <CustomerSaySection />
    <PopularModelsSection />
    <AboutUsSection />
    <TeamSection />
    <ContactSection />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import BannerSection from '@/components/landing/BannerSection.vue';
import VehiculeSection from '@/components/landing/VehiculeSection.vue';
import CustomerSaySection from '@/components/landing/CustomerSaySection.vue';
import PopularModelsSection from '@/components/landing/PopularModelsSection.vue';
import AboutUsSection from '@/components/landing/AboutUsSection.vue';
import TeamSection from '@/components/landing/TeamSection.vue';
import ContactSection from '@/components/landing/ContactSection.vue';

export default defineComponent({
  components: {
    BannerSection,
    VehiculeSection,
    CustomerSaySection,
    PopularModelsSection,
    AboutUsSection,
    TeamSection,
    ContactSection,
  },
});
</script>
