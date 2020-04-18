<template>
<div class="card">
    <div class="card-content">
        <div class="media">
            <div class="media-left">
                <figure class="image is-48x48">
                    <img class="is-rounded" src="https://scontent.fjoi1-2.fna.fbcdn.net/v/t31.0-8/s960x960/21272867_1879132515741338_7197734476821317431_o.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=BdbsIVGvc9IAX_cdXJx&_nc_ht=scontent.fjoi1-2.fna&_nc_tp=7&oh=1c6f98386727b0b7d123fda85fe7fe4a&oe=5EC02E73" alt="perfil image">
                </figure>
            </div>
            <div class="media-content">
                <p class="title is-4">Lara Oliveira</p>
                <p class="subtitle is-6 subtitle">21 anos | Joinville-SC</p>
                <p class="subtitle is-6 subtitle">lara@gmail.com</p>
            </div>
        </div>
        <div class="content">
            <p>Estudante de Tecnologia e Análise em Desenvolvimento de Sistemas na UDESC.</p>
            <div class="tags">
                <span class="tag is-dark">HTML</span>
                <span class="tag is-dark">CSS</span>
                <span class="tag is-dark">Javascript</span>
                <span class="tag is-dark">Python</span>
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

.tags{
    margin: 10px 0 0 0;
}

.subtitle{
    margin: 0;
}

</style>
