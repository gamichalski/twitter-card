<template>
<div class="custom-card">
        <article class="media">
            <figure class="media-left">
            <p class="image is-96x96">
            <img class="is-rounded" src="https://image.freepik.com/fotos-gratis/poodle-branco-fofo-adoravel-usando-oculos_126745-1353.jpg">
            </p>
            </figure>
        <div class="media-content">
            <div class="content">
            <p>
                <strong class="title is-2">Elen Souza</strong> 
                <br>
                30 anos, Joinville/SC
                <br>
                <small>elencarolinerj@gmail.com</small>
            </p>
            
            </div>
        </div>
        </article>
    <br>
    <div>
        <h1 class="media-left subtitle is-4">Análise e desenvolvimento de 
        sistemas</h1>
    </div>
    <br>
    <div class="tags are-normal">
        <span class="tag is-info">Javascript</span>
        <span class="tag is-success">Nodejs</span>
        
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
</style>
