<template>
  <div>
    <div class="main-image" :style="background_image">
      <h1 class="main-image-title mb-5">
        Imagi Kitano
      </h1>
      <p style="color: white">
        Hello, my name is Imagi based in Japan. A water colour artist, enjoying to draw nature inspired by Japanese animism.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      background_image: { backgroundImage: 'url(' + require('@/assets/home.jpeg') + ')' }
    }
  }
}
</script>

<style scoped>
.main-image {
  height: 100vh
}
.main-image-title {
  font-size: 70px;
  padding-top: 250px;
}

@media screen and (max-width: 800px) {
  .main-image-title {
    font-size: 50px;
    padding-top: 150px;
  }
}
</style>
