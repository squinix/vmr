<template>
    <div>
        <scrollactive class="my-nav flex sticky top-0 items-center justify-between flex-wrap bg-white pb-6" active-class="active">
            <div class="w-full container block flex-grow sm:flex sm:items-center sm:w-auto">
                <ul class="hidden md:flex w-2/3 m-auto">
                    <!-- <li class="flex-1 mr-2">
                        <span class="text-center block px-4 font-black text-uppercase">
                            Logo
                        </span>
                    </li> -->
                    <li class="flex-1 mr-2">
                        <a href="#intro" class="scrollactive-item text-left block px-4 font-black uppercase" style="padding-top: 6px;">
                            <small class="text-gray-500 font-hairline">
                                01
                            </small>
                            <br>
                            <strong>
                                Intro
                            </strong>
                        </a> 
                    </li>
                    <li class="flex-1 mr-2">
                        <a href="#promo" class="scrollactive-item text-left block px-4 font-black uppercase" style="padding-top: 6px;">
                            <small class="text-gray-500 font-hairline">
                                02
                            </small>
                            <br>
                            <strong>
                                Promo
                            </strong>
                        </a> 
                    </li>
                    <li class="flex-1 mr-2">
                        <a href="#techs" class="scrollactive-item text-left block px-4 font-black uppercase" style="padding-top: 6px;">
                            <small class="text-gray-500 font-hairline">
                                03
                            </small>
                            <br>
                            <strong>
                                Techs
                            </strong>
                        </a>
                    </li>
                    <li class="flex-1 mr-2">
                        <a href="#process" class="scrollactive-item text-left block px-4 font-black uppercase" style="padding-top: 6px;">
                            <small class="text-gray-500 font-hairline">
                                04
                            </small>
                            <br>
                            <strong>
                                Process
                            </strong>
                        </a>
                    </li>
                    <li class="flex-1 mr-2">
                        <a href="#references" class="scrollactive-item text-left block px-4 font-black uppercase" style="padding-top: 6px;">
                            <small class="text-gray-500 font-hairline">
                                05
                            </small>
                            <br>
                            <strong>
                                References
                            </strong>
                        </a>
                    </li>
                    <li class="flex-1 mr-2">
                        <a href="#contact" class="scrollactive-item text-left block px-4 font-black uppercase" style="padding-top: 6px;">
                            <small class="text-gray-500 font-hairline">
                                06
                            </small>
                            <br>
                            <strong>
                                Contact
                            </strong>
                        </a>
                    </li>
                </ul>
                <div class="block md:hidden pt-6"> 
                    <div class="flex justify-end">
                        <button type="button" @click="open">
                            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18px" height="24px">
                                <path v-if="isOpen" d="M 12 0 C 5.382813 0 0 5.382813 0 12 C 0 18.617188 5.382813 24 12 24 C 18.617188 24 24 18.617188 24 12 C 24 5.382813 18.617188 0 12 0 Z M 12 2 C 17.535156 2 22 6.464844 22 12 C 22 14.398438 21.148438 16.59375 19.75 18.3125 L 5.6875 4.25 C 7.40625 2.851563 9.601563 2 12 2 Z M 4.25 5.6875 L 18.3125 19.75 C 16.59375 21.148438 14.398438 22 12 22 C 6.464844 22 2 17.535156 2 12 C 2 9.601563 2.851563 7.40625 4.25 5.6875 Z"/>
                                <path v-if="!isOpen" d="M 0 2 L 0 4 L 24 4 L 24 2 Z M 0 11 L 0 13 L 24 13 L 24 11 Z M 0 20 L 0 22 L 24 22 L 24 20 Z"/>
                            </svg>    
                        </button>
                    </div>
                    <transition enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOutRight">
                        <div v-if="isOpen" class="text-left pt-3">
                            <a href="#" class="block py-1 px-2">
                                Home
                            </a>
                            <hr class="hr">
                            <a href="#" class="block py-1 px-2">
                                Home
                            </a>
                            <hr class="hr">
                            <a href="#" class="block py-1 px-2">
                                Home
                            </a>    
                        </div>    
                    </transition>
                </div>
            </div>
        </scrollactive>
    </div>
</template>

<script>
    export default {
        name: 'Nav',

        data() {
            return {
                isOpen: false,
            };
        },

        methods: {
            open() {
                this.isOpen = !this.isOpen;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .active {
        -webkit-transition: all 0.2s ease-in;
        -moz-transition: all 0.2s ease-in;
        -o-transition: all 0.2s ease-in;
        transition: all 0.2s ease-in;
        border-top: solid #2b22aa 3px;
        padding-top: 3px!important;
    }
</style>
