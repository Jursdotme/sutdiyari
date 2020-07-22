<template>
  <div>
    <article
      class="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-sm sm:prose lg:prose-lg xl:prose-xl"
    >
      <h1>{{ post.title }}</h1>

      <div v-html="$md.render(post.body)"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'Page',
  async asyncData({ params, payload }) {
    if (payload) return { post: payload }
    else
      return {
        post: await require(`@/assets/content/pages/${params.slug}.json`),
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
