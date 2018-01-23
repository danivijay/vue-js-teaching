new Vue({
  el: '#vue-app',
  data: {   
    inputNameVal: ''
  },
  methods: {
    getName: function () {
      console.log(this.$refs.inputName.value)
      this.$refs.inputName.value = 'go to console'
    }
  }
})