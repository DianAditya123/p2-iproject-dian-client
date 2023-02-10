<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    data() {
        return {
            PhotograferId: '',
            TypeId: '',
            address: '',
            date: ""
        }
    },
    computed: {
        ...mapState(useCounterStore, ['Phs', 'types'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchPh', 'fetchType', 'addCart'])
    },
    created() {
        this.fetchPh()
        this.fetchType()
    }
}
</script>

<template>
    <!--
  This component uses @tailwindcss/forms

  yarn add @tailwindcss/forms
  npm install @tailwindcss/forms

  plugins: [require('@tailwindcss/forms')]
-->

    <section class="cart">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div class="lg:col-span-2 lg:py-12">
                    <p class="max-w-xl text-lg text-white">
                        At the same time, the fact that we are wholly owned and totally
                        independent from manufacturer and other group control gives you
                        confidence that we will only recommend what is right for you.
                    </p>

                    <div class="mt-8">
                        <a href="" class="text-2xl font-bold text-pink-600">
                            0151 475 4450
                        </a>

                        <address class="mt-2 not-italic text-white">
                            282 Kevin Brook, Imogeneborough, CA 58517
                        </address>
                    </div>
                </div>

                <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
                    <form action="" class="space-y-4" @submit.prevent="addCart(PhotograferId, TypeId, address, date)">
                        <div>
                            <label class="sr-only" for="name">Photografer</label>
                            <select class="w-full rounded-lg border-gray-200 p-3 text-sm" name="" id="name" v-model="PhotograferId">
                                <option value="" selected disabled>--Select One--</option>
                                <option v-for="ph in Phs" :key="ph.id" :value=ph.id>{{ ph.username }}</option>
                            </select>
                        </div>

                        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label class="sr-only" for="email">Email</label>
                                <select class="w-full rounded-lg border-gray-200 p-3 text-sm" name="" id="email" v-model="TypeId">
                                    <option value="" selected disabled>--Select One</option>
                                    <option v-for="tp in types" :key="tp.id" :value="tp.id">{{ tp.title }}</option>
                                </select>
                            </div>

                            <div>
                                <label class="sr-only" for="address">Address</label>
                                <input class="w-full rounded-lg border-gray-200 p-3 text-sm" v-model="address" placeholder="Address"
                                    type="text" id="address" />
                            </div>
                        </div>

                        <div>
                            <label class="sr-only" for="date">date</label>
                            <input class="w-full rounded-lg border-gray-200 p-3 text-sm" type="date" v-model="date"> 
                        </div>

                        <div class="mt-4">
                            <button type="submit"
                                class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto">
                                <span class="font-medium"> Pesan </span>

                                <svg xmlns="http://www.w3.org/2000/svg" class="ml-3 h-5 w-5" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

</template>