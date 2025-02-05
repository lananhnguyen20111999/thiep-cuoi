var app = new Vue({
    el: '#main-page',
    data: {
        isGroom: false,
        customerName: 'Socks',
    },
    mounted() { 
        console.log('aaaaaaaaaaaaaaa')
        console.log(this.isGroom);
    }
})