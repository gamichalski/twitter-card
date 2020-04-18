<template>
  <iframe v-if="server" :src="server.domain" />
</template>

<script>
import { serverRealTimeValues } from "../utils/register.js";

export default {
  name: "App",
  data() {
    return {
      server: null
    };
  },
  created() {
    serverRealTimeValues(value => {
      this.server = value;
    });
  }
};
</script>

<style>
iframe {
  width: 100vw;
}
</style>
