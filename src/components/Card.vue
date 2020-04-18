<template>
  <div class="custom-card">
    <div class="card">
      <header></header>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img
                class="round"
                src="https://media.tenor.com/images/b28e699b2c0df03fc05d017cf4846d5f/tenor.gif"
                alt="evil papagaly"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Thiago Ferreira</p>
            <p class="subtitle is-7">
              26 anos, Joinville - SC<br /><a
                href="mailto:thiagofer93@gmail.com"
                >thiagofer93@gmail.com</a
              >
            </p>
          </div>
        </div>

        <div class="content">
          Desenvolvedor Back-end na B3 Gestão e Tecnologia - Engenheiro de
          Software formado na PUC do Paraná.
        </div>
        <div class="tags">
          <span class="tag is-primary is-rounded">C#</span>
          <span class="tag is-dark is-rounded">Git</span>
          <span class="tag is-info is-rounded">PostgreSQL</span>
          <span class="tag is-warning is-rounded">HTML</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
};
</script>

<style scoped>
.custom-card {
  height: 100%;
  width: 100%;
  padding: 15px;
}

.round {
  border-radius: 50%;
}
</style>
