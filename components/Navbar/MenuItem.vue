<template>
  <div>
    <nuxt-link
      v-if="type == 'normal'"
      :to="target"
      class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
    >
      {{ label }}
    </nuxt-link>

    <AdvancedFlyout
      v-if="type == 'AdvancedFlyout'"
      :label="label"
      :sub-items="subItems"
      :type="type"
    />

    <SimpleFlyout
      v-if="type == 'SimpleFlyout'"
      :label="label"
      :sub-items="subItems"
    />
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    type: {
      type: String,
      default: 'simple',
      required: true,
    },
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
    icon: {
      type: String,
      default:
        '<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>',
    },
    subItems: {
      type: Array,
      default() {
        return ['No object was passed to submenu']
      },
    },
  },
}
</script>
