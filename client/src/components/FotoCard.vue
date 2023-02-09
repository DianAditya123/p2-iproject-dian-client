<script>

export default {
    props: ['item']
}
</script>

<template>
    <center>
        <div class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
                <img alt="Art"
                    :src="item.imageUrl"
                    class="h-96 w-full object-cover" style="width: 500px; height: 400px;" />

                <h3 class="mt-4 text-xl font-bold text-white">By, {{ item.Photografer.username }}</h3>
            </div>
    </center>
</template>