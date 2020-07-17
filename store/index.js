export const state = () => ({
  blogPosts: [],
  authors: [],
  settings: [],
})

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await dispatch('getBlogPosts')
    await dispatch('getAuthors')
    await dispatch('getSettings')
  },
  async getBlogPosts({ commit }) {
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

  async getAuthors({ commit }) {
    const authorFile = require('~/assets/settings/authors.json')
    await commit('setAuthors', authorFile)
  },

  async getSettings({ commit }) {
    const settingsFile = require('~/assets/settings/settings.json')
    await commit('setSettings', settingsFile.author)
  },
}

export const mutations = {
  setBlogPosts(state, list) {
    state.blogPosts = list
  },
  setAuthors(state, data) {
    state.authors = data
  },
  setSettings(state, data) {
    state.settings = data
  },
}
