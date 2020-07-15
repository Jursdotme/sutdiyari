<template>
  <div>
    <article>
      <h1>{{ blogPost.title }}</h1>
    </article>
  </div>
</template>

<script>
export default {
  name: 'PostPage',
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload }
    else
      return {
        blogPost: await require(`@/assets/content/blog/${params.slug}.json`),
      }
  },
  methods: {
    img(inputurl) {
      const filename = inputurl.match(/([^/]+)(?=\.\w+$)/)[0]
      return filename
    },
  },
}
</script>
