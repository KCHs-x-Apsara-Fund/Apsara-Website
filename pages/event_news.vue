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
                            <div class="image col-12 col-md-3">
                              <div class="image-box">
                                <img :src="u_event.img" alt="" />
                              </div>
                              <!-- /.image-box -->
                            </div>
                            <div class="content-box col-12 col-md-9">
                              <div class="post-meta">
                                <h5 class="title">
                                  <a
                                    v-if="u_event.title.length < 70"
                                     :href="'event_detail?id=' + u_event.id"
                                    >{{ u_event.title }}</a
                                  >
                                  <a v-else :href="'event_detail?id=' + u_event.id">{{
                                    u_event.title.substring(0, 70) + "...."
                                  }}</a>
                                </h5>
                                <div>
                                  <div class="row">
                                    <div class="col-12 col-md-3 px-auto">
                                      <a :href="'event_detail?id=' + u_event.id" class="date">
                                        <i class="fa fa-calendar"></i>
                                        {{ u_event.date }}</a
                                      >
                                    </div>
                                    <div class="col-12 col-md-2">
                                      <a :href="'event_detail?id=' + u_event.id" class="time">
                                        <i class="fa fa-clock-o"></i>
                                        {{ u_event.time }}</a
                                      >
                                    </div>
                                    <div class="col-12 col-md-4">
                                      <a :href="'event_detail?id=' + u_event.id" class="location">
                                        <i class="fa fa-location-arrow"></i>
                                        {{ u_event.location }}</a
                                      >
                                    </div>
                                    <div class="d-flex col-12 col-md-3">
                                      <a
                                        :href="'event_detail?id=' + u_event.id"
                                        class="read-more ml-auto">READ MORE</a>
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
                            <div class="image col-12 col-md-3">
                              <div class="image-box">
                                <img :src="p_event.img" alt="" />
                              </div>
                              <!-- /.image-box -->
                            </div>
                            <div class="content-box col-12 col-md-9">
                              <div class="post-meta">
                                <h5 class="title">
                                  <a
                                    v-if="p_event.title.length < 70"
                                    :href="'event_detail?id=' + p_event.id"
                                    >{{ p_event.title }}</a
                                  >
                                  <a v-else :href="'event_detail?id=' + p_event.id">{{
                                    p_event.title.substring(0, 70) + "...."
                                  }}</a>
                                </h5>
                                <div>
                                  <div class="row">
                                    <div class="col-12 col-md-3 px-auto">
                                      <a :href="'event_detail?id=' + p_event.id" class="date">
                                        <i class="fa fa-calendar"></i>
                                        {{ p_event.date }}</a
                                      >
                                    </div>
                                    <div class="col-12 col-md-2">
                                      <a :href="'event_detail?id=' + p_event.id" class="time">
                                        <i class="fa fa-clock-o"></i>
                                        {{ p_event.time }}</a
                                      >
                                    </div>
                                    <div class="col-12 col-md-4">
                                      <a :href="'event_detail?id=' + p_event.id" class="location">
                                        <i class="fa fa-location-arrow"></i>
                                        {{ p_event.location }}</a
                                      >
                                    </div>
                                    <div class="d-flex col-12 col-md-3">
                                      <a
                                        :href="'event_detail?id=' + p_event.id"
                                        class="read-more ml-auto">READ MORE</a>
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
                        v-for="news in blogs"
                        :key="news.title"
                        class="col-md-4 col-12 mb-4"
                      >
                        <div class="single-blog">
                          <div class="image-box">
                            <img src="https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/3.png?alt=media&token=8d385e54-ff42-482e-a019-d1711bff1ab0" alt="" />
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
                              {{ news.desc.length > 100 ? news.desc.substring(0, 100) + '...' : news.desc }}
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
        }
      ],
      past_events: [
        {
          id: 2,
          title: "24th INTERPOL Asian Regional Conference",
          date: "Tue 28 Feb, 2023",
          time: "8:00",
          location: "Phnom Penh",
          img: 'https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/1.jpg?alt=media&token=f873d3a1-4755-4369-9995-01bea498eb97'
        },
        {
          id: 3,
          title: "SME EXPORT TALKS 10: CAMBODIA EXPORT OF SERVICES",
          date: "Tue 28 Feb, 2023",
          time: "8:30",
          location: "Raintree Phnom Penh",
          img: 'https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/3.png?alt=media&token=8d385e54-ff42-482e-a019-d1711bff1ab0'
        }
      ],
      up_events: [{
        id: 1,
        title: 'ACHIEVING ENERGY EFFICIENCY: POLICIES AND BEST PRACTICES',
        date: 'Fri 17 Mar, 2023',
        time: '8:00',
        location: 'Sofitel Phnom Penh Phokeethra',
        img: 'https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/2.png?alt=media&token=0ee67dd0-a231-4ff9-ac2f-f49a5e398b33'
      }]
    };
  },
  methods: {}
};
</script>
