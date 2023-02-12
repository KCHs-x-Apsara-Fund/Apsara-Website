export default {

	// Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
	ssr: false,
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',
	// Server
	server: {
		host: '0.0.0.0'
	},
	// Global page headers: https://go.nuxtjs.dev/config-head

	head: {
		title: "Apsara Fund Management",
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', href: '/favicon.png', type: 'image/x-icon' },
			{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
			{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap' },
			{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap' },
			{ rel: 'stylesheet', href: '/css/style.css' },
			{ rel: 'stylesheet', href: '/css/responsive.css' },

		],
		script: [
			{ src: 'https://polyfill.io/v3/polyfill.min.js?features=es6', body: true },
			{ src: '/vendor/jquery.2.2.3.min.js' , body: true },
			{ src: '/vendor/popper.js/popper.min.js' , body: true },
			{ src: '/vendor/bootstrap/js/bootstrap.min.js' , body: true },
			{ src: '/vendor/Camera-master/scripts/jquery.mobile.customized.min.js' , body: true },
			{ src: '/vendor/Camera-master/scripts/jquery.easing.1.3.js' , body: true },
			{ src: '/vendor/Camera-master/scripts/camera.min.js' , body: true },
			{ src: '/vendor/menu/src/js/jquery.slimmenu.js' , body: true },
			{ src: '/vendor/WOW-master/dist/wow.min.js' , body: true },
			{ src: '/vendor/owl-carousel/owl.carousel.min.js' , body: true },
			{ src: '/vendor/jquery.appear.js' , body: true },
			{ src: '/vendor/jquery.countTo.js' , body: true },
			{ src: '/vendor/fancybox/dist/jquery.fancybox.min.js', body: true  },
			{ src: '/vendor/language-switcher/jquery.polyglot.language.switcher.js', body: true  },
			{ src: '/vendor/sanzzy-map/dist/snazzy-info-window.min.js', body: true  },
			{ src: '/js/theme.js' , body: true },
			{ src: '/js/map-script.js' , body: true },
		]
	},



	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'@/assets/css/main.css',
	],
	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		{ src: '~/plugins/bootstrap.client.js' },
		{ src: '~/plugins/lazysizes.client.js' }
	],
	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,
	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
		// https://go.nuxtjs.dev/content
		'@nuxt/content',
		// https://github.com/nuxt-community/robots-module
		'@nuxtjs/robots',
	],
	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		'@nuxt/postcss8',
	],
	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			lang: 'en'
		}
	},
	// Content module configuration: https://go.nuxtjs.dev/config-content
	content: {

	},
  
 	generate: {
		fallback: true
	},
	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		postcss: {
			plugins: {
			  tailwindcss: {},
			  autoprefixer: {},
			},
		  },
		loaders: {
			vue: {
				compilerOptions: {
					whitespace: 'condense',
					preserveWhitespace: false
				}
			},
			sass: {
				implementation: require('sass')
			},
			scss: {
				implementation: require('sass')
			}
		}
	}
}

