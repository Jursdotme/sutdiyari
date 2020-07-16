<template>
  <div>
    <article class="mx-auto mt-12 prose">
      <h1>{{ blogPost.title }}</h1>
      <div v-html="$md.render(blogPost.body)"></div>
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
