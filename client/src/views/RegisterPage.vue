<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
    data(){
        return{
            username: "",
            email: "",
            password: "",
            phoneNumber: ""
        }
    },
    methods: {
        ...mapActions(useCounterStore, ['register'])
    }
}
</script>

<template>
    <div class="flex px-20 justify-center items-center min-h-screen bg-black" id="register">
        <div class="px-8 py-6 mt-4 text-left bg-red shadow-lg"
            style="margin-top: 150px; border-radius: 5%; background: rgb(248, 86, 86); margin-bottom: 150px; width: 500px;">
            <div class="flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16"
                    style="width: 100px; height: 100px; color: aliceblue;" height="16" fill="currentColor"
                    class="bi bi-camera" viewBox="0 0 16 16">
                    <path
                        d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                    <path
                        d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                </svg>
            </div>
            <h3 class="text-2xl font-bold text-center">Create new account</h3>
            <form action="" @submit.prevent="register(username, email, password, phoneNumber)">
                <div class="mt-4 mb-4" style="margin-left: 5%; margin-right: 5%;">
                    <div>
                        <label class="block" for="name">Username</label>
                                <input type="text" placeholder="Username" id="name" v-model="username"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div>
                        <label class="block" for="email">Email</label>
                                <input type="email" placeholder="Email" id="email" v-model="email"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="mt-4">
                        <label class="block" for="password">Password</label>
                                <input type="password" placeholder="Password" id="password" v-model="password"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="mt-4">
                        <label class="block" for="phone">Phone Number</label>
                                <input type="text" placeholder="Phone Number" id="phone" v-model="phoneNumber"
                                    class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600">
                    </div>
                    <div class="flex items-baseline justify-center mt-4">
                        <button class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" type="submit">Sign
                            up</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>