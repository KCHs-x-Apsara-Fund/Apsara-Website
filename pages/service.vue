<template>
  <div>
    <TheInnerBanner title="Service" />
    <div class="our-solution section-spacing">
      <div class="container">
        <div class="theme-title-one">
          <h2>Our SOLUTIONS</h2>
        </div>
        <!-- /.theme-title-one -->
        <div class="wrapper">
          <div class="row">
            <div
            @click="goToDetail"
            class="col-lg-4 col-sm-6 col-12">
              <div class="single-solution-block">
                <img src="https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/7.png?alt=media&token=d369e0de-a49d-4fc3-8d5f-34496ded7581" alt="" class="icon" />
                <h5><a >SME Readiness for <br> Apara Impact Fund Program</a></h5>
                <p>
                  Curate a pool of impact investment projects that meet our rigorous standards for environmental, social, and governance practices.
                </p>
              </div>
              <!-- /.single-solution-block -->
            </div>
            <!-- /.col- -->
            <div  @click="goToDetail" class="col-lg-4 col-sm-6 col-12">
              <div class="single-solution-block">
                <img src="https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/8.png?alt=media&token=8bba1e23-222e-4273-b917-b9827f749584" alt="" class="icon" />
                <h5><a>Apsara Impact for Enterprises</a></h5>
                <p>
                  Provide ESG consultation services that ensure our clients are competent, compliant, and certified (CCC) in terms of ESG practices.
                </p>
              </div>
              <!-- /.single-solution-block -->
            </div>
            <!-- /.col- -->
            <div     @click="goToDetail" class="col-lg-4 col-sm-6 col-12">
              <div class="single-solution-block">
                <img src="https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/6.png?alt=media&token=c22d1f98-c9cc-42d5-9f63-84cef9ec4b6d" alt="" class="icon" />
                <h5><a >Apara Investment  Matching Program</a></h5>
                <p>
                  Facilitate investment pitching between small and growing ESG-oriented businesses and angel/impact investors.
                </p>
              </div>
              <!-- /.single-solution-block -->
            </div>
            <!-- /.col- -->
            <div     @click="goToDetail" class="col-lg-6 col-sm-6 col-12">
              <div class="single-solution-block">
                <img src="https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/9.png?alt=media&token=75966de6-1dcf-43eb-bcca-064e347284c3" alt="" class="icon" />
                <h5><a>Apsara Impact for NextGen</a></h5>
                <p style="margin-left: 15%;margin-right: 15%;">
                  Run awareness workshops for university students, mainly in the business and digital technology field.
                </p>
              </div>
              <!-- /.single-solution-block -->
            </div>
            <!-- /.col- -->
            <div     @click="goToDetail" class="col-lg-6 col-sm-6 col-12">
              <div class="single-solution-block">
                <img src="https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/5.png?alt=media&token=52819526-f493-4cf8-ad71-23d7098039bb" alt="" class="icon" />
                <h5><a>Crowdfunding Platform</a></h5>
                <p style="margin-left: 15%;margin-right: 15%;">
                  Create a trusted platform that is specifically designed for impact investments.
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
          <a href="#contact-us" class="theme-button-one">LET'S CONNECT</a>
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
              <img src="images/home/free_consult.png" alt="" />
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
