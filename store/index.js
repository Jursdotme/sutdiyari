export const state = () => ({
  blogPosts: [],
})

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  },
}

export const actions = {
  async nuxtServerInit({ commit }) {
    const blogPostFiles = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    )
    const blogPosts = blogPostFiles.keys().map((key) => {
      const res = blogPostFiles(key)
      res.slug = key.slice(2, -5)
      return res
    })
    await commit('setBlogPosts', blogPosts)
  },
}
