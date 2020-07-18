<template>
  <div class="relative">
    <!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->
    <button
      v-click-outside="externalClick"
      type="button"
      class="group text-gray-500 inline-flex items-center space-x-2 text-base leading-6 font-medium hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
      @click="toggle()"
    >
      <span>{{ label }}</span>
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
        class="absolute -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl"
      >
        <div class="rounded-lg shadow-lg">
          <div class="rounded-lg shadow-xs overflow-hidden">
            <div
              class="z-20 relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2"
            >
              <nuxt-link
                v-for="(subItem, index) in regularMenu"
                :key="`subItem-${index}`"
                :to="subItem.target"
                class="-m-3 p-3 flex items-start space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
              >
                <div
                  v-if="subItem.icon"
                  class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white sm:h-12 sm:w-12"
                  v-html="subItem.icon"
                ></div>
                <div class="space-y-1">
                  <p class="text-base leading-6 font-medium text-gray-900">
                    {{ subItem.label }}
                  </p>
                  <p
                    v-if="subItem.description"
                    class="text-sm leading-5 text-gray-500"
                  >
                    {{ subItem.description }}
                  </p>
                </div>
              </nuxt-link>
            </div>
            <div class="p-5 bg-gray-50 sm:p-8">
              <nuxt-link
                v-for="(subItem, index) in wideMenu"
                :key="`subItem-${index}`"
                :to="subItem.target"
                class="-m-3 p-3 flow-root space-y-1 rounded-md hover:bg-gray-100 transition ease-in-out duration-150"
              >
                <div class="flex items-center space-x-3">
                  <div class="text-base leading-6 font-medium text-gray-900">
                    {{ subItem.label }}
                  </div>
                  <span
                    v-if="subItem.pill"
                    class="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-indigo-100 text-indigo-800"
                  >
                    {{ subItem.pill }}
                  </span>
                </div>
                <p class="text-sm leading-5 text-gray-500">
                  Empower your entire team with even more advanced tools.
                </p>
              </nuxt-link>
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
  props: {
    label: {
      type: String,
      default: 'Label Missing',
    },
    subItems: {
      type: Array,
      default() {
        return { message: 'No object was passed to submenu' }
      },
    },
    type: {
      type: String,
      default: 'regular',
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    regularMenu() {
      return this.subItems.filter((subMenuItem) => {
        return subMenuItem.type === 'regular'
      })
    },
    wideMenu() {
      return this.subItems.filter((subMenuItem) => {
        return subMenuItem.type === 'wide'
      })
    },
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

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 200ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
