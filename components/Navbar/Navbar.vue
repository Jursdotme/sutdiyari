<template>
  <div class="relative bg-white shadow z-10">
    <div
      class="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10"
    >
      <div>
        <a href="#" class="flex">
          <img
            class="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
            alt="Workflow"
          />
        </a>
      </div>
      <div class="-mr-2 -my-2 md:hidden">
        <button
          v-click-outside="externalClick"
          type="button"
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          @click="toggle()"
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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        class="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12"
      >
        <nav class="flex space-x-10">
          <MenuItem
            v-for="(menuItem, index) in menuItems"
            :key="index"
            v-bind="menuItem"
          />
        </nav>

        <div class="flex items-center space-x-8">
          <a
            href="#"
            class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
          >
            Sign in
          </a>
          <span class="inline-flex rounded-md shadow-sm">
            <a
              href="#"
              class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            >
              Sign up
            </a>
          </span>
        </div>
      </div>
    </div>

    <!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
    <MobileMenu :mobile-nav-is-open="mobileNavIsOpen" />
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'

export default {
  name: 'Navbar',
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      mobileNavIsOpen: false,
      menuItems: [
        {
          label: 'Solutions',
          type: 'AdvancedFlyout',
          subItems: [
            {
              label: 'Analytics',
              target: '/',
              type: 'regular',
              description:
                'Get a better understanding of where your traffic is coming from.',
              icon:
                '<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>',
            },
            {
              label: 'Engagement',
              target: '/',
              type: 'regular',
              description:
                'Speak directly to your customers in a more meaningful way.',
              icon:
                '<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/></svg>',
            },
            {
              label: 'Security',
              target: '/',
              type: 'regular',
              description: 'Your customers data will be safe and secure.',
              icon:
                '<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>',
            },
            {
              label: 'Integrations',
              target: '/',
              type: 'regular',
              description:
                'Connect with third-party tools that you’re already using.',
              icon:
                '<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>',
            },
            {
              label: 'Automations',
              target: '/',
              type: 'regular',
              description:
                'Build strategic funnels that will drive your customers to convert.',
              icon:
                '<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>',
            },
            {
              label: 'Reports',
              target: '/',
              type: 'regular',
              description:
                'Get detailed reports that will help you make more informed decisions.',
              icon:
                '<svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>',
            },
            {
              label: 'Enterprise',
              type: 'wide',
              target: '/',
              description:
                'Empower your entire team with even more advanced tools.',
              pill: 'New',
            },
          ],
        },
        { label: 'Pricing', target: '/', type: 'normal' },
        { label: 'Docs', target: '/', type: 'normal' },
        {
          label: 'Solutions',
          type: 'SimpleFlyout',
          subItems: [
            {
              label: 'Blog',
              description:
                'Learn about tips, product updates and company culture.',
              target: '/blog',
              type: 'secondary',
            },
            {
              label: 'Help Center',
              description:
                'Get all of your questions answered in our forums of contact support.',
              target: '/',
              type: 'secondary',
            },
            {
              label: 'Guides',
              description:
                'Learn how to maximize our platform to get the most out of it.',
              target: '/',
              type: 'secondary',
            },
            {
              label: 'Security',
              description:
                'Check out webinars with experts and learn about our annual conference.',
              target: '/',
              type: 'secondary',
            },
            {
              label: 'Events',
              description: 'Understand how we take your privacy seriously.',
              target: '/',
              type: 'secondary',
            },
          ],
        },
      ],
    }
  },
  methods: {
    toggle() {
      this.mobileNavIsOpen = !this.mobileNavIsOpen
    },
    externalClick(event) {
      this.mobileNavIsOpen = false
    },
  },
}
</script>
