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
    const blogPosts = blogPostFiles
      .keys()
      .map((key) => {
        const res = blogPostFiles(key)
        res.slug = key.slice(2, -5)
        return res
      })
      .sort(function (a, b) {
        // Turn your strings into dates, and then subtract them
        // to get a value that is either negative, positive, or zero.
        return new Date(b.date) - new Date(a.date)
      })
    await commit('setBlogPosts', blogPosts)
  },
}
