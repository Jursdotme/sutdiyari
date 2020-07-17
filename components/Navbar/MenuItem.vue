<template>
  <nuxt-link
    :to="target"
    class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
  >
    {{ label }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'NavBarItem',
  props: {
    target: {
      type: String,
      default: '/',
    },
    label: {
      type: String,
      default: 'Home',
    },
  },
}
</script>
