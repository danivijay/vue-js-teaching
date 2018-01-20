new Vue({
  el: '#vue-app',
  data: {
    fname: 'Dani',
    profile: {
      lname: 'Vijay'
    },
    url: 'https://danivijay.com',
    blog: '<a href="https://utmostdev.com">Blog</a>'
  },
  methods: {
    greetme: function(time) {
      return 'Good ' + time + ' ' + this.fname
    }
  }
})