<template>
  <div class="custom-card">
    <div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img class="is-rounded" src="https://pbs.twimg.com/profile_images/1250960895422971904/bAcfaoj0_400x400.jpg" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4 is-marginless">{{nome}}</p>
        <p class="subtitle is-6 is-marginless">
            {{idade}} anos, {{cidade}} - {{estado}}
        </p>
        <p class="subtitle is-6">
            <a :href="twitterUserLink" target="_blank">@{{twitterUser}}</a>
            ||
            <a v-bind:href="mailtoInfo" target="_blank">{{email}}</a>
        </p>
      </div>
    </div>

    <div class="content">
        {{descricao}}
      <div class="tags">
          <span class="tag is-dark" v-for="(tag, index) in tags" :key="index">{{tag}}</span>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data(){
      return{
          nome: "Gean Farias",
          idade: "24",
          cidade: "Joinville",
          estado: "SC",
          email: "gean@ocubomagi.co",
          mailtoInfo: "mailto:gean@ocubomagi.co",
          twitterUser: "migoseutonto",
          twitterUserLink: "https://twitter.com/migoseutonto",
          descricao: "Desenvolvedor frontend, formando em Ciência da computação e amante das comidas do norte (em especial de Manaus).",
          tags: 
          [
              "#scss",
              "#responsive",
              "#html5",
              "#vue",
              "#js",
              "#cozinheiro"
          ]
      }
  }
};
</script>

<style scoped>
.custom-card {
  height: 100%;
  width: 100%;
  padding: 15px;
}
</style>
