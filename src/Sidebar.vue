<template>
  <nav class="bg-gray-800 flex-shrink-0 h-screen w-64">
    <div class="px-4 py-5 flex-grow">
      <h3 class="text-xl font-medium text-white">Heading</h3>
      <ul class="mt-5">
        <li
          v-for="item in menuItems"
          :key="item.text"
        >
          <router-link
            class="block px-3 py-2 rounded-lg text-base font-medium text-white hover:bg-gray-700"
            :to="item.url"
          >{{ item.text }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      required: true,
    },
  },
};
</script>
