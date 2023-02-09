<script>
export default {

}
</script>

<template>
    <div class="list">
        <h2 class="text-4xl tracking-widest text-white text-center uppercase">
            <span class="block">List</span>
        </h2>
        <div class="mt-10 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
            style="margin-left: 50px; margin-right: 50px;">
            <!-- HeroesCard -->
            <div href="#" class="group relative block bg-black">
                <img alt="Developer"
                    src="https://images.unsplash.com/photo-1603871165848-0aa92c869fa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
                    class="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50" />

                <div class="relative p-8">
                    <p class="text-sm font-medium uppercase tracking-widest text-pink-500">
                        Developer
                    </p>

                    <p class="text-2xl font-bold text-white">Tony Wayne</p>

                    <div class="mt-64">
                        <div
                            class="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                            <p class="text-sm text-white">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                                perferendis hic asperiores quibusdam quidem voluptates doloremque
                                reiciendis nostrum harum. Repudiandae?
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>