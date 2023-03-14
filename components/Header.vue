<template>
  <header class="header-two">


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

                    <a v-bind:class="{ active: currentRoute === '/team' }"
                    ><NuxtLink to="/team">
                    <button class="dropdown-item" type="button">
                      Team
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
              <img src="https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/logo.png?alt=media&token=f26e57a2-dcff-433e-9212-5967c0aedf75" alt="" />
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
                <li v-bind:class="{ active: currentRoute === '/team' }">
                  <NuxtLink to="/team">
                    <a>Team</a>
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
