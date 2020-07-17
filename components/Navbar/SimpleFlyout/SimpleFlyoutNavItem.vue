<template>
  <nuxt-link
    :to="target"
    class="-m-3 p-3 block space-y-1 rounded-md hover:bg-gray-50 transition ease-in-out duration-150"
  >
    <p class="text-base leading-6 font-medium text-gray-900">
      {{ label }}
    </p>
    <p class="text-sm leading-5 text-gray-500">
      {{ description }}
    </p>
  </nuxt-link>
</template>

<script>
export default {
  name: 'SimpleFlyoutNavItem',
  props: {
    target: {
      type: String,
      default: '/',
    },
    label: {
      type: String,
      default: 'Home',
    },
    description: {
      type: String,
      default: 'The front of the page.',
    },
  },
}
</script>
