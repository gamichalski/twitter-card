<template>
    <div class="custom-card">
        <div class="card has-background-dark">
            <div class="card-content">
                <div class="media">
                    <div class="media-left">
                        <figure class="image is-64x64">
                            <img src="http://placekitten.com/64/64" alt="Dedicio Coelho" class="is-rounded">
                        </figure>
                    </div>
                    <div class="media-content">
                        <p class="title is-5 is-marginless">Dedicio Coelho</p>
                        <p class="subtitle is-6 is-marginless has-text-grey-light">35 anos | Joinvillie - SC</p>
                        <p class="subtitle is-7">
                            <a href="https://dedicio.com" class="has-text-primary is-italic">dedicio@gmail.com</a>
                        </p>
                    </div>
                </div>
                <div class="content">
                    <p>
                        Desenvolvedor Front End, formado em Produção Audiovisual pela UNIP.
                    </p>
                    <div class="tags">
                        <a href="#" class="tag is-black">Javascript</a>
                        <a href="#" class="tag is-black">HTML</a>
                        <a href="#" class="tag is-black">CSS</a>
                        <a href="#" class="tag is-black">Node.js</a>
                        <a href="#" class="tag is-black">Typescript</a>
                        <a href="#" class="tag is-black">WordPress</a>
                        <a href="#" class="tag is-black">PHP</a>
                        <a href="#" class="tag is-black">PostgreSQL</a>
                        <a href="#" class="tag is-black">MySQL</a>
                        <a href="#" class="tag is-black">AWS</a>
                        <a href="#" class="tag is-black">Bootstrap</a>
                    </div>
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
.card * {
    color: #FFF;
}

.card .media:not(:last-child) {
    margin-bottom: 1em;
}
</style>
