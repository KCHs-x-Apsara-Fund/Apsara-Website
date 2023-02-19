<template>
  <div>
    <TheInnerBanner title="Service" />

    <!--
			=============================================
				Our Solution
			==============================================
			-->
    <!--
			=============================================
				Service Style One
			==============================================
			-->
    <div class="service-style-one section-spacing">
      <div class="container">
        <div class="theme-title-one">
          <h2>Our SERVICES</h2>
          <p>
            A tale of a fateful trip that started from this tropic port aboard
            this tiny ship today stillers
          </p>
        </div>
        <!-- /.theme-title-one -->
        <!-- /.theme-title-one -->
        <div class="wrapper">
          <div class="row">
            <div
              class="col-xl-12 col-md-6 col-12"
              v-for="solution in solutions"
              :key="solution"
            >
              <div class="single-service">
                <div class="img-box">
                  <img src="images/home/3.jpg" alt="" />
                </div>
                <div class="text">
                  <!-- <h5>
                    <a href="service-details.html">{{ solution.title }}</a>
                  </h5> -->
                  <p>{{ solution.description }}</p>
                  <a href="service-details.html" class="read-more"
                    >READ MORE
                    <i class="fa fa-angle-right" aria-hidden="true"></i
                  ></a>
                </div>
                <!-- /.text -->
              </div>
              <!-- /.single-service -->
            </div>
            <!-- /.col- -->
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
                  <div class="col-md-6">
                    <input type="email" placeholder="Email *" />
                  </div>
                  <div class="col-md-6">
                    <select class="form-control" id="exampleSelect1">
                      <option>Service you’re looking for?</option>
                      <option>Business Services</option>
                      <option>Consumer Product</option>
                      <option>Financial Services</option>
                      <option>Software Research</option>
                    </select>
                  </div>
                  <div class="col-12">
                    <textarea placeholder="Message"></textarea>
                  </div>
                </div>
                <!-- /.row -->
                <button class="theme-button-one">GET A QUOTES</button>
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
    <ThePartnerSlider />
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
  components: { carousel }
};
</script>
