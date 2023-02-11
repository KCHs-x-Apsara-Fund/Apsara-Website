<template>
  <!--
			=============================================
				Theme Inner Banner
			==============================================
			-->
  <div class="theme-inner-banner section-spacing">
    <div class="overlay">
      <div class="container">
        <h2>{{ title }}</h2>
      </div>
      <!-- /.container -->
    </div>
    <!-- /.overlay -->
  </div>
  <!-- /.theme-inner-banner -->
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title"
    }
  }
};
</script>
