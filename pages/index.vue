<template>
  <body>
    <!-- Carousel -->
    <div id="demo" class="carousel slide" data-bs-ride="carousel">
      <!-- Indicators/dots -->
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="0"
          class="active"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#demo"
          data-bs-slide-to="2"
        ></button>
      </div>

      <!-- The slideshow/carousel -->
      <div class="carousel-inner-a">
        <div class="carousel-item active">
          <img
            src="/images/home/2.jpg"
            alt="Los Angeles"
            class="d-block"
            style="width:100%"
          />
          <div class="carousel-caption">
            <p class="wow fadeInUp animated">
              Apsara Fund Management
            </p>
            <h1 class="ch1 wow fadeInUp animated HT" data-wow-delay="0.2s">
              Delivering Sustainable Financial Management Solutions For Impact Investment
            </h1>
            <a
              href="about.html"
              class="theme-button-one wow fadeInUp animated"
              data-wow-delay="0.39s"
              >ABOUT US</a
            >
          </div>
        </div>
      
      </div>

      <!-- Left and right controls/icons -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#demo"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>


    <div class="our-solution section-spacing">
      <div class="container">
        <div class="theme-title-one">
          <h2>Our SOLUTIONS</h2>
        </div>
        <!-- /.theme-title-one -->
        <div class="wrapper">
          <div class="row">
            <div class="col-lg-4 col-sm-6 col-12">
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
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="single-solution-block">
                <img src="images/icon/8.png" alt="" class="icon" />
                <h5><a>Apsara Impact for Enterprises</a></h5>
                <p>
                  Provide ESG consultation services that ensure our clients are competent, compliant, and certified (CCC) in terms of ESG practices.
                </p>
              </div>
              <!-- /.single-solution-block -->
            </div>
            <!-- /.col- -->
            <div class="col-lg-4 col-sm-6 col-12">
              <div class="single-solution-block">
                <img src="images/icon/6.png" alt="" class="icon" />
                <h5><a >Apara Investment  Matching Program</a></h5>
                <p>
                  Facilitate investment pitching between small and growing ESG-oriented businesses and angel/impact investors.
                </p>
              </div>
              <!-- /.single-solution-block -->
            </div>
            <!-- /.col- -->
            <div class="col-lg-6 col-sm-6 col-12">
              <div class="single-solution-block">
                <img src="images/icon/9.png" alt="" class="icon" />
                <h5><a>Apsara Impact for NextGen</a></h5>
                <p style="margin-left: 15%;margin-right: 15%;">
                  Run awareness workshops for university students, mainly in the business and digital technology field.
                </p>
              </div>
              <!-- /.single-solution-block -->
            </div>
            <!-- /.col- -->
            <div class="col-lg-6 col-sm-6 col-12">
              <div class="single-solution-block">
                <img src="images/icon/5.png" alt="" class="icon" />
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



			<div class="short-banner  mb-10">
				<div class="overlay">
					<div class="container">
						<h2>Integrity, Do-no harm, Empire, Accountability or IDEA</h2>
					</div>
				</div> <!-- /.overlay -->
			</div> <!-- /.short-banner -->

      <div class="our-case event-news section-spacing ">
      <div class="container">
        <div class="theme-title-one mt-5">
          <h2>News</h2>
        </div>
        <div class="wrapper">
          <div class="event-review-tab mb-2 mt-5">
            <div class="tab-content">
              <div id="news" class="tab-pane active">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-12 our-blog">
                    <div class="post-wrapper row px-4">
                      <div
                        v-for="news in blogs"
                        :key="news.title"
                        class="col-md-4 col-12 mb-4"
                      >
                        <div class="single-blog">
                          <div class="image-box">
                            <img src="images/blog/3.jpg" alt="" />
                            <div class="overlay">
                              <a href="#" class="date">{{ news.date }}</a>
                            </div>
                          </div>
                          <!-- /.image-box -->
                          <div class="post-meta">
                            <h5 class="title">
                              <a
                                v-if="news.title.length < 40"
                               
                                >{{ news.title }}</a
                              >
                              <a v-else >{{
                                news.title.substring(0, 25) + "...."
                              }}</a>
                            </h5>
                            <p>
                              {{ news.desc.length > 120 ? news.desc.substring(0, 120) + '...' : news.desc }}
                            </p>
                            <a class="read-more"
                              >READ MORE</a
                            >
                          </div>
                          <!-- /.post-meta -->
                        </div>
                        <!-- /.single-blog -->
                      </div>
                      <!-- /.col- -->
                    </div>
                  </div>
                  <!-- /.col- -->
                </div>
                <!-- /.row -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /.container -->
    </div>



  </body>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          title: "What is Impact Investing?",
          desc: 'Impact investing integrates financial returns with positive social or environmental impact. This impact may be quantified in terms of access to products and services, or economic opportunities for excluded communities, such as affordable mortgages to poor households or jobs for rural women.',
          date: "Feb 06, 2023"
        },
        {
          title: "What is Impact Investing?",
          desc: 'Impact investing integrates financial returns with positive social or environmental impact. This impact may be quantified in terms of access to products and services, or economic opportunities for excluded communities, such as affordable mortgages to poor households or jobs for rural women.',
          date: "Feb 06, 2023"
        },
        {
          title: "What is Impact Investing?",
          desc: 'Impact investing integrates financial returns with positive social or environmental impact. This impact may be quantified in terms of access to products and services, or economic opportunities for excluded communities, such as affordable mortgages to poor households or jobs for rural women.',
          date: "Feb 06, 2023"
        },
        
      ],
      posts: [],

      carousels : {},
      home : {},
      homeAttributes : {},

      }
  },

 /* async fetchStapi(){
     const ip = await fetch('http://localhost:1338/api/home-carousel')
     this.carousels = await ip.json()
  }
*/
  async fetch() {

      
      this.carousels = await fetch(
        'https://apsara-fund.onrender.com/api/home-carousel'
      ).then(res => res.json())
      this.home = await this.carousels.data
      this.homeAttributes = await this.home.attributes
    }
  
};
</script>

<style>
</style>
