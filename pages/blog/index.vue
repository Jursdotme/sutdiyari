<template>
  <div
    class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
  >
    <div class="absolute inset-0">
      <div class="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div class="relative max-w-7xl mx-auto">
      <div class="text-center">
        <h2
          class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
        >
          From the blog
        </h2>
        <p
          class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero
          labore natus atque, ducimus sed.
        </p>
      </div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          v-for="post in loadedPosts"
          :key="post.slug"
          class="flex flex-col rounded-lg shadow-lg overflow-hidden mt-12"
        >
          <nuxt-link :to="postLink(post)" class="flex-shrink-0">
            <img :src="post.thumbnail" class="w-full object-cover" alt="" />
          </nuxt-link>
          <div class="flex-1 bg-white p-6 flex flex-col justify-between">
            <div class="flex-1">
              <p class="text-sm leading-5 font-medium text-indigo-600">
                <nuxt-link :to="postLink(post)" class="hover:underline"
                  >Blog</nuxt-link
                >
              </p>
              <nuxt-link :to="postLink(post)" class="block">
                <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  {{ post.title }}
                </h3>
                <p class="mt-3 text-base leading-6 text-gray-500">
                  {{ post.description }}
                </p>
              </nuxt-link>
            </div>

            <PostMeta :author-data="post.author" :date="post.date" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogLoop',
  data() {
    return {
      postCount: 10,
    }
  },
  computed: {
    loadedPosts() {
      return this.$store.state.blogPosts.slice(0, this.postCount)
    },
  },
  methods: {
    postLink(post) {
      return 'blog/' + post.slug
    },
  },
}
</script>
