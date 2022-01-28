<template>
  <div>
    <div class="container mt-5 px-5">
      <h1>Works</h1>
      <div class="row mt-4">
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="card-title mb-0">Title here</div>
          <div class="card-body p-0">
            <vue-lightbox :items="image1" :cells="cells" :width="width" :height="height" />
          </div>
        </div>
        
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="card-title mb-0">Title here</div>
          <div class="card-body p-0">
            <vue-lightbox :items="image2" :cells="cells" :width="width" :height="height" />
          </div>
        </div>
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>

        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="card-title mb-0">Title here</div>
          <div class="card-body p-0">
            <vue-lightbox :items="image3" :cells="cells" :width="width" :height="height" />
          </div>
        </div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="card-title mb-0">Title here</div>
          <div class="card-body p-0">
            <vue-lightbox :items="image4" :cells="cells" :width="width" :height="height" />
          </div>
        </div>
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>

        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="card-title mb-0">Title here</div>
          <div class="card-body p-0">
            <vue-lightbox :items="image5" :cells="cells" :width="width" :height="height" />
          </div>
        </div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="card-title mb-0">Title here</div>
          <div class="card-body p-0">
            <vue-lightbox :items="image6" :cells="cells" :width="width" :height="height" />
          </div>
        </div>
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>

        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="card-title mb-0">Title here</div>
          <div class="card-body p-0">
            <vue-lightbox :items="image7" :cells="cells" :width="width" :height="height" />
          </div>
        </div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="card-title mb-0">Title here</div>
          <div class="card-body p-0">
            <vue-lightbox :items="image8" :cells="cells" :width="width" :height="height" />
          </div>
        </div>
        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>

        <div class="col-lg-1 float-left p-0 my-4 sp-block"></div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="card-title mb-0">Title here</div>
          <div class="card-body p-0">
            <vue-lightbox :items="image9" :cells="cells" :width="width" :height="height" />
          </div>
        </div>
        <div class="card col-lg-5 float-left p-0 my-4">
          <div class="card-title mb-0">Title here</div>
          <div class="card-body p-0">
            <vue-lightbox :items="image10" :cells="cells" :width="width" :height="height" />
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
    image1: [require('@/assets/work1.jpeg')],
    image2: [require('@/assets/work2.jpg')],
    image3: [require('@/assets/work3.jpg')],
    image4: [require('@/assets/work4.jpg')],
    image5: [require('@/assets/work5.jpg')],
    image6: [require('@/assets/work6.jpg')],
    image7: [require('@/assets/work7.jpg')],
    image8: [require('@/assets/work8.jpg')],
    image9: [require('@/assets/work9.jpg')],
    image10: [require('@/assets/work10.jpg')],
    image11: [require('@/assets/work11.jpg')],
    image12: [require('@/assets/work12.jpg')],
    cells: 5, /// images show ( number value from 1 to 5 )
    width: '100%', // width container
    height: '600px' // height container
  })
}
</script>

<style>
h4 {
  font-size: 30px;
}

.card-title {
  background-color: rgb(178, 193, 239);
  height: 50px;
}

@media screen and (max-width: 800px) {
  .sp-block {
    display: none;
  }
}
</style>
