Vue.component('greeting', {
  template: '<p>Reusable component by {{name}}<button @click="changeName">Change</button></p>',
  data: function() {
    return {
      name: 'Dani'
    }
  },
  methods: {
    changeName: function() {
      this.name = 'UtmostDev'
    }
  }
})

let one = new Vue({
  el: "#app-1",
  data: {
    title: 'Title One'
  }
})

let two = new Vue({
  el: "#app-2",
  data: {
    title: 'Title Two'
  },
  computed: {
    addTitle: function () {
      return `${one.title} and ${this.title}`
    }
  }
})
two.title = 'Changed Title'