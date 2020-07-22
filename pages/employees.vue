<template>
  <div class="bg-gray-50">
    <div class="lg:text-center py-12">
      <h1
        class="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase"
      >
        Employees
      </h1>
      <p
        class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
      >
        Meet the Team
      </p>
      <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
        Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
        voluptatum cupiditate veritatis in accusamus quisquam.
      </p>
    </div>

    <ul
      class="max-w-7xl mx-auto sm:p-6 lg:p-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      <li
        v-for="(employee, index) in loadedEmployees"
        :key="index"
        class="col-span-1 flex flex-col text-center bg-white rounded-lg shadow"
      >
        <div class="flex-1 flex flex-col p-8">
          <img
            class="w-32 h-32 flex-shrink-0 mx-auto bg-black rounded-full"
            :src="employee.portrait"
            alt=""
          />
          <h3 class="mt-6 text-gray-900 text-sm leading-5 font-medium">
            {{ employee.title }}
          </h3>
          <dl class="mt-1 flex-grow flex flex-col justify-between">
            <dt class="sr-only">Title</dt>
            <dd class="text-gray-500 text-sm leading-5">
              {{ employee.employeetitle }}
            </dd>
          </dl>
        </div>
        <div class="border-t border-gray-200">
          <div class="-mt-px flex">
            <div class="w-0 flex-1 flex border-r border-gray-200">
              <a
                :href="mailToLink(employee)"
                class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
              >
                <svg
                  class="w-5 h-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                  />
                  <path
                    d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                  />
                </svg>
                <span class="ml-3">Email</span>
              </a>
            </div>
            <div class="-ml-px w-0 flex-1 flex">
              <a
                :href="telLink(employee)"
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm leading-5 text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 transition ease-in-out duration-150"
              >
                <svg
                  class="w-5 h-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                  />
                </svg>
                <span class="ml-3">Call</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    loadedEmployees() {
      return this.$store.state.employees.slice(0, this.postCount)
    },
  },
  methods: {
    mailToLink(employee) {
      return 'mailto:' + employee.email
    },
    telLink(employee) {
      return 'mailto:' + employee.phone
    },
  },
}
</script>
