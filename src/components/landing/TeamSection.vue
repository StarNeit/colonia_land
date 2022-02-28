<template>
  <div class="container mx-auto px-6 pt-10 sm:pt-28">
    <h1 class="text-center text-3xl sm:text-4xl font-extrabold mt-2 mb-4">
      Meet our team
    </h1>
    <p class="text-center text-font-secondary2 text-lg sm:text-xl">
      Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis neque.
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-12 px-20">
      <TeamMemberCard
        v-for="(item, index) of members"
        :key="index"
        :title="item.title"
        :avatar="item.avatar"
        :name="item.name"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TeamMemberCard from '@/components/landing/components/TeamMemberCard.vue';

export default defineComponent({
  components: {
    TeamMemberCard,
  },
  setup() {
    const members = [
      {
        avatar: '/images/user1.jpg',
        name: 'Whitney Francis',
        title: 'Copywriter',
      },
      {
        avatar: '/images/user2.jpg',
        name: 'Leonard Krasner',
        title: 'Senior Designer',
      },
      {
        avatar: '/images/user3.jpg',
        name: 'Floyd Miles',
        title: 'Principal Designer',
      },
      {
        avatar: '/images/user4.jpg',
        name: 'Emily Selman',
        title: 'VP, User Experience',
      },
      {
        avatar: '/images/user5.jpg',
        name: 'Kristin Watson',
        title: 'VP, Human Resources',
      },
      {
        avatar: '/images/user6.jpg',
        name: 'Emma Dorsey',
        title: 'Senior Front-end Developer',
      },
    ];

    return {
      members,
    };
  },
});
</script>
