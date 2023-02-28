<template>
  <div>
    <TheInnerBanner title="Events & News" />

    <!--
			=============================================
				Events & News
			==============================================
			-->
    <div class="our-case event-news section-spacing">
      <div class="container">
        <div class="wrapper">
          <div class="event-review-tab mb-2">
            <ul class="nav nav-tabs mx-2">
              <li class="nav-item">
                <a class="nav-link active" data-toggle="tab" href="#events">
                  <div class="theme-title-one"><h3>Events</h3></div>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-toggle="tab" href="#news">
                  <div class="theme-title-one"><h3>News</h3></div>
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div id="events" class="tab-pane active">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-12 our-blog">
                    <div class="post-wrapper row px-4">
                      <h5 class="mb-3 pl-2 text-muted">Upcoming Events</h5>
                      <div
                        v-for="u_event in up_events"
                        :key="u_event.title"
                        class="col-md-12 col-12 mb-4">
                        <div class="single-blog">
                          <div class="row">
                            <div class="col-12 col-md-3">
                              <div class="image-box">
                                <img :src="u_event.img" alt="" />
                              </div>
                              <!-- /.image-box -->
                            </div>
                            <div class="col-12 col-md-9">
                              <div class="post-meta">
                                <h5 class="title">
                                  <a
                                    v-if="u_event.title.length < 70"
                                    href="event-details.html"
                                    >{{ u_event.title }}</a
                                  >
                                  <a v-else href="event-details.html">{{
                                    u_event.title.substring(0, 70) + "...."
                                  }}</a>
                                </h5>
                                <div>
                                  <div class="row">
                                    <div class="col-12 col-md-3 px-auto">
                                      <a href="#" class="date">
                                        <i class="fa fa-calendar"></i>
                                        {{ u_event.date }}</a
                                      >
                                    </div>
                                    <div class="col-12 col-md-2">
                                      <a href="#" class="time">
                                        <i class="fa fa-clock-o"></i>
                                        {{ u_event.time }}</a
                                      >
                                    </div>
                                    <div class="col-12 col-md-4">
                                      <a href="#" class="location">
                                        <i class="fa fa-location-arrow"></i>
                                        {{ u_event.location }}</a
                                      >
                                    </div>
                                    <div class="d-flex col-12 col-md-3">
                                      <a
                                        href="event-details.html"
                                        class="read-more ml-auto"
                                        >READ MORE</a
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!-- /.post-meta -->
                            </div>
                          </div>
                        </div>
                        <!-- /.single-blog -->
                        <hr class="hr" />
                      </div>
                      <h5 class="mb-3 pl-2 text-muted">Past Events</h5>
                      <div
                        v-for="p_event in past_events"
                        :key="p_event.title"
                        class="col-md-12 col-12 mb-4">
                        <div class="single-blog">
                          <div class="row">
                            <div class="col-12 col-md-3">
                              <div class="image-box">
                                <img :src="p_event.img" alt="" />
                              </div>
                              <!-- /.image-box -->
                            </div>
                            <div class="col-12 col-md-9">
                              <div class="post-meta">
                                <h5 class="title">
                                  <a
                                    v-if="p_event.title.length < 70"
                                    href="event-details.html"
                                    >{{ p_event.title }}</a
                                  >
                                  <a v-else href="event-details.html">{{
                                    p_event.title.substring(0, 70) + "...."
                                  }}</a>
                                </h5>
                                <div>
                                  <div class="row">
                                    <div class="col-12 col-md-3 px-auto">
                                      <a href="#" class="date">
                                        <i class="fa fa-calendar"></i>
                                        {{ p_event.date }}</a
                                      >
                                    </div>
                                    <div class="col-12 col-md-2">
                                      <a href="#" class="time">
                                        <i class="fa fa-clock-o"></i>
                                        {{ p_event.time }}</a
                                      >
                                    </div>
                                    <div class="col-12 col-md-4">
                                      <a href="#" class="location">
                                        <i class="fa fa-location-arrow"></i>
                                        {{ p_event.location }}</a
                                      >
                                    </div>
                                    <div class="d-flex col-12 col-md-3">
                                      <a
                                        href="event-details.html"
                                        class="read-more ml-auto"
                                        >READ MORE</a
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <!-- /.post-meta -->
                            </div>
                          </div>
                        </div>
                        <!-- /.single-blog -->
                        <hr class="hr" />
                      </div>
                    </div>
                  </div>
                  <!-- /.col- -->
                </div>
                <!-- /.row -->
              </div>
              <div id="news" class="tab-pane fade">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-12 our-blog">
                    <div class="post-wrapper row px-4">
                      <div
                        v-for="blog in blogs"
                        :key="blog.title"
                        class="col-md-4 col-12 mb-4"
                      >
                        <div class="single-blog">
                          <div class="image-box">
                            <img src="images/blog/3.jpg" alt="" />
                            <div class="overlay">
                              <a href="#" class="date">{{ blog.date }}</a>
                            </div>
                          </div>
                          <!-- /.image-box -->
                          <div class="post-meta">
                            <h5 class="title">
                              <a
                                v-if="blog.title.length < 40"
                                href="event-details.html"
                                >{{ blog.title }}</a
                              >
                              <a v-else href="event-details.html">{{
                                blog.title.substring(0, 25) + "...."
                              }}</a>
                            </h5>
                            <p>
                              To seek out new life and new civilizations to
                              boldly go where no man has gone before you would
                              see the biggest gift.
                            </p>
                            <a href="event-details.html" class="read-more"
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
                <div class="theme-pagination text-center">
                  <ul>
                    <li class="active"><a href="#">1</a></li>
                    <!-- <li><a href="#">2</a></li> -->
                    <li>
                      <a href="#"
                        ><i
                          class="fa fa-angle-double-right"
                          aria-hidden="true"
                        ></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- /.container -->
    </div>
    <!-- /.our-case -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogs: [
        {
          title: "International Law Enforcement Intellectual Property",
          date: "Feb 06, 2023"
        },
        {
          title: "International Law Enforcement",
          date: "Feb 06, 2023"
        },
        {
          title:
            "International Law Enforcement Intellectual Property Crime Conference",
          date: "Feb 06, 2023"
        }
      ],
      past_events: [
        {
          title: "24th INTERPOL Asian Regional Conference",
          date: "Tue 28 Feb, 2023",
          time: "8:00",
          location: "Phnom Penh",
          img: 'images/event/1.jpg'
        },
        {
          title: "SME EXPORT TALKS 10: CAMBODIA EXPORT OF SERVICES",
          date: "Tue 28 Feb, 2023",
          time: "8:30",
          location: "Raintree Phnom Penh",
          img: 'images/event/3.png'
        }
      ],
      up_events: [{
        title: 'ACHIEVING ENERGY EFFICIENCY: POLICIES AND BEST PRACTICES',
        date: 'Fri 17 Mar, 2023',
        time: '8:00',
        location: 'Sofitel Phnom Penh Phokeethra',
        img: 'images/event/2.png'
      }]
    };
  },
  methods: {}
};
</script>
