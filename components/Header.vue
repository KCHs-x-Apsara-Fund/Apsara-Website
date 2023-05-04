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
                  <ul class="dropdown-menu col-auto">


                    <a v-bind:class="{ active: currentRoute === '/about' }"
                      ><NuxtLink to="/about">
                      <button class="dropdown-item" type="button">
                        About Us
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


                    <a  v-bind:class="{ active: currentRoute === '/why' }"
                      >
                      <NuxtLink to="/why">
                      <button class="dropdown-item" type="button">
                        ESG & Impact Investing
                      </button>
                      </NuxtLink>

                      </a
                    >

                    

                    <a v-bind:class="{ active: currentRoute === '/sources' }"
                    ><NuxtLink to="/sources">
                    <button class="dropdown-item" type="button">
                      Sources
                    </button>
                  </NuxtLink>
                    </a>
                    <a v-bind:class="{ active: currentRoute === '/event_news' }"
                      >
                      <NuxtLink to="/event_news">
                      <button class="dropdown-item" type="button">
                        News & Events
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
              <img width="79" height="79" src="https://firebasestorage.googleapis.com/v0/b/apsara-fund.appspot.com/o/Apsara%20Header%20Logo-01.png?alt=media&token=128a0594-32fa-45f5-b94d-c712d1940947" alt="" />
            </NuxtLink>
            </a>
          </div>

          <!-- ============== Menu Warpper ================ -->
          <div class="menu-wrapper float-left">
            <nav id="mega-menu-holder" class="clearfix">
              <ul id="horizontal-list">

                <li v-bind:class="{ active: currentRoute === '/about' }">
                  <NuxtLink to="/about">
                    <a style="font-weight: bold;">About Us</a>
                  </NuxtLink>
                </li>
                <li></li>
                <li v-bind:class="{ active: currentRoute === '/service' }">
                  <NuxtLink to="/service">
                    <a style="font-weight: bold;">Our Services</a>
                  </NuxtLink>
                </li>
                <li></li>
                <li v-bind:class="{ active: currentRoute === '/why' }">
                  <NuxtLink to="/why">
                    <a style="font-weight: bold;">ESG & Impact Investing</a>
                  </NuxtLink>
                </li>
                
                <li></li>
                <li v-bind:class="{ active: currentRoute === '/sources' }">
                  <NuxtLink to="/sources">
                    <a style="font-weight: bold;">Sources</a>
                  </NuxtLink>
                </li>
                <li></li>
                <li v-bind:class="{ active: currentRoute === '/event_news' }">
                  <NuxtLink to="/event_news">
                    <a style="font-weight: bold;">News & Events</a>
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
<style scoped>
.active {

  color: white !important;
  border-bottom: 4px solid #1b4277;
  
  padding: 5px;
}

.active a {
  color: #1b4277 !important;
  font-weight: bold;

}

.active button {
  color: #1b4277!important;
  font-weight: bold;

}

.active button:hover {
  color: #1b4277 !important;
  font-weight: bold;
}

.theme-menu-wrapper {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
