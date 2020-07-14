<template>
    <div>
        <section class="text-left m-auto py-40" style="background-color: #f8f8fb;">
            <div class="container">
                <div class="grid grid-cols-3 gap-4">
                    <div class="col-span-3 lg:col-span-2">
                        <h1 class="text-4xl lg:text-6xl font-black uppercase">
                            Webové stránky <br> na míru
                        </h1>
                        <p class="lg:w-1/2 text-lg lg:text-2xl text-gray-800 font-hairline mt-10">
                            Tvořím webové stránky na míru, na které se můžete spolehnout.
                        </p>
                    </div>
                    <div class="col-span-3 lg:col-span-1">
                        <div id="animations" class="animations container m-auto text-center w-5/6 sm:w-1/2 lg:w-5/6 mx-auto">
                            <img src="http://pngimg.com/uploads/feather/feather_PNG12993.png" alt="asd">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Header'
    }
</script>

<style scoped>
    .animations {
        position: relative;
        animation-name: example;
        animation-duration: 3s;
        animation-timing-function: linear;
        animation-delay: 0s;
        animation-iteration-count: infinite;
        animation-direction: alternate;
        z-index: 1;
    }

    @keyframes example {
        0%   {top:0%;}
        100% {top:15%;}
    }
</style>
