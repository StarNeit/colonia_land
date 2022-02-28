<template>
  <div class="pt-8 px-10 pb-7">
    <div class="mb-2">
      <div class="flex justify-center">
        <img
          :src="image"
          alt="model"
          class="max-w-[200px]"
        >
      </div>
    </div>
    <div class="flex-grow">
      <h6 class="font-bold text-font-primary text-lg mb-3">
        {{ title }}
      </h6>
      <p class="text-font-secondary2 text-sm">
        {{ description }}
      </p>
    </div>
    <div class="pt-5 w-full">
      <div class="flex items-center mb-6">
        <span class="text-font-secondary2 mr-3">ab</span>
        <h3 class="text-4xl font-extrabold text-font-primary">
          €{{ price }}
        </h3>
        <span class="text-font-secondary2 ml-3"> /mo</span>
      </div>

      <div class="flex items-center px-5">
        <span class="text-font-secondary2 mr-5 text-sm">Quantity</span>
        <select class="border-gray-300 rounded-md w-14 h-10 p-0 pl-2 focus:outline-none">
          <option value="2">
            1
          </option>
          <option value="2">
            2
          </option>
          <option value="3">
            3
          </option>
        </select>
      </div>
    </div>
  </div>
  <div class="border-t pt-5 flex justify-center pb-7">
    <button class="rounded-3xl bg-red-500 text-white w-52 h-12">
      Next
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextField from '@/components/common/TextField.vue';

export default defineComponent({
  name: 'TrackModelCard',
  components: {
    TextField,
  },
  props: {
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    price: {
      type: Number,
      default: 0,
    },
  },
});
</script>
