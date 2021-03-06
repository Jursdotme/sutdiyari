<template>
  <div
    v-show="mobileNavIsOpen"
    class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
  >
    <div class="rounded-lg shadow-lg">
      <div class="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
        <div class="pt-5 pb-6 px-5 space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                alt="Workflow"
              />
            </div>
            <div class="-mr-2">
              <button
                type="button"
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              >
                <svg
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <nav class="grid gap-6">
              <nuxt-link
                v-for="(item, index) in primaryMenu"
                :key="index"
                :to="item.target"
                href="#"
                class="-m-3 p-3 flex items-center space-x-4 rounded-lg hover:bg-gray-50 transition ease-in-out duration-150"
              >
                <div
                  class="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-indigo-500 text-white"
                  v-html="item.icon"
                ></div>
                <div class="text-base leading-6 font-medium text-gray-900">
                  {{ item.label }}
                </div>
              </nuxt-link>
            </nav>
          </div>
        </div>
        <div class="py-6 px-5 space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <nuxt-link
              v-for="(item, index) in secondaryMenu"
              :key="index"
              :to="item.target"
              class="text-base leading-6 font-medium text-gray-900 hover:text-gray-700 transition ease-in-out duration-150"
            >
              {{ item.label }}
            </nuxt-link>
          </div>
          <div class="space-y-6">
            <span class="w-full flex rounded-md shadow-sm">
              <a
                href="#"
                class="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
              >
                Sign up
              </a>
            </span>
            <p
              class="text-center text-base leading-6 font-medium text-gray-500"
            >
              Existing customer?
              <a
                href="#"
                class="text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
  props: {
    mobileNavIsOpen: Boolean,
  },
  data() {
    return {
      isOpen: false,
      mobileMenuItems: [
        {
          label: 'Analytics',
          target: '/',
          type: 'primary',
          icon:
            '<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
        },
        {
          label: 'Engagement',
          target: '/',
          type: 'primary',
          icon:
            '<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/></svg>',
        },
        {
          label: 'Security',
          target: '/',
          type: 'primary',
          icon:
            '<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
        },
        {
          label: 'Integrations',
          target: '/',
          type: 'primary',
          icon:
            '<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>',
        },
        {
          label: 'Automations',
          target: '/',
          type: 'primary',
          icon:
            '<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>',
        },
        {
          label: 'Reports',
          target: '/',
          type: 'primary',
          icon:
            '<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
        },
        { label: 'Pricing', target: '/', type: 'secondary' },
        { label: 'Docs', target: '/', type: 'secondary' },
        { label: 'Enterprise', target: '/', type: 'secondary' },
        { label: 'Blog', target: '/', type: 'secondary' },
        { label: 'Help Center', target: '/', type: 'secondary' },
        { label: 'Guides', target: '/', type: 'secondary' },
        { label: 'Security', target: '/', type: 'secondary' },
        { label: 'Events', target: '/', type: 'secondary' },
      ],
    }
  },
  computed: {
    primaryMenu() {
      return this.mobileMenuItems.filter((menuItem) => {
        return menuItem.type === 'primary'
      })
    },
    secondaryMenu() {
      return this.mobileMenuItems.filter((menuItem) => {
        return menuItem.type === 'secondary'
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
