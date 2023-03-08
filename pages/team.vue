<template>
  <div>
    <TheInnerBanner title="Team" />

                  <!--
			=====================================================
				Our Team
			=====================================================
			-->
      <div class="our-team section-spacing">
        <div class="container">
          <div class="wrapper">
            <h3 class="main-title">Management Team</h3>
            <hr>
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
      <div class="our-team section-spacing">
        <div class="container">
          <div class="wrapper">
            <h3 class="main-title">Executors</h3>
            <hr>
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
        },
      ]
    };
  },
  methods: {
  }
};
</script>
