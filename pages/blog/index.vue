/* eslint-disable no-unused-vars */
<template>
  <div>Blog</div>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.state.blogPosts
    },
  },
}
</script>
