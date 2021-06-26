<template>
  <div>
    <nuxt-content :document="profile" />
  </div>
</template>
<script>
export default {
    async asyncData({ $content, params }) {
      const profile = await $content('profile', params.profile).fetch()

      return { profile }
    }
  }
</script>