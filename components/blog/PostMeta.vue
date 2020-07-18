<template>
  <div class="mt-6 flex items-center">
    <div class="flex-shrink-0">
      <img class="h-10 w-10 rounded-full" :src="authorData.portrait" alt="" />
    </div>
    <div class="ml-3">
      <p class="text-sm leading-5 font-medium text-gray-900">
        {{ authorData.name }}
      </p>
      <div class="flex text-sm leading-5 text-gray-500">
        <time datetime="2020-03-16">
          {{ date | date }}
        </time>
        <span class="mx-1">
          &middot;
        </span>
        <span>
          6 min read
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostMeta',
  props: {
    authorData: {
      type: Object,
      default() {
        return {}
      },
    },
    date: { type: String, default: '0000000' },
  },
}
</script>
