<template>
  <header class="header-two">
    <div class="top-header">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-8 col-12">
            <ul class="left-widget">
              <li>We are leading consultant firm!</li>
              <li>
                <div id="polyglotLanguageSwitcher">
                  <form action="#">
                    <select id="polyglot-language-options">
                      <option id="en" value="en" selected>English</option>
                      <option id="fr" value="fr">French</option>
                      <option id="de" value="de">German</option>
                      <option id="it" value="it">Italian</option>
                      <option id="es" value="es">Spanish</option>
                    </select>
                  </form>
                </div>
                <!-- End #polyglotLanguageSwitcher -->
              </li>
            </ul>
          </div>
          <div class="col-md-6 col-sm-4 col-12">
            <ul class="social-icon">
              <li>
                <a href="#"
                  ><i class="fa fa-facebook" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a>
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-linkedin" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-pinterest" aria-hidden="true"></i
                ></a>
              </li>
              <li>
                <a href="#"
                  ><i class="fa fa-google-plus" aria-hidden="true"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.top-header -->

    <div class="theme-menu-wrapper ">
      <div class="container .header">
        <div class="bg-wrapper clearfix">
          <div class="right-widget float-left">
            <ul>
              <li class="search-option">
                <div class="dropdown">
                  <button
                    type="button"
                    class="dropdown-toggle btnr"
                    data-toggle="dropdown">
                    <i class="fa fa-bars" aria-hidden="true"></i>
                  </button>
                  <ul class="dropdown-menu">
                    

                    <a v-bind:class="{ active: currentRoute === '/about' }"
                      ><NuxtLink to="/about">
                      <button class="dropdown-item" type="button">
                        About Us
                      </button>
                    </NuxtLink>
                      </a
                    >


                    <a  v-bind:class="{ active: currentRoute === '/why' }"
                      >
                      <NuxtLink to="/why">
                      <button class="dropdown-item" type="button">
                        Why ESG Investment?
                      </button>
                      </NuxtLink>

                      </a
                    >

                    <a v-bind:class="{ active: currentRoute === '/service' }"
                      >
                      <NuxtLink to="/service">
                      <button class="dropdown-item" type="button">
                        Our Services
                      </button>
                    </NuxtLink>
                      </a
                    >
                    <a v-bind:class="{ active: currentRoute === '/event_news' }"
                      >
                      <NuxtLink to="/event_news">
                      <button class="dropdown-item" type="button">
                        Events & News
                      </button>
                    </NuxtLink>
                      </a
                    >
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div class="logo float-left">
            <a  style="padding: 10px;">
              <NuxtLink to="/">
              <img src="images/logo/logo.png" alt="" />
            </NuxtLink>
            </a>
          </div>

          <!-- ============== Menu Warpper ================ -->
          <div class="menu-wrapper float-left">
            <nav id="mega-menu-holder" class="clearfix">
              <ul id="horizontal-list">
                
                <li v-bind:class="{ active: currentRoute === '/about' }">
                  <NuxtLink to="/about">
                    <a>About Us</a>
                  </NuxtLink>
                </li>
                <li>/</li>
                <li v-bind:class="{ active: currentRoute === '/why' }">
                  <NuxtLink to="/why">
                    <a>Why ESG Investment?</a>
                  </NuxtLink>
                </li>
                <li>/</li>
                <li v-bind:class="{ active: currentRoute === '/service' }">
                  <NuxtLink to="/service">
                    <a>Our services</a>
                  </NuxtLink>
                </li>
                <li>/</li>
                <li v-bind:class="{ active: currentRoute === '/event_news' }">
                  <NuxtLink to="/event_news">
                    <a>Events & News</a>
                  </NuxtLink>
                </li>
              </ul>
            </nav>
            <!-- /#mega-menu-holder -->
          </div>
          <!-- /.menu-wrapper -->
        </div>
        <!-- /.bg-wrapper -->
      </div>
      <!-- /.container -->
    </div>
    <!-- /.theme-menu-wrapper -->
  </header>
  <!-- /.header-two -->
</template>

<script>
export default {
  computed: {
    currentRoute() {
      return this.$route.path;
    }
  }
};
</script>
