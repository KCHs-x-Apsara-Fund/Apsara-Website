<template>
  <div>
    <!--
			=====================================================
				Partner Slider
			=====================================================
			-->

    <div class="partner-section">
      <div class="container">
        <div class="row">
          <div class="col-3 col-md-3 col-sm-4 ">
            <h6>OUR <br />PARTNERS</h6>
          </div>
          <div class="col-9 col-md-9 col-sm-8 ">
            <carousel
              :autoplay="true"
              :nav="false"
              :autoHeight="false"
              :autoWidth="false"
              :dots="false"
              :responsive="{
                0: { items: 1 },
                480: { items: 1 },
                768: { items: 1 },
                992: { items: 4 },
                1200: { items: 4 }
              }"
            >
              <div class="item" v-for="i in 10" :key="i">
                <img
                  src="https://khmerenterprise.info/assets/logo.png"
                  alt=""
                />
              </div>
            </carousel>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  name: "ThePartnerSlider",
  data() {
    return {};
  },
  components: { carousel }
};
</script>
