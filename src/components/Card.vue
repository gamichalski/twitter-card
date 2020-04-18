<template>
  <div class="custom-card">
    <div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img class="is-rounded" src="data:image/jpeg;base64,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" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">Lucas Peruchi</p>
        <p class="subtitle is-6">26 Anos, Joinville SC</p>
        <p class="subtitle is-6 spaceup"> lucas_peruchi123@hotmail.com</p>
      </div>
    </div>
    <div class="content">
      Analista Programador na empresa Fesc Tecnologia. Formado em 2018 pela UFSC. 
        <br>
        <br>
        <span class="tag is-link space">css</span>
        <span class="tag is-link space">javascript</span>
        <span class="tag is-link space">html</span>
        <span class="tag is-link space">vuejs</span>
        <span class="tag is-link space">bulma</span>
        <span class="tag is-link space">java</span>
        <span class="tag is-link space">sql</span>
      <br>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style scoped>
.custom-card {
  height: 100%;
  width: 100%;
  padding: 15px;
}

.space {
    margin: 3px;
}

.spaceup {
    margin-top: -20px;
}
</style>
