new Vue({
    el: '#vue-app',
    data: {    
        err: false,
        succ: false,
        vehicles: ['bus', 'car', 'bike'],
        carbrands: [
            {name: 'hyunadai', country: 'korea'},
            {name: 'audi', country: 'germany'},
            {name: 'bmw', country: 'germany'}
        ]
    }
})