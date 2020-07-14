<template>
    <div id="app">
        <div id="intro" ref="infoBox">
            <Header />
        </div>
        <div class="my-nav sticky top-0" :class="{shadow: scrolled}">
            <Nav />
        </div>
        <div id="promo" class="grid grid-cols-3 gap-4 container py-16">
            <div class="m-5">
                <div class="p-5 hover:shadow">
                    <div>
                        <img src="/img/responsive.png" class="mx-auto w-40">
                    </div>
                    <h1 class="text-lg lg:text-lg text-gray-900 font-black mt-4 text-center uppercase">
                        Responzivní šablony
                    </h1>
                    <p class="text-base lg:text-base text-gray-800 font-light mt-4 text-center">
                        Šablony jsou rychlé, optimalizované a využívají moderní technologie. Testujeme v různých prohlížečích a na všemožných zařízeních.
                    </p>
                </div>
            </div>
            <div class="m-5 mt-40">
                <div class="p-5 hover:shadow">
                    <div>
                        <img src="/img/responsive.png" class="mx-auto w-40">
                    </div>
                    <h1 class="text-lg lg:text-lg text-gray-900 font-black mt-4 text-center uppercase">
                        Responzivní šablony
                    </h1>
                    <p class="text-base lg:text-base text-gray-800 font-light mt-4 text-center">
                        Šablony jsou rychlé, optimalizované a využívají moderní technologie. Testujeme v různých prohlížečích a na všemožných zařízeních.
                    </p>
                </div>
            </div>
            <div class="m-5">
                <div class="p-5 hover:shadow">
                    <div>
                        <img src="/img/responsive.png" class="mx-auto w-40">
                    </div>
                    <h1 class="text-lg lg:text-lg text-gray-900 font-black mt-4 text-center uppercase">
                        Responzivní šablony
                    </h1>
                    <p class="text-base lg:text-base text-gray-800 font-light mt-4 text-center">
                        Šablony jsou rychlé, optimalizované a využívají moderní technologie. Testujeme v různých prohlížečích a na všemožných zařízeních.
                    </p>
                </div>
            </div>
        </div>
        <div id="techs">
            <Technologies />
        </div>
        <div id="process" style="min-height: 100vh;">
            Proces tvorby www
        </div>
        <div id="references" style="min-height: 100vh;">
            Reference
        </div>
        <div id="contact" style="min-height: 100vh;">
            Kontakt
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import Nav from './components/Nav.vue';
    import Technologies from './components/Technologies.vue';

    export default {
        name: 'App',
        components: {
            Header,
            Nav,
            Technologies
        },

        data() {
            return {
                scrolled: false,
            };
        },

        methods: {
            handleScroll() {
                let height = this.$refs.infoBox.clientHeight;
                this.scrolled = window.scrollY > height;
            }
        },

        created() {
            window.addEventListener('scroll', this.handleScroll);
        },

        destroyed() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }
</script>

<style>
    @import "styles.css";

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    
    .my-nav {
        z-index: 1!important;
    }
</style>
