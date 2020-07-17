<template>
  <div class="relative">
    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
    <button
      v-click-outside="externalClick"
      type="button"
      class="group text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
      @click="toggle()"
    >
      <span>More</span>
      <!-- Item active: "text-gray-600", Item inactive: "text-gray-400" -->
      <svg
        class="text-gray-400 h-5 w-5 group-hover:text-gray-500 group-focus:text-gray-500 transition ease-in-out duration-150"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <transition name="fade">
      <div
        v-show="isOpen"
        class="absolute left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0"
      >
        <div class="rounded-lg shadow-lg">
          <div class="rounded-lg shadow-xs overflow-hidden">
            <div
              class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8"
            >
              <SimpleFlyoutNavItem
                label="Blog"
                target="/blog"
                description="Learn about tips, product updates and company culture."
              />

              <SimpleFlyoutNavItem
                label="Help Center"
                description="Get all of your questions answered in our forums of contact support."
              />

              <SimpleFlyoutNavItem
                label="Guides"
                description="Learn how to maximize our platform to get the most out of it."
              />

              <SimpleFlyoutNavItem
                label="Events"
                description="Check out webinars with experts and learn about our annual conference."
              />

              <SimpleFlyoutNavItem
                label="Security"
                description="Understand how we take your privacy seriously."
              />
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import vClickOutside from 'v-click-outside'
export default {
  name: 'AdvancedFlyout',
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    externalClick(event) {
      this.isOpen = false
    },
  },
}
</script>

<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
