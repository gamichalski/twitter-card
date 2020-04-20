<template>
    <div class="custom-card">
        <div class="card-content">
            <div class="media">
                <div class="media-left">
                    <figure class="image is-64x64">
                        <img class="is-rounded" src="https://media-exp1.licdn.com/dms/image/C4D03AQHX0_0VsUUqRQ/profile-displayphoto-shrink_200_200/0?e=1593043200&v=beta&t=a28ksXUMjgVWMb0qeuuaHjFmsc_AHeP0AaO6d7cnm88" alt="Icone Ediana Souza">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-4">Ediana Souza</p>
                    <p class="subtitle is-6" style="margin-bottom: 3px;">21 anos, Joinville - SC </p>
                    <p class="subtitle is-size-7">edianadasilvadesouza@gmail.com</p>
                </div>
            </div>
            <div class="content margin-top">
                Graduanda em Ciência da Computação e Bolsista de Iniciação Científica na UDESC.
                <div class="knowledge margin-top">
                    <span class="tag is-black">HTML</span>
                    <span class="tag is-black">CSS</span>
                    <span class="tag is-black">JavaScript</span>
                    <span class="tag is-black">Python</span>
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
  padding: 10px;
}

.knowledge{
    display: flex;
    justify-content: space-between;
}

.margin-top{
    margin-top: 10px;
}
</style>
