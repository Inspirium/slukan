<script setup lang="ts">
import { ref } from 'vue'
import Hero from '~/components/Hero'
import Contact from '~/components/Contact'

const form = ref({
  ime: '',
  email: '',
  mobitel: '',
  komentar: '',
})

const thankyou = ref(false)
const errorr = ref(false)

function handleSubmit() {
  $fetch('https://frmr.inspirium.hr/11592036230762496', {
    method: 'POST',
    body: form.value,
  })
    .then(() => thankyou.value = true)
    .catch(e => errorr.value = true)
}
</script>

<template>
  <div class="">
    <Hero :image="'/slukan/Soboslikarski .png'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins text-5xl lg:text-6xl hero-text-shadow">
          Kontaktirajte <span class="text-fizio-500">nas</span>
        </h1>
      </slot>
    </Hero>
    <transition name="bounce">
      <div v-if="!thankyou" class="px-8">
        <div class="max-w-2xl mx-auto bg-white sm:py-8 sm:px-6 lg:max-w-7xl">
          <p class="text-gray-400 text-2xl mb-8">
            Popunite i pošaljite formular i mi ćemo vam se javiti u <span class="font-medium text-fizio-500">najkraćem mogućem</span> roku
          </p>
        </div>
        <form name="kontakt" method="POST" data-netlify="true" @submit.prevent="handleSubmit()">
          <div class="max-w-4xl m-auto text-left space-y-6">
            <div class="">
              <label for="name" class="">Ime i prezime</label>
              <div class="mt-1">
                <input id="name" v-model="form.ime" type="text" name="name" class="shadow-sm focus:ring-fizio-500 focus:border-fizio-500 block w-full sm:text-xl py-4 pl-6 border-gray-300 rounded-md">
              </div>
            </div>
            <div>
              <label for="email" class="">E-mail</label>
              <div class="mt-1">
                <input id="email" v-model="form.email" type="email" name="email" class="shadow-sm focus:ring-fizio-500 focus:border-fizio-500 block w-full sm:text-xl py-4 pl-6 border-gray-300 rounded-md">
              </div>
            </div>
            <div>
              <label for="tel" class="">Mobitel</label>
              <div class="mt-1">
                <input id="tel" v-model="form.mobitel" type="tel" name="tel" class="shadow-sm focus:ring-fizio-500 focus:border-fizio-500 block w-full sm:text-xl py-4 pl-6 border-gray-300 rounded-md">
              </div>
            </div>
            <div>
              <div>
                <label for="comment" class="">Komentar</label>
                <div class="mt-1">
                  <textarea id="comment" v-model="form.komentar" rows="4" name="comment" class="shadow-sm focus:ring-fizio-500 focus:border-fizio-500 block w-full sm:text-xl py-4 pl-6 border-gray-300 rounded-md" />
                </div>
              </div>
            </div>
          </div>
          <button type="submit" class="mt-8 inline-block px-8 mb-12 bg-fizio-500 border border-transparent rounded-md shadow py-4 text-xl uppercase font-medium text-white text-center transition duration-400 hover:bg-gray-700">
            Pošalji upit
          </button>
        </form>
      </div>
    </transition>

    <div v-if="thankyou" class="">
      <div class="max-w-2xl mx-auto bg-white sm:py-8 sm:px-6 lg:max-w-7xl">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-5xl sm:text-6xl mb-4 text-center">Hvala na upitu!</h2>
        <p class="text-gray-400 text-2xl mb-8">
          Javiti ćemo vam se u <span class="font-medium text-fizio-500">najkraćem mogućem</span> roku
        </p>
      </div>
    </div>
    <Contact />
  </div>
</template>
