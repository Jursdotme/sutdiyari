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
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        class="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12"
      >
        <nav class="flex space-x-10">
          <MenuItem />
          <AdvancedFlyout />
          <MenuItem label="Pricing" target="pricing" />
          <MenuItem label="Docs" target="docs" />

          <SimpleFlyout />
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
    <MobileMenu />
  </div>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>
