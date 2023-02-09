<script>
import PhCard from '../components/PhCard.vue';
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
export default {
    components: {
        PhCard
    },
    computed: {
        ...mapState(useCounterStore, ['Phs'])
    },
    methods: {
        ...mapActions(useCounterStore, ['fetchPh'])
    },
    created(){
        this.fetchPh()
    }
}
</script>

<template>
    <div class="list">
        <h2 class="text-4xl tracking-widest text-white text-center uppercase">
            <span class="block">List</span>
        </h2>
        <div class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
            style="margin-left: 50px; margin-right: 50px;">
            
            <PhCard v-for="item in Phs" :key="item.id" :item="item"/>

        </div>
    </div>
</template>