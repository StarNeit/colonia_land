<template>
  <div
    class="group w-full flex flex-col relative"
  >
    <span :class="`absolute bg-white top-3 left-4 px-1 text-md text-font-secondary2 leading-tight transition pointer-events-none duration-300 ease-in-out ${isFocused && '-translate-y-6 -translate-x-2'}`">
      {{ label }}
      <span
        v-if="isRequired"
        class="text-red-500 ml-1"
      >*</span>
    </span>
    <template v-if="!isMulti">
      <input
        class="border rounded-md h-12 px-4 focus:rounded-md focus:border-blue-400 focus:outline-none"
        :placeholder="label && isFocused ? placeholder : ''"
        @focusin="onFocus"
        @focusout="onFocusLeave"
      >
    </template>
    <template v-if="isMulti">
      <textarea
        rows="8"
        class="border-gray-300 rounded-md focus:rounded-md focus:border-blue-400 focus:outline-none"
        :placeholder="label && isFocused ? placeholder : ''"
        @focusin="onFocus"
        @focusout="onFocusLeave"
      />
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
  },
  props: {
    isRequired: {
      type: Boolean,
      default: false,
    },
    isMulti: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
  data: () => ({
    isFocused: false,
  }),
  methods: {
    onFocus() {
      this.isFocused = true;
    },
    onFocusLeave() {
      this.isFocused = false;
    },
  },
});
</script>
