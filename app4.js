new Vue({
    el: '#vue-app',
    data: {
        name: '',
        person: {
            age: 0
        }
    },
    methods: {
    },
    computed: {
        calcAge: function() {
            return parseInt(this.person.age) + 18;
        },
        addRed: function() {
            return {
                red: (this.calcAge > 25 ? true : false)
            }
        }
    }
})