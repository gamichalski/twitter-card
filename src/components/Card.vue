<template>
  <div class="custom-card">
    <div class="card">
        <div class="card-content columns is-full">

            <div class="media is-marginless botton-margin">
                
                <div class="media-left">
                    <figure class="image is-48x48">
                    <img class="border" src="https://media-exp1.licdn.com/dms/image/C4D03AQF3CZZSqVDmdw/profile-displayphoto-shrink_200_200/0?e=1592438400&v=beta&t=tX4_1TNysLRplGsi2y8GRo2cEYy0BNExBQs8zGZQGeU" alt="Placeholder image">
                    </figure>
                </div>

                <div class="media-content">
                    <p class="title is-4 is-marginless">Eduardo Marchiori</p>
                    <p class="subtitle is-6 is-marginless">20 anos, Joinville SC</p>
                    <p class="email is-italic">eduardo.cmr@hotmail.com</p>
                </div>

            </div>

            <div class="content">
                <div class="botton-margin">Full Stack Developer na Linx, graduando Ciência da Computação na Udesc.</div>
                <span class="tag is-info default-margindrao">Bootstrap</span>
                <span class="tag is-warning default-margin">Javascript</span>
                <span class="tag is-success default-margin">Vue</span>
                <span class="tag is-link default-margin">C#</span>
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

.border{
    border-radius: 50px;
}

.email{
    font-size: 0.8rem;
}

.default-margin{
    margin: 2px;
}

.botton-margin{
    margin-bottom: 10px !important;
}
</style>
