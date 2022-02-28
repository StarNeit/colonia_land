<template>
  <div class="bg-surface-0 py-14 h-full px-4">
    <div class="container mx-auto">
      <div class="md:flex">
        <div class="w-full md:w-1/2 lg:w-2/3">
          <div class="rounded-2xl bg-white p-12 pb-6 mb-6">
            <h2 class="font-extrabold text-3xl sm:text-4.5xl text-font-primary mb-4">
              3. Enter your details
            </h2>
            <p class="text-lg sm:text-xl text-font-secondary2 mb-14">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div class="max-w-[500px]">
              <div class="mb-5">
                <TextField
                  :is-required="true"
                  :label="'Company Name'"
                />
              </div>
              <div class="mb-5">
                <TextField
                  :is-required="true"
                  :label="'Full Address'"
                />
              </div>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-2 lg:py-3 mb-5">
                <TextField
                  :is-required="true"
                  :label="'First name'"
                />
                <TextField
                  :is-required="true"
                  :label="'Last name'"
                />
              </div>
              <div class="mb-5">
                <TextField
                  :is-required="true"
                  :label="'Telephone Number'"
                />
              </div>
              <div class="mb-5">
                <TextField
                  :is-required="true"
                  :label="'Email address'"
                />
              </div>
              <div class="mb-5">
                <TextField
                  :is-multi="true"
                  :is-required="true"
                  :label="'Comments'"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="w-full md:w-1/2 lg:w-1/3 md:pl-6">
          <div class="rounded-2xl bg-white px-6 mb-6">
            <TrackModelCard
              :image="'/images/model_3.png'"
              :title="'4⨯2 Sattelzugmashine'"
              :description="'Verschiedenen Varianten von Schmitz - Cargobull, Krone, Kögel oder ähnl'"
              :price="2290"
            />
          </div>

          <div class="rounded-2xl bg-white px-6 py-4 flex items-center">
            <div class="rounded-full w-14 h-14 mr-5 relative">
              <img
                class="rounded-full"
                src="/images/user1.jpg"
                alt="user"
              >
              <span class="w-5 h-5 rounded-full bg-green-500 absolute top-0.5 -right-1 z-10 border-2 border-white"></span>
            </div>
            <h4 class="text-xl font-bold text-font-primary">
              Do you need help?
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextField from '@/components/common/TextField.vue';
import TrackModelCard from '@/components/track/TrackModelCard.vue';

export default defineComponent({
  components: {
    TextField,
    TrackModelCard,
  },
});
</script>
