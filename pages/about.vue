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
              <h3 id="history" class="main-title">History</h3>
              <p>
                Apara Fund Management is an investment management firm
                headquartered in Phnom Penh, Cambodia. The firm was founded in
                2023 by Vandong Thorn, and it primarily focuses on sustainable
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

              <h3 id="vission" class="main-title">Vissions</h3>
              <p>
                Apsara envisiones​​ the professional and sustainable investments
                in financial and asset management.
              </p>

              <h3 id="mission" class="main-title">Missions</h3>
              <p>
                Our platform is committed to delivering sustainable financial
                management solutions for impactful investments that are
                trustworthy and reliable.
              </p>

              <div id="vission" class="presentation-section">
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

              <div class="our-team section-spacing">
                <div class="container">
                  <h3 id="meet-us" class="main-title">Meet Us</h3>
                  <p>
                    Our success is down to the hard work of literally remarkable
                    people. Here’s an introduction to some of the senior members
                    of our team.
                  </p>
                  <!--
			=============================================
				Core Values
			==============================================
			-->

                  <!--
			=====================================================
				Our Team
			=====================================================
			-->
                  <div class="our-team section-spacing">
                    <div class="container">
                      <div class="wrapper">
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
                                        <a href="#"
                                          ><i
                                            class="fa fa-facebook"
                                            aria-hidden="true"
                                          ></i
                                        ></a>
                                      </li>
                                      <li>
                                        <a href="#"
                                          ><i
                                            class="fa fa-twitter"
                                            aria-hidden="true"
                                          ></i
                                        ></a>
                                      </li>
                                      <li>
                                        <a href="#"
                                          ><i
                                            class="fa fa-pinterest"
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
                  <!-- /.our-team -->

                  <!-- /.wrapper -->
                </div>
                <!-- /.container -->
              </div>
              <!-- /.our-team -->

              <!-- /.topics -->
            </div>
            <!-- /.service-content -->
          </div>
          <!-- /.col- -->
          <div
            class="col-xl-3 col-lg-4 col-md-6 col-sm-8 col-12 theme-sidebar-one"
          >
            <div class="sidebar-box service-categories">
              <h5 class="title">Table of content</h5>
              <ul>
                <li><a href="/about#history">History</a></li>
                <li><a href="/about#mission">Mission</a></li>
                <li><a href="/about#vission">Vission</a></li>
                <li><a href="/about#meet-us">Meet our team</a></li>
              </ul>
            </div>

            <!-- /.sidebar-brochures -->
            <div class="sidebar-box sidebar-contact">
              <h5 class="title">Contact Form</h5>
              <form action="#">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <textarea placeholder="Message"></textarea>
                <button class="theme-button-one">SUBMIT</button>
              </form>
            </div>
            <!-- /.sidebar-contact -->
          </div>
          <!-- /.theme-sidebar-one -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.service-details -->
    <ThePartnerSlider />
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
