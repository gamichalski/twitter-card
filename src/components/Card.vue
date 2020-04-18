<template>
  <div class="custom-card">
    
    <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <img
                class="is-rounded"
                src="https://i.ya-webdesign.com/images/avatar-png-1.png"
                alt="Avatar"
              />
            </figure>
          </div>
          <div class="header-content">
            <p class="title is-4">{{nome}}</p>
            <p class="subtitle is-6">{{idade}} anos, {{endereco}}</p>
            <p><a>{{email}}</a></p>
          </div>
        </div>

        <div class="content">
          <div>
            {{descricao}}
            <br/>
            {{formacao}}
          </div>
          <div class="tags">
            <span class="tag is-light" v-for="(tag, index) in tags" :key="index">
                {{tag}}
            </span>
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
          nome: "Washington Banczynski",
          idade: 31,
          endereco: "Joinville-SC",
          email: "banczynski@gmail.com",
          descricao: "Desenvolvedor de Sistemas na By Seven.",
          formacao: "Formado em Gestão de Tecnologia da Informação pela Unicesumar.",
          tags: ["C#", ".NET", "AngularJS"]
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
.subtitle{
    margin-bottom: 0.25em;
}
.content{
    margin-top: 0.75em;
}
.tags{
    margin-top: 0.75em;
}
</style>
