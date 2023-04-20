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
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        teams: [
          {
            id: 1,
            name: "Saroeun Soeung",
            position: "Chairman",
            image: "https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/Team%2FSaroeun%20Soeung.jpg?alt=media&token=d0b00041-a8de-4fd1-a3da-d208e8df8f07"
          },
          {
            id: 2,
            name: "Vandong Thorn",
            position: "Founder & CEO",
            image: "https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/Team%2FVandong%20Thorn.jpg?alt=media&token=c9a431d4-2aa0-4f7a-9373-82af5c1d339c"
          },
          {
            id: 3,
            name: "Srors Chhon (Bee)",
            position: "Co-founder & Executive Board",
            image: "https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/Team%2FSrors%20Chhon.jpg?alt=media&token=a9ae26b9-a141-442d-8e85-9d1d42ae83ff"
          },
          {
            id: 4,
            name: "Marina Pok",
            position: "Board Member",
            image: "https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/Team%2FMarina%20Pok.jpg?alt=media&token=53724df0-02de-4083-bdb2-666a6d16df45"
          },
          {
            id: 5,
            name: "Timol Pen",
            position: "Independent Board Member",
            image: "https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/Team%2FTimol%20Pen.jpg?alt=media&token=0a6971d7-eeb6-48ab-a00a-c1dac88ed879"
          },
        ]
      };
    },
    methods: {
    }
  };
  </script>
  