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
        { text: "Home", url: "/" },
        { text: "Alt Page", url: "/alt-page" },
        { text: "New Page", url: "/new-page" },
      ],
    };
  },
};
</script>
