<template>
  <div>
    <div class="container mt-5 px-5">
      <h1>Works</h1>
      <div class="row mt-4">
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="card-title"></div>
          <div class="card-body">
            <vue-lightbox :items="image1" :cells="cells" :width="width" :height="height" />
          </div>
        </div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="card-title"></div>
          <div class="card-body">

          </div>
        </div>
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>

        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="card-title"></div>
          <div class="card-body">

          </div>
        </div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="card-title"></div>
          <div class="card-body">

          </div>
        </div>
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>

        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="card-title"></div>
          <div class="card-body">

          </div>
        </div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="card-title"></div>
          <div class="card-body">

          </div>
        </div>
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    image1: [
      "https://picsum.photos/id/237/200/300", 
    ], /// images
    cells: 5, /// images show ( number value from 1 to 5 )
    width: "100%", // width container
    height: "200px" // height container
  })
}
</script>

<style>
h4 {
  font-size: 30px;
}

.card-title {
  background-color: rgb(227, 77, 37);
  height: 50px;
}

@media screen and (max-width: 800px) {
  .sp-block {
    display: none;
  }
}
</style>
