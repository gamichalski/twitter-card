<template>
  <div class="column is-3" :class="{ 'is-loading': isLoading }">
    <iframe @load="loaded" :src="src" />
  </div>
</template>

<script>
export default {
  name: "CustomFrame",
  props: {
    src: String
  },
  data() {
    return {
      isLoading: true
    };
  },
  created() {
    console.log("custom frame");
  },
  methods: {
    loaded() {
      this.isLoading = false;
    }
  }
};
</script>

<style>
iframe {
  height: 250px;
  width: 100%;
}
.column.is-3 {
  height: 252px;
  padding: 0;
}
.is-loading::before {
  -webkit-animation: spinAround 0.5s infinite linear;
  animation: spinAround 0.5s infinite linear;
  border: 2px solid #dbdbdb;
  border-radius: 290486px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 15px;
  position: relative;
  width: 15px;
  top: 50%;
  left: 50%;
}

.is-loading::after {
  left: 50% !important;
  margin-left: -15px !important;
  margin-top: -15px !important;
  position: absolute !important;
  top: 50% !important;
}
</style>
