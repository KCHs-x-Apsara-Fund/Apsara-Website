<template>
  <div>
    <TheInnerBanner title="About Us" />

    <!--
			=============================================
				Service Details
			==============================================
			-->
    <div class="service-details ">
      <div class="container">
        <div class="row">
          <div class="col-xl-9 col-lg-8 col-12">
            <div class="service-content">
              <!-- <img src="images/home/20.jpg" alt="" class="cover-img" /> -->
              <hr class="hr" style="margin-right: 95%; ">
              <h3 id="history" class="main-title">History</h3>
              <p>
                Apara Fund Management is an investment management firm
                headquartered in Phnom Penh, Cambodia. The firm was founded in
                2022, and it primarily focuses on sustainable
                financial investment to small and growing businesses (SGBs) in
                Southeast Asia. Apara Fund management aims to offer critical
                financial, educational, and business support services to SGBs
                based on the conviction that SGBs will create inclusive jobs,
                stimulate long-term economic growth, and produce environmental
                and social benefits.
              </p>
              <p>
                The firm's investment strategy involves identifying high-growth
                potential companies and partnering with them to help them
                achieve their full potential. Apara Fund Management's team has
                extensive experience in private equity and venture capital, as
                well as in investment banking and corporate finance, which
                allows them to provide value-added support to the companies they
                invest in. Apsara Fund’s portfolio includes investments in a
                range of sectors, including education, healthcare, agriculture,
                and consumer goods.
              </p>
              <hr class="hr" style="margin-right: 95%; ">
              <h3 id="vission" class="main-title">Vision</h3>
              <p>
                Apsara envisiones​​ the professional and sustainable investments
                in financial and asset management.
              </p>
              <hr class="hr" style="margin-right: 95%; ">
              <h3 id="mission" class="main-title">Mission</h3>
              <p>
                Our platform is committed to delivering sustainable financial
                management solutions for impactful investments that are
                trustworthy and reliable.
              </p>

              <div id="vission" class="presentation-section">
                <hr class="hr" style="margin-right: 95%; ">
                <h3 class="main-title">Goals</h3>

                <div class="row">
                  <div class="col-md-12 col-12">
                    <ul class="best-list-item">
                      <li class="">
                        <i class="icon flaticon-interface"></i>
                        <!-- <h5>Integrity</h5> -->
                        <p>
                          To strengthen institutional government, environmental
                          and social inclusion to SME and other forms of
                          business.
                        </p>
                      </li>
                      <li class="">
                        <i class="icon flaticon-technology"></i>
                        <!-- <h5>Do-no harm</h5> -->
                        <P
                          >To promote/pionia accessibility and availability of
                          impact investments.
                        </P>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- /.presentation-section -->

          

              <!-- /.topics -->
            </div>
            <!-- /.service-content -->
          </div>
          <!-- /.col- -->
       
          <!-- /.theme-sidebar-one -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.service-details -->
    <div id="contact-us" class="consultation-form section-spacing">
      <div class="container">
        <div class="theme-title-one">
          <h2>FREE CONSULTATION</h2>
          <p>
            Looking for more information on how we can help your company? Please
            fill out the form below and one of the friendly folks will get.
          </p>
        </div>
        <!-- /.theme-title-one -->
        <div class="clearfix main-content no-gutters row">
          <div class="col-xl-6 col-lg-5 col-12">
            <div class="img-box">
              <img src="https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/free_consult.png?alt=media&token=30ff4d4c-1ce0-4396-be21-920d585a5352" alt="" />
            </div>
          </div>
          <div class="col-xl-6 col-lg-7 col-12">
            <div class="form-wrapper">
              <form action="#" class="theme-form-one">
                <div class="row">
                  <div class="col-md-6">
                    <input type="text" placeholder="Name *" />
                  </div>
                  <div class="col-md-6">
                    <input type="text" placeholder="Phone *" />
                  </div>
                  <div class="col-md-12">
                    <input type="email" placeholder="Email *" />
                  </div>
              
                  <div class="col-12">
                    <textarea placeholder="Message"></textarea>
                  </div>
                </div>
                <!-- /.row -->
                <button class="theme-button-one">Submit</button>
              </form>
            </div>
            <!-- /.form-wrapper -->
          </div>
          <!-- /.col- -->
        </div>
        <!-- /.main-content -->
      </div>
      <!-- /.container -->
    </div>
  </div>
</template>

<script>
import TheInnerBanner from "~/components/TheInnerBanner.vue";
import ThePartnerSlider from "~/components/ThePartnerSlider.vue";
import carousel from "vue-owl-carousel";
export default {
  components: {
    TheInnerBanner,
    ThePartnerSlider,
    carousel
  },
  data() {
    return {
      teams: [
        {
          id: 1,
          name: "Thorn Vandong",
          position: "Chief Executive Officer",
          image: "images/team/vandong.png"
        },
        {
          id: 2,
          name: "Chhon Srors",
          position: "Executive Director",
          image: "images/team/srors.png"
        },
        {
          id: 2,
          name: "Navy Toeu",
          position: "Finance & Operation",
          image: "images/team/toeu.png"
        },
        {
          id: 2,
          name: "Saroeun Soeung",
          position: "Chairman",
          image: "images/team/soeung.png"
        }
      ]
    };
  },
  methods: {
    openProfile(i) {
      console.log("i", i);
      // this.$router.push({ name: "profile", params: { id: i } });
    }
  }
};
</script>

<style>
.core-values {
  background: #f9f9f9;
  padding: 0;
}
</style>
