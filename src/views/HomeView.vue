<template>
  <div class="home">
    <ul>
      <template v-for="(item, i) in user">
        <li :key="i">{{ item }}</li>
      </template>
    </ul>
  </div>
</template>

<script>
import { getUser } from "@/api/index.js";

export default {
  name: "HomeView",
  components: {},
  data() {
    return {
      user: [],
    };
  },
  async created() {
    this.user = await getUser();
  },
};
</script>
