new Vue({
  el: '#vue-app',
  data: {
    fname: 'Dani',
    profile: {
      lname: 'Vijay'
    }
  },
  methods: {
    greetme: function(time) {
      return 'Good ' + time + ' ' + this.fname
    }
  }
})