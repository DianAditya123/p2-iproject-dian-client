<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';
import CartTable from '../components/CartTable.vue';

export default {
    components: {
        CartTable
    },
    computed: {
        ...mapState(useCounterStore, ['carts'])
    },
    methods: {
        ...mapActions(useCounterStore, ['showCart'])
    },
    created(){
        this.showCart()
    }
}
</script>

<template>
    <div class="list">
        <h2 class="text-4xl tracking-widest text-white text-center uppercase">
            <span class="block">Cart</span>
        </h2>
        <div class="" style="margin-left: 50px; margin-right: 50px; margin-top: 50px;">
            <div class="overflow-x-auto">
  <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
    <thead>
      <tr>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-white"
        >
          Photografer
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-white"
        >
          Type
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-white"
        >
          address
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-white"
        >
          Salary
        </th>
        <th
          class="whitespace-nowrap px-4 py-2 text-left font-medium text-white"
        >
          Date
        </th>
        <th class="px-4 py-2"></th>
      </tr>
    </thead>

    <tbody class="divide-y divide-gray-200">
      <CartTable v-for="item in carts" :key="item.id" :item="item"/>
    </tbody>
  </table>
</div>

        </div>
    </div>
</template>