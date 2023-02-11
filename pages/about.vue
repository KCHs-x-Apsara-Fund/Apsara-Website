<template>
  <div>
    <TheInnerBanner title="About Us" />
    <!--
			=============================================
				CallOut Banner
			==============================================
			-->
    <div class="callout-banner no-bg">
      <div class="container clearfix">
        <h3 class="title">
          High-Quality <br />
          Market Experinces
        </h3>
        <p>
          A tale of a fateful trip that started from this tropic port aboard
          this tiny ship today still wanted by the government they survive as
          soldiers of fortune to ever wondered the east side to a deluxe
          apartment.
        </p>
        <a href="#" class="theme-button-one">CONTACT US</a>
      </div>
    </div>
    <!-- /.callout-banner -->

    <!--
			=============================================
				About Company Stye Two
			==============================================
			-->
    <div class="about-compnay-two no-bg section-spacing">
      <div class="overlay">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-12 text order-lg-last">
              <div class="theme-title-one">
                <h2>SHORT HISTORY</h2>
              </div>
              <!-- /.theme-title-one -->
              <p>
                A tale of a fateful trip that started from this tropic port
                aboard this tiny ship today still wanted by the government they
                survive as soldiers of fortune to a deluxe you apartment in the
                sky to explore strange new worlds to seek out new life and new
                civilizations to boldly go where no man has gone.
              </p>
              <p>
                You would see the biggest gift would be from me and the card
                attached would so thank you for being a friend the biggest gift.
              </p>
              <img src="images/home/sign-black.png" alt="" class="sign" />
            </div>
            <!-- /.col- -->
            <div class="col-lg-6 col-12 order-lg-first">
              <img src="images/home/15.jpg" alt="" class="left-img" />
            </div>
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.overlay -->
    </div>
    <!-- /.about-compnay-two -->

    <!--
			=====================================================
				Why We Best
			=====================================================
			-->
    <div class="why-we-best">
      <div class="overlay">
        <div class="container">
          <div class="theme-title-one">
            <h2>WE ARE ALWAYS BEST</h2>
            <p>
              A tale of a fateful trip that started from this tropic port aboard
              this tiny ship today stillers
            </p>
          </div>
          <!-- /.theme-title-one -->

          <div class="wrapper row no-gutters">
            <div class="col-lg-6 col-12 order-lg-last">
              <div class="img-box"></div>
            </div>
            <div class="col-lg-6 col-12 order-lg-first">
              <ul class="best-list-item">
                <li>
                  <i class="icon flaticon-puzzle"></i>
                  <h5><a href="#">Best Strategy</a></h5>
                  <p>
                    The Love Boat soon will be making another run plore strange
                    tools enter new worlds.
                  </p>
                </li>
                <li>
                  <i class="icon flaticon-presentation"></i>
                  <h5><a href="#">High-Quality Services</a></h5>
                  <p>
                    The Love Boat soon will be making another run plore strange
                    tools enter new worlds.
                  </p>
                </li>
                <li>
                  <i class="icon flaticon-people"></i>
                  <h5><a href="#">Friendly Support</a></h5>
                  <p>
                    The Love Boat soon will be making another run plore strange
                    tools enter new worlds.
                  </p>
                </li>
              </ul>
            </div>
            <!-- /.col- -->
          </div>
          <!-- /.wrapper -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.overlay -->
    </div>
    <!-- /.why-we-best -->

    <!--
			=====================================================
				Theme Counter
			=====================================================
			-->
    <div class="theme-counter-two section-spacing">
      <div class="container">
        <div class="clearfix">
          <div class="cunter-wrapper">
            <div class="row">
              <div class="col-md-3 col-6">
                <div class="single-counter-box">
                  <div class="number">
                    <span
                      class="timer"
                      data-from="0"
                      data-to="30"
                      data-speed="1200"
                      data-refresh-interval="5"
                      >20 </span
                    >+
                  </div>
                  <p>Years of Excellence</p>
                </div>
                <!-- /.single-counter-box -->
              </div>
              <!-- /.col- -->
              <div class="col-md-3 col-6">
                <div class="single-counter-box">
                  <div class="number">
                    <span
                      class="timer"
                      data-from="0"
                      data-to="100"
                      data-speed="1200"
                      data-refresh-interval="5"
                      >10</span
                    >%
                  </div>
                  <p>Client Satisfaction</p>
                </div>
                <!-- /.single-counter-box -->
              </div>
              <!-- /.col- -->
              <div class="col-md-3 col-6">
                <div class="single-counter-box">
                  <div class="number">
                    <span
                      class="timer"
                      data-from="0"
                      data-to="53"
                      data-speed="1200"
                      data-refresh-interval="5"
                      >30</span
                    >k
                  </div>
                  <p>Cases Completed</p>
                </div>
                <!-- /.single-counter-box -->
              </div>
              <!-- /.col- -->
              <div class="col-md-3 col-6">
                <div class="single-counter-box">
                  <div class="number">
                    <span
                      class="timer"
                      data-from="0"
                      data-to="24"
                      data-speed="1200"
                      data-refresh-interval="5"
                      >50</span
                    >
                  </div>
                  <p>Consultants</p>
                </div>
                <!-- /.single-counter-box -->
              </div>
              <!-- /.col- -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.cunter-wrapper -->
        </div>
        <!-- /.clearfix -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.theme-counter -->

    <!--
			=============================================
				Core Values
			==============================================
			-->
    <div class="core-values">
      <div class="container">
        <div class="theme-title-one">
          <h2>CORE VALUES</h2>
        </div>
        <!-- /.theme-title-one -->
        <div class="wrapper">
          <carousel
            :autoplay="true"
            :nav="false"
            :autoHeight="false"
            :autoWidth="false"
            :dots="false"
            :margin="30"
          >
            <div class="item" v-for="i in 10" :key="i">
              <div class="single-value-block">
                <div class="image-box">
                  <img src="images/home/17.jpg" alt="" />
                  <div class="overlay">
                    <a href="#" class="theme-button-one">READ MORE</a>
                  </div>
                </div>
                <!-- /.image-box -->
                <div class="text">
                  <h5><a href="#">Challenging Staff</a></h5>
                  <p>
                    The Love Boat soon will be making other run plore strange
                    tools.
                  </p>
                </div>
                <!-- /.text -->
              </div>
              <!-- /.single-value-block -->
            </div>
            <!-- /.col- -->
          </carousel>
          <!-- /.core-value-slider -->
        </div>
        <!-- /.wrapper -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.core-values -->

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
    <!-- /.partner-section -->
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  name: "About",
  data() {
    return {};
  },
  components: { carousel }
};
</script>
