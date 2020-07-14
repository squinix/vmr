<template>
<!--     <agile :dots="true" :infinite="true" :autoplay="false" style="background-color: #f8f8fb;">
        <div class="grid grid-cols-2 gap-4 my-20">
            <div class="flex content-center flex-wrap text-gray-700 px-4 py-2 m-2 ml-20">
                <div>
                    <h1 class="text-4xl lg:text-4xl font-black uppercase text-right">
                        Laravel
                    </h1>
                    <p class="text-base lg:text-base text-gray-800 font-light mt-4 text-right">
                        Šablony jsou rychlé, optimalizované a využívají moderní technologie. Testujeme v různých prohlížečích a na všemožných zařízeních.
                    </p>    
                </div>
            </div>
            <div class="text-gray-700 text-right px-4 py-2 m-2 mr-20">
                <img src="/img/responsive.png" alt="asd" width="50%">
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4 my-20">
            <div class="flex content-center flex-wrap text-gray-700 px-4 py-2 m-2 ml-20">
                <div>
                    <h1 class="text-4xl lg:text-4xl font-black uppercase text-right">
                        Vue JS
                    </h1>
                    <p class="text-base lg:text-base text-gray-800 font-light mt-4 text-right">
                        Šablony jsou rychlé, optimalizované a využívají moderní technologie. Testujeme v různých prohlížečích a na všemožných zařízeních.
                    </p>    
                </div>
            </div>
            <div class="text-gray-700 text-right px-4 py-2 m-2 mr-20">
                <img src="/img/responsive.png" alt="asd" width="50%">
            </div>
        </div>
        <div class="grid grid-cols-2 gap-4 my-20">
            <div class="flex content-center flex-wrap text-gray-700 px-4 py-2 m-2 ml-20">
                <div>
                    <h1 class="text-4xl lg:text-4xl font-black uppercase text-right">
                        TailwindCSS
                    </h1>
                    <p class="text-base lg:text-base text-gray-800 font-light mt-4 text-right">
                        Šablony jsou rychlé, optimalizované a využívají moderní technologie. Testujeme v různých prohlížečích a na všemožných zařízeních.
                    </p>    
                </div>
            </div>
            <div class="text-gray-700 text-right px-4 py-2 m-2 mr-20">
                <img src="/img/responsive.png" alt="asd" width="50%">
            </div>
        </div>
        <template slot="prevButton"></template>
        <template slot="nextButton"></template>
    </agile> -->
    <div class="bg-gray-300 py-4">
        <carousel :per-page="1" :navigationEnabled="true">
            <slide
                data-index="0"
                data-name="MySlideName1"
                @slideclick="handleSlideClick"
                >
                    <div class="grid grid-cols-2 gap-4">
                        <div class="flex content-center flex-wrap text-gray-700 px-4 py-2 m-2 ml-20">
                            <div>
                                <h1 class="text-4xl lg:text-4xl font-black uppercase text-right">
                                    Laravel
                                </h1>
                                <p class="text-base lg:text-base text-gray-800 font-light mt-4 text-right">
                                    Šablony jsou rychlé, optimalizované a využívají moderní technologie. Testujeme v různých prohlížečích a na všemožných zařízeních.
                                </p>    
                            </div>
                        </div>
                        <div class="text-gray-700 text-right px-4 py-2 m-2 mr-20">
                            <img src="/img/responsive.png" alt="asd" width="50%">
                        </div>
                    </div>
            </slide>
            <slide
                data-index="1"
                data-name="MySlideName2"
                @slideclick="handleSlideClick">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="flex content-center flex-wrap text-gray-700 px-4 py-2 m-2 ml-20">
                            <div>
                                <h1 class="text-4xl lg:text-4xl font-black uppercase text-right">
                                    Vue JS
                                </h1>
                                <p class="text-base lg:text-base text-gray-800 font-light mt-4 text-right">
                                    Šablony jsou rychlé, optimalizované a využívají moderní technologie. Testujeme v různých prohlížečích a na všemožných zařízeních.
                                </p>    
                            </div>
                        </div>
                        <div class="text-gray-700 text-right px-4 py-2 m-2 mr-20">
                            <img src="/img/responsive.png" alt="asd" width="50%">
                        </div>
                    </div>
            </slide>
            <slide
                data-index="2"
                data-name="MySlideName3"
                @slideclick="handleSlideClick">
                    <div class="grid grid-cols-2 gap-4">
                        <div class="flex content-center flex-wrap text-gray-700 px-4 py-2 m-2 ml-20">
                            <div>
                                <h1 class="text-4xl lg:text-4xl font-black uppercase text-right">
                                    TailwindCSS
                                </h1>
                                <p class="text-base lg:text-base text-gray-800 font-light mt-4 text-right">
                                    Šablony jsou rychlé, optimalizované a využívají moderní technologie. Testujeme v různých prohlížečích a na všemožných zařízeních.
                                </p>    
                            </div>
                        </div>
                        <div class="text-gray-700 text-right px-4 py-2 m-2 mr-20">
                            <img src="/img/responsive.png" alt="asd" width="50%">
                        </div>
                    </div>
            </slide>
        </carousel>        
    </div>

</template>

<script>
    export default {
        name: 'Technologies',
        methods: {
            handleSlideClick (dataset) {
                console.log(dataset.index, dataset.name)
            }
        }
    }
</script>

<style>
    @import "/styles.css";

    .VueCarousel-navigation-prev {
        left: 50px!important;
    }

    .VueCarousel-navigation-next {
        right: 50px!important;
    }
</style>