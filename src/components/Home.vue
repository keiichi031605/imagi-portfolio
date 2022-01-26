<template>
  <div>
    <div class="main-image">
      <h1 class="main-image-title mb-5">
        Imagi Kitano
      </h1>
      <p style="color: black">
        Hello, my name is Imagi based in Japan. A water colour artist, enjoying to draw nature by inspired Japanese animism.
      </p>
    </div>
  </div>
</template>

<script></script>

<style scoped>
.main-image {
  background-image: url(../assets/home.jpeg);
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
