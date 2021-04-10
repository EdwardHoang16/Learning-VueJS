const app = Vue.createApp({
    data() {
        return {
            url: 'www.google.com',
            showBooks: true,
            books: [
                { title: 'name of the wind', author: 'tom', img: 'assets/1.jpg', isFav: true },
                { title: 'oath bringer', author: 'vivian', img: 'assets/2.jpg', isFav: false },
                { title: 'dawn breaker', author: 'koa', img: 'assets/3.jpg', isFav: true }
            ],
            x: 0,
            y: 0
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        },
        toggleIsFav(book) {
            book.isFav = !book.isFav
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter((book) => book.isFav)
        }
    } 
})

app.mount('#app')