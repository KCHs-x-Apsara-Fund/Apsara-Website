<template>
    <div>
      <TheInnerBanner title="Sources" />
  
                    <!--
              =====================================================
                  Our Team
              =====================================================
              -->
        <div class="our-team section-spacing">
          <div class="container">
            <div class="wrapper">
              <hr class="hr" style="margin-right: 95%; ">
              <h3 style="margin-bottom: 3%;" class="main-title">Legal Documents</h3>
              
            <div class="event-review-tab mb-2">
              <div id="news" class="tab-pane">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-12 our-blog">
                    <div class="post-wrapper row px-4" >
                      <div 
                        v-for="news in Legals"
                        :key="news.desc"
                        class="col-md-4 col-12 mb-4" >
                        <a :href="news.link" target="_blank" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                        <div class="single-blog">
                          
                          <div class="image-box">
                            
                            <img :src="news.img"/>
                          
                          </div>
                          <!-- /.image-box -->
                          <div style="text-align: center;" class="post-meta">
                            <h5 class="title">
                              <a
                                v-if="news.title.length "

                                >{{ news.title }}</a
                              >
                            
                            </h5>
                            <p style="text-align: justify;">
                              {{ news.desc.length > 100 ? news.desc.substring(0, 200) + '' : news.desc }}
                            </p>
                            <a class="read-more">Download</a>
                          </div>
                          
                          <!-- /.post-meta -->
                        </div>
                        </a>
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


              <!-- /.row -->
            </div>
            <!-- /.wrapper -->
          </div>
          <!-- /.container -->
        </div>
        <!-- /.our-team -->

        <div class="our-team section-spacing">
          <div class="container">
            <div class="wrapper">
              <hr class="hr" style="margin-right: 95%; ">
              <h3 style="margin-bottom: 3%;" class="main-title">Knowledges</h3>
              
            <div class="event-review-tab mb-2">
              <div id="news" class="tab-pane">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-12 our-blog">
                    <div class="post-wrapper row px-4" >
                      <div 
                        v-for="news in Knowledges"
                        :key="news.desc"
                        class="col-md-4 col-12 mb-4" >
                        <a :href="news.link" target="_blank" style="box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
                        <div class="single-blog">
                          
                          <div class="image-box">
                            
                            <img :src="news.img"/>
                          
                          </div>
                          <!-- /.image-box -->
                          <div style="text-align: center;" class="post-meta">
                            <h5 class="title">
                              <a
                                v-if="news.title.length "

                                >{{ news.title }}</a
                              >
                            
                            </h5>
                            <p style="text-align: justify;">
                              {{ news.desc.length > 100 ? news.desc.substring(0, 201) + '' : news.desc }}
                            </p>
                            <a class="read-more">Download</a>
                          </div>
                          
                          <!-- /.post-meta -->
                        </div>
                        </a>
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


              <!-- /.row -->
            </div>
            <!-- /.wrapper -->
          </div>
          <!-- /.container -->
        </div>
    </div>
  </template>
  
  <script>
  export default {
    
    data() {
      return {
        Legals: [
        {
          title: "Law on the Organization and Functioning of the Non-Bank Financial Services Authority",
          desc: 'A Cambodian law that regulates and supervises non-bank financial institutions through the Non-Bank Financial Services Authority.',
          img: 'https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/En_Law_on_the_Organization_and_Functioning_of_the_Non_Bank_Financial.jpg?alt=media&token=5373eb8d-9c13-4940-ae75-aa78895736b9',
          link: 'https://drive.google.com/file/d/1Slf5xMIInjynYojw4z8ljxaL1kkDCabA/view?usp=sharing',
        },
        
      ],
      Knowledges: [
        {
          title: "Impact Investment Ecosystem",
          desc: 'Impact investment emerged in 2007 when Antony Bugg-Levine suggested using capital markets to support social enterprises for solving global problems beyond what governments and philanthropy can provide.',
          img: 'https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/Impact%20Investment%20Ecosystem-01.jpg?alt=media&token=f888a9ef-083d-450b-b348-b16b2c986be5',
          link: 'https://drive.google.com/file/d/1B4HOdQCm__7TJL7-oO7O5U6IYR3qVF-G/view?usp=sharing',
        },
        
      ],

      };
    },
    methods: {
      handleHover(hovered) {
        this.isHovered = hovered
      }
    }
  };
  </script>
  