<template>
    <div class="custom-card">
        <div class="card">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-48x48">
                            <img src="https://i.pinimg.com/originals/fb/43/42/fb434227235450d53fddde5fdd05b09c.gif" class="is-rounded" alt="Placeholder image">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-5">Carlos Pecher</p>
                        <p class="subtitle is-6">
                            24 anos, Joinville-SC
                            <br>
                            <span class="is-size-7">carlos.pecher96@gmail.com</span>
                        </p>
                    </div>
                </div>

                <div class="content">
                    Programador na M&amp;O Sistemas. Formado em 2019 no SENAI/SC.
                    <br>
                    <div class="tags">
                        <span class="tag is-primary is-light">java</span> 
                        <span class="tag is-primary is-light">angularjs</span> 
                        <span class="tag is-primary is-light">bootstrap</span> 
                        <span class="tag is-primary is-light">vuejs</span> 
                        <span class="tag is-primary is-light">bulma</span> 
                        <span class="tag is-primary is-light">delphi</span>
                    </div>
                    <time datetime="2020-04-18">16:03 - 18 de Abril de 2020</time>
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
</style>
