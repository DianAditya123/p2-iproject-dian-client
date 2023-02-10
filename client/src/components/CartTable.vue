<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    props: ['item'],
    methods: {
        ...mapActions(useCounterStore, ['payment'])
    }
}

</script>

<template>
    <tr>
        <td class="whitespace-nowrap px-4 py-2 font-medium text-white">
          {{ item.Photografer.username }}
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-white">{{ item.Type.title }}</td>
        <td class="whitespace-nowrap px-4 py-2 text-white">{{ item.address }}</td>
        <td class="whitespace-nowrap px-4 py-2 text-white">{{ item.price }}</td>
        <td class="whitespace-nowrap px-4 py-2 text-white">{{ item.date }}</td>
        <td class="whitespace-nowrap px-4 py-2" v-if="item.status === false">
          <a
            href="#" @click.prevent="payment(item.id)"
            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
          >
            Pay
          </a>
        </td>
        <td class="whitespace-nowrap px-4 py-2" v-if="item.status === true">Sudah Dibayar</td>
      </tr>
</template>