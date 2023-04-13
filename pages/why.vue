<template>
  <div>
    <TheInnerBanner title="Why ESG investment?" />
    <!--
			=============================================
				CallOut Banner
			==============================================
			-->
    <div class="callout-banner no-bg">
      <div class="container clearfix">
        <h3 class="title">
          Environmental <br />
          Social <br />
          Governance <br />
        </h3>
        <p>
          ESG is an investment approach that takes into account a company's
          impact on the environment, society, and the quality of its management
          practices. This approach is based on the belief that companies that
          prioritize sustainability, social responsibility, and good governance
          are more likely to be financially successful in the long term. At
          Apsara Fund Management, we facilitate investors to support companies
          that are making positive contributions to society and the environment,
          while avoiding those that are engaging in harmful practices.
        </p>
        <!-- <a href="#" class="theme-button-one">CONTACT US</a> -->
      </div>
    </div>
    <!-- /.callout-banner -->

    <!--
			=====================================================
				Why We Best
			=====================================================
			-->
    <div class="why-we-best">
      <div class="overlay">
        <div class="container">
          <div class="theme-title-one">
            <h2>WHY WE BEST</h2>
            <p>
              Apsara Fund Management is able to attract investors to engage in
              ESG investment due to several compelling reasons:
            </p>
          </div>
          <!-- /.theme-title-one -->

          <div class="wrapper row no-gutters">
            <div class="col-lg-12 col-md-12 col-12 ">
              <ul class="best-list-item">
                <li>
                  <i class="icon flaticon-chart"></i>
                  <h5>
                    <a href="#">Financial Performance</a>
                  </h5>
                  <p>
                    ESG investment can lead to better financial performance.
                    Companies that take ESG issues seriously often perform
                    better in the long-term as they tend to have lower
                    operational costs, a better reputation among stakeholders,
                    and are better positioned to capitalize on new market
                    opportunities. Research has shown that companies with strong
                    ESG practices tend to have more stable stock prices and
                    better financial performance compared to those with weaker
                    ESG practices.
                  </p>
                </li>
                <li>
                  <i class="icon flaticon-target"></i>
                  <h5><a href="#">Mitigating Risk</a></h5>
                  <p>
                    ESG investment can also help mitigate investment risk.
                    Companies that are exposed to environmental or social risks,
                    such as climate change or poor labor practices, are more
                    likely to experience negative financial consequences. By
                    integrating ESG factors into investment decisions, we help
                    investors identify and avoid companies that are exposed to
                    such risks, helping to reduce potential losses.
                  </p>
                </li>
                <li>
                  <i class="icon flaticon-direction-signs"></i>
                  <h5><a href="#">Impact</a></h5>
                  <p>
                    ESG investment also enables investors to create positive
                    impact. By investing in companies listed on our platform,
                    investors can help promote positive environmental, social,
                    and governance practices. This can include supporting
                    companies that are actively working to reduce their carbon
                    footprint, improve working conditions, or increase board
                    diversity.
                  </p>
                </li>
                <li>
                  <i class="icon flaticon-medal"></i>
                  <h5><a href="#">Aligning with Values</a></h5>
                  <p>
                    ESG investment also provides a way for investors to align
                    their investment decisions with their values. We believe
                    that investors are interested in using their investments to
                    promote positive change and support companies that are
                    working towards positive societal or environmental outcomes.
                  </p>
                </li>
                <li>
                  <p>
                    Overall, Apsara Fund Management’s strategy provides a way
                    for investors to achieve both financial returns and positive
                    societal and environmental outcomes. By using our platform,
                    investors will have more options to choose from and more
                    ways to make a positive impact through their investments.
                  </p>
                </li>
              </ul>
            </div>
            <!-- /.col- -->
          </div>
          <!-- /.wrapper -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.overlay -->
    </div>
    <!-- /.why-we-best -->

  </div>
</template>

<script>
import carousel from "vue-owl-carousel";
import ThePartnerSlider from "@/components/ThePartnerSlider.vue";
export default {
  name: "About",
  data() {
    return {};
  },
  components: {
    carousel,
    ThePartnerSlider
  }
};
</script>

<style>
.why-we-best {
  height: 1330px;
  margin-bottom: 0px;
}

.why-we-best .overlay {
  height: 1330px;
}

@media (max-width: 767px) {
  .why-we-best {
    height: 100%;
  }
  .why-we-best .overlay {
    height: 100%;
  }
}

@media (max-width: 991px) {
  .why-we-best {
    height: 100%;
  }
  .why-we-best .overlay {
    height: 100%;
  }
}
</style>
