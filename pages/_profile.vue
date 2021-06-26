<template>
  <profile>

    <nuxt-content :document="profile" />
  </profile>
</template>
<script>
export default {
  head: {
    title: 'Profile Page',
  },
  async asyncData({ $content, params }) {
    const profile = await $content("profile", params.profile).fetch();

    return { profile };
  },
};
</script>