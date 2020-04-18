<template>
  <div class="custom-card">
    <div class="card has-background-dark">
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img :src="imageURL" class="is-rounded" :alt="name" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-5 is-marginless">{{ name }}</p>
            <p class="subtitle is-6 is-marginless has-text-grey-light">{{ sub }}</p>
            <p class="subtitle is-7">
              <a href class="has-text-primary is-italic">{{ email }}</a>
            </p>
          </div>
        </div>
        <div class="content">
          <p>{{ desc }}</p>
          <div class="tags">
            <a href="#" v-for="tag in tags" :key="tag" class="tag is-black">{{ tag }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {
      imageURL: "http://placekitten.com/64/64",
      name: "Dedicio Coelho",
      sub: "35 anos | Joinvillie - SC",
      email: "dedicio@gmail.com",
      desc:
        "Desenvolvedor Front End, formado em Produção Audiovisual pela UNIP.",
      tags: [
        "Javascript",
        "HTML",
        "CSS",
        "Typescript",
        "WordPress",
        "PostgreSQL",
        "MySQL",
        "AWS",
        "Bootstrap"
      ]
    };
  }
};
</script>

<style scoped>
.custom-card {
  height: 100%;
  width: 100%;
  padding: 15px;
}
.card * {
  color: #fff;
}

.card .media:not(:last-child) {
  margin-bottom: 1em;
}
</style>
