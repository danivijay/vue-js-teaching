new Vue({
  el: "#vue-app",
  data: {
    age: 25,
    x: 0,
    y: 0
  },
  methods: {
    plus: function (val) {
      this.age += val 
    },
    updateXY: function (event) {
      this.x = event.offsetX
      this.y = event.offsetY
    },
    clickblocker: () => { alert('blocked link load') }
  }
})