<template>
  <div>
    <TheInnerBanner title="SERVICES" />
    <div class="our-solution section-spacing">
      <div class="container">
        <div class="theme-title-one">
          <h2>Our SERVICES</h2>
        </div>
        <!-- /.theme-title-one -->
        <div class="wrapper">
          <div class="row">
            <div
            @click="goToDetail"
            class="col-lg-4 col-sm-6 col-12">
              <div class="single-solution-block">
                <img src="https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/7.png?alt=media&token=d369e0de-a49d-4fc3-8d5f-34496ded7581" alt="" class="icon" />
                <h5><a >Crowdfunding Platform</a></h5>
                <p>
                  a trusted and equity-based platform that is specifically focused on impact investments. We offer membership subscriptions for qualified enterprises and projects to attract a large crowd of impact investors around the world.
                </p>
              </div>
              <!-- /.single-solution-block -->
            </div>
            <!-- /.col- -->
            <div  @click="goToDetail" class="col-lg-4 col-sm-6 col-12">
              <div class="single-solution-block">
                <img src="https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/8.png?alt=media&token=8bba1e23-222e-4273-b917-b9827f749584" alt="" class="icon" />
                <h5><a>Pitch Competition</a></h5>
                <p>
                  a great opportunity for entrepreneurs to showcase their businesses. APSARA Fund provides a structured environment for entrepreneurs to pitch their ideas, receive feedback, and obtain impact capitals.

                </p>
              </div>
              <!-- /.single-solution-block -->
            </div>
            <!-- /.col- -->
            <div     @click="goToDetail" class="col-lg-4 col-sm-6 col-12">
              <div class="single-solution-block">
                <img src="https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/6.png?alt=media&token=c22d1f98-c9cc-42d5-9f63-84cef9ec4b6d" alt="" class="icon" />
                <h5><a >Impact Trust Funds</a></h5>
                <p>
                  a service for angel investors, venture capitalists, and family offices to manage and invest funds for commercial and/or charitable purposes.
                </p>
              </div>
              <!-- /.single-solution-block -->
            </div>
            <!-- /.col- -->
            <div     @click="goToDetail" class="col-lg-6 col-sm-6 col-12">
              <div class="single-solution-block">
                <img src="https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/9.png?alt=media&token=75966de6-1dcf-43eb-bcca-064e347284c3" alt="" class="icon" />
                <h5><a>ESG for Enterprise</a></h5>
                <p style="margin-left: 15%;margin-right: 15%;">
                  a comprehensive ESG disclosure and reporting service, along with training courses, to help enterprises achieve sustainability and improve their impact.
                </p>
              </div>
              <!-- /.single-solution-block -->
            </div>
            <!-- /.col- -->
            <div     @click="goToDetail" class="col-lg-6 col-sm-6 col-12">
              <div class="single-solution-block">
                <img src="https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/5.png?alt=media&token=52819526-f493-4cf8-ad71-23d7098039bb" alt="" class="icon" />
                <h5><a>APSARA EmpowerU Program</a></h5>
                <p style="margin-left: 15%;margin-right: 15%;">
                  a financial literacy workshop series for high school and university students, designed to provide a general understanding of impact investing and ESG principles, along with practical guidance on launching successful impact projects that create positive change for people and the planet.
                </p>
              </div>
              <!-- /.single-solution-block -->
            </div>
            <!-- /.col- -->
          </div>


          <!-- /.row -->
        </div>
        <!-- /.wrapper -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.our-solution -->
    <!--
			=============================================
				Feature Banner
			==============================================
			-->
    <div class="feature-banner section-spacing">
      <div class="opacity">
        <div class="container">
          <h2>
            We provide high quality services &amp; innovative solutions for the
            realiable growth
          </h2>
          <a  class="theme-button-one">LET'S CONNECT</a>
        </div>
        <!-- /.container -->
      </div>
      <!-- /.opacity -->
    </div>
    <!-- /.feature-banner -->

    <!--
			=====================================================
				Free Consultation
			=====================================================
			-->
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
    <!-- /.consultation-form -->
    <!-- /.top-feature -->
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
export default {
  data() {
    return {
      solutions: [
        {
          title: "Business Services",
          description:
            "Building the Crowdfunding platform for SME listing (standard and premium membership) and pitching to Private Equity Funds and Crowdfunds  "
        },
        {
          title: "Business Services",
          description:
            "SG Consultancy to SME to meet minimum standard of investment requirement from impact investors"
        },
        {
          title: "Business Services",
          description:
            "Financial Literacy/Investment/trust fund campaign to high school and university student and Ex-Monk Investors Club"
        },
        {
          title: "Business Services",
          description:
            "Investment Matching between growth ESG SME and angel investor/impact investors "
        },
        {
          title: "Rust fund (commercial and social)",
          description: "Rust fund (commercial and social)"
        }
      ]
    };
  },
  components: { carousel },
  methods: {
    async goToDetail()
    {
      await this.$router.push({ name: "service_detail" });
    }
  }
};
</script>
