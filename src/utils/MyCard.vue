<template>
  <div>
    <button class="button" @click="showBorders = !showBorders">
      <span>{{ showBorders ? "Esconder" : "Mostrar" }} bordas</span>
    </button>
    <div class="columns is-multiline">
      <custom-frame
        :style="showBorders ? 'border:solid #000 1px;' : ''"
        :src="src"
      />
    </div>
  </div>
</template>

<script>
import CustomFrame from "./CustomFrame";

export default {
  name: "MyCard",
  components: {
    CustomFrame
  },
  data() {
    return {
      showBorders: false,
      src: `${global.location.origin}/card`
    };
  }
};
</script>

<style scoped>
html {
  overflow: hidden;
}
.columns {
  margin: 0 !important;
}
.margin-right-5 {
  margin-right: 5px;
}
</style>
