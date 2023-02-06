<template>
  <div class="flex h-screen">
    <Sidebar :menuItems="menuItems" />

    <Dashboard />
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Dashboard from "./Dashboard.vue";

export default {
  components: {
    Sidebar,
    Dashboard,
  },
  data() {
    return {
      menuItems: [
        { text: "Link 1", url: "#" },
        { text: "Link 2", url: "#" },
        { text: "Link 3", url: "#" },
      ],
    };
  },
};
</script>
