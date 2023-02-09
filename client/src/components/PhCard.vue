<script>
export default {
    props: ['item']
}
</script>

<template>
    <center>
        <div href="#" class="group relative block bg-black">
                <img alt="Developer"
                    src="https://ik.imagekit.io/wnkpreh30/WhatsApp_Image_2023-02-09_at_11.39.13.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1675917639514"
                    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />

                <div class="relative p-8">
                    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                        Photografer
                    </p>

                    <p class="text-2xl font-bold text-white">{{ item.username }}</p>

                    <div class="mt-64">
                        <div
                            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p class="text-sm text-white">
                                {{ item.skill }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    </center>
</template>