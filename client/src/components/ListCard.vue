<script>
export default {
    props: ['item']
}
</script>

<template>
    <center>
        <div class="block rounded-lg p-4 shadow-md shadow-indigo-100" id="list">
            <img alt="Home" v-if="item.title === 'Foto Keluarga'"
                src="https://1.bp.blogspot.com/-IiaRXV6z9NQ/XRfuW2XIjoI/AAAAAAAAD0g/dfavDQbVGpQBMa5SmMhGP-8hxxvCqXaPACEwYBhgL/s640/pose-miring-foto-keluarga-di-studio.jpg"
                class="h-56 w-full rounded-md object-cover" />
            <img alt="Home" v-if="item.title === 'Foto Pasangan'"
                src="https://parentalk.id/wp-content/uploads/2021/12/shutterstock_1006211680-1.jpg"
                class="h-56 w-full rounded-md object-cover" />
            <img alt="Home" v-if="item.title === 'Foto Sendiri'"
                src="http://imgcdn.mommiesdaily.com/2019/02/raychan-622037-unsplash.jpg"
                class="h-56 w-full rounded-md object-cover" />
    
            <div class="mt-2">
    
                <div class="mt-6 flex items-center gap-8 text-xs">
                    <div class="sm:inline-flex sm:shrink-0 sm:items-center">
    
                        <div class="mt-1.5 sm:ml-3 sm:mt-0">
                            <p class="text-gray-200">Type</p>
    
                            <p class="font-medium text-gray-400">{{ item.title }}</p>
                        </div>
                    </div>
    
                    <div class="sm:inline-flex sm:shrink-0 sm:items-center">
    
                        <div class="mt-1.5 sm:ml-3 sm:mt-0">
                            <p class="text-gray-200">Price</p>
    
                            <p class="font-medium text-gray-400">Rp. {{ item.price }}</p>
                        </div>
                    </div>
    
                    <div class="sm:inline-flex sm:shrink-0 sm:items-center">
    
                        <div class="mt-1.5 sm:ml-3 sm:mt-0">
                            <p class="text-gray-200">Total Foto</p>
    
                            <p class="font-medium text-gray-400">{{ item.totalPhoto }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </center>
</template>