<template>
  <div class="custom-card">
    <div class="card" style="border-radius: 8px">
       <div class="card-content" style="padding: 1em;">
        <div class="media" style="margin-bottom: 0.5em">
          <div class="media-left">
            <figure class="image is-48x48">
              <img class="is-rounded" 
                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGDAQ_aWBya-XsoRuHZZR6DCSQ5lDJvQLylvX3XY9kG-ZR-r0l&usqp=CAU" 
                   alt="Placeholder image"
                   style="width: 48px; height: 48px; object-fit: cover;"
                                >
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">{{nome}}</p>
            <p class="subtitle is-6" style="margin-bottom: 0.25em">{{info}}</p>
            <p class="subtitle is-6"><i>{{email}}</i></p>
          </div>
          
        </div>
        <div class="content" style="margin-bottom: 0.5em">
          {{descricao}}
          <br>
        </div>
        <div class="content">
            <span v-for="(card, index) in cards" :key="index" 
                  class="tag is-black" style="margin-left: 0.25em;">
                {{card}}
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
        nome: "Marcos H. S. Dreveck",
        info: "27 anos, Jaraguá do Sul SC",
        descricao: "Desenvolvedor de sistemas na Malwee, formado em Sistemas para Internet pelo SENAI/SC.",
        cards: [ "HTML", "CSS", "JS", "Semantic-UI", "Bootstrap", "Vue", "React", ".Net", "C#", "Node", "SQL", "MongoDB"],
        email: "marcoshsdreveck@gmail.com"
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
