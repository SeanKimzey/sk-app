/* global Vue, VueRouter, axios */

var HomePage = {
  template: "#home-page",
  data: function() {
    return {
      message: "Sean's Page!"
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};

// var AudioSamplesPage = new Vue({
//   template: "#audio_samples-page",
//   el: "#app",
//   data: {
//     message: "Hello Vue.js!"
//   },
//   mounted() {
//     this.$nextTick(() => {
//       this.wavesurfer = WaveSurfer.create({
//         container: "#waveform",
//         waveColor: "blue",
//         progressColor: "purple"
//       });
//       this.wavesurfer.load("MissinMe_AlexRuwe.mp3");
//     });
//   },
//   methods: {
//     play() {
//       this.wavesurfer.playPause();
//     }
//   }
// });

var AudioSamplesPage = {
  template: "#audio_samples-page",
  data: function() {
    return {
      message: "Audio Samples"
    };
  },
  created: function() {
    // var wavesurfer = WaveSurfer.create({
    //   container: "#waveform",
    //   waveColor: "darkorange",
    //   progressColor: "purple",
    //   splitChannels: true,
    //   height: 64
    // });
    // wavesurfer.load("MissinMe_AlexRuwe.mp3");
    // return wavesurfer;
  },
  methods: {},
  computed: {}
};

var router = new VueRouter({
  routes: [
    { path: "/", component: HomePage },
    { path: "/audio_samples", component: AudioSamplesPage }
  ],
  scrollBehavior: function(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});

var app = new Vue({
  el: "#vue-app",
  router: router
});

// var AudioSamplesPage = new Vue({
//   template: "#audio_samples-page",
//   el: "#app",
//   data: {
//     message: "Hello Vue.js!"
//   },
//   mounted() {
//     this.$nextTick(() => {
//       this.wavesurfer = WaveSurfer.create({
//         container: "#waveform",
//         waveColor: "blue",
//         progressColor: "purple"
//       });
//       this.wavesurfer.load("MissinMe_AlexRuwe.mp3");
//     });
//   },
//   methods: {
//     play() {
//       this.wavesurfer.playPause();
//     }
//   }
// });
