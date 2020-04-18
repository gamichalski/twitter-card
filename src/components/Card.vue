<template>
  <div class="custom-card">
    <div class="header">
        <figure class="image is-64x64">
            <img class="is-rounded" src="https://scontent.fbfh9-1.fna.fbcdn.net/v/t31.0-8/27629441_1569251846528618_5939986950707223976_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=rPw79WT0or0AX8IrF-Q&_nc_ht=scontent.fbfh9-1.fna&oh=8929d12dc0d3fc28a63ff782109c5ed9&oe=5EBF72E5" alt="avatar" />
        </figure>
        <div class="header-content">
            <p class="title is-size-5 is-marginless">Mateus Bombassaro </p>
            <p>21 anos, Joinville </p>
            <p class="is-size-7">Vue, React, Javascript, CSS, HTML, Java </p>
        </div>  
    </div>
    <div class="body">
        <p>Cursando ciência da computação na UDESC e estagiando na FESC Tecnologia.</p>
    </div>
    <div class="email-container">
        <p class="is-italic">mateusbombassaro@gmail.com</p>
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
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 15px;
}

.image {
    width: 64px;
}

.header {
    display: flex;
    flex-direction: row;
}

.header-content {
    margin-left: 15px;
}

.body {
    margin-top: 10px;
}

.email-container {
    display: flex;
    height: 100%;
    align-items: flex-end;
}
</style>
