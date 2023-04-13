<template>
  <div>
    <TheInnerBanner class="section-spacing-solution" title="About Us" />

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
    <div class="our-team section-spacing">
        <div class="container">
          <div class="wrapper">
            <hr class="hr" style="margin-right: 95%; ">
            <h3 class="main-title">Board of Director</h3>
            
            <div class="row">

              <div
                class="col-lg-3 col-sm-6 col-12"
                v-for="person in teams"
                :key="person.id"
                @click="openProfile(i)"
              >

                <div class="team-member">
                  <div class="image-box">
                    <img :src="person.image" alt="" />
                    <div class="overlay">
                      <div class="hover-content">
                        <ul>
                          <li>
                            <a :href="person.linkedin" target="_blank"
                              ><i
                                class="fa fa-linkedin"
                                aria-hidden="true"
                              ></i
                            ></a>
                          </li>
                        </ul>
                        <p></p>
                      </div>
                      <!-- /.hover-content -->
                    </div>
                    <!-- /.overlay -->
                  </div>
                  <!-- /.image-box -->
                  <div class="text">
                    <h6>{{ person.name }}</h6>
                    <p class="p-2">
                      {{
                        person.position.length > 50
                          ? person.position.substring(0, 50) + "..."
                          : person.position
                      }}
                    </p>
                  </div>
                  <!-- /.text -->
                </div>
                <!-- /.team-member -->
              </div>

              <!-- /.col- -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.wrapper -->
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
          name: "Saroeun Soeung",
          position: "Chairman",
          image: "https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/Team%2FSaroeun%20Soeung.jpg?alt=media&token=d0b00041-a8de-4fd1-a3da-d208e8df8f07",
          linkedin : "https://www.linkedin.com/in/saroeun-soeung-89388b1b/"
        },
        {
          id: 2,
          name: "Vandong Thorn",
          position: "Founder & CEO",
          image: "https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/Team%2FVandong%20Thorn.jpg?alt=media&token=c9a431d4-2aa0-4f7a-9373-82af5c1d339c"
          ,linkedin : "https://www.linkedin.com/in/vandong-thorn-63063977/"
        },
        {
          id: 3,
          name: "Srors Chhon (Bee)",
          position: "Co-founder & Executive Board",
          image: "https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/Team%2FSrors%20Chhon.jpg?alt=media&token=a9ae26b9-a141-442d-8e85-9d1d42ae83ff"
          ,linkedin : "https://www.linkedin.com/in/chhon-srors-bee-49b2144a/"
        },
        {
          id: 4,
          name: "Marina Pok",
          position: "Board Member",
          image: "https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/Team%2FMarina%20Pok.jpg?alt=media&token=53724df0-02de-4083-bdb2-666a6d16df45"
          ,linkedin : "https://www.linkedin.com/in/marina-pok-454b4292/"
        },
        {
          id: 5,
          name: "Timol Pen",
          position: "Independent Board Member",
          image: "https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/Team%2FTimol%20Pen.jpg?alt=media&token=0a6971d7-eeb6-48ab-a00a-c1dac88ed879"
          ,linkedin : "https://www.linkedin.com/in/timol-pen-926692a2/"
        },
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
