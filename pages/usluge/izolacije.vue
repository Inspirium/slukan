<script setup lang="ts">
import Hero from '~/components/Hero'
import Contact from '~/components/Contact'
</script>

<template>
  <div class="">
    <Hero :image="'/slukan/Izolacije.png'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins text-5xl lg:text-6xl hero-text-shadow">
          <span class="text-fizio-500">Izolacije</span>
        </h1>
        <p class="mt-3 text-xl text-gray-600 sm:mt-5 text-[1.5rem] sm:text-3xl uppercase">
          Toplinska i zvučna izolacija
        </p>
      </slot>
    </Hero>

    <div class="max-w-4xl m-auto mb-20 px-6">
      <div class="max-w-3xl mx-auto sm:py-8">
        <p class="text-gray-400 text-xl sm:text-2xl mb-8 leading-8 sm:leading-10">
          Kvalitetna izolacija ključna je za energetsku efikasnost, udobnost i akustiku vašeg prostora. Nudimo ugradnju toplinske i zvučne izolacije unutar gipskartonskih konstrukcija, krovnih kosina i vanjskih zidova.
        </p>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Toplinska izolacija
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Izolacija zidova:</span> Postavljanje toplinske izolacije unutar gipskartonskih zidova za smanjenje gubitaka topline i poboljšanje energetske efikasnosti
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Izolacija stropova:</span> Ugradnja izolacijskih materijala u spuštene stropove i potkrovlja za optimalnu termoregulaciju
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Krovne kosine:</span> Izolacija krovnih kosina mineralnom vunom ili drugim izolacijskim materijalima
          </li>
        </ul>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Zvučna izolacija
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Akustični zidovi:</span> Ugradnja zvučno izolacijskih materijala za bolju akustiku i privatnost između prostorija
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Međukatna izolacija:</span> Zvučna izolacija podova i stropova za smanjenje prijenosa zvuka između katova
          </li>
        </ul>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Materijali
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Mineralna vuna:</span> Korištenje kvalitetnih izolacijskih materijala vodećih proizvođača za dugotrajnost i efikasnost
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Parna brana:</span> Pravilna ugradnja parne brane za sprečavanje kondenzacije i zaštitu konstrukcije
          </li>
        </ul>
      </div>

      <div class="text-center mb-8">
        <NuxtLink to="/kontakt" class="inline-block px-8 bg-fizio-500 border border-transparent rounded-md shadow py-4 text-xl uppercase font-medium text-white text-center transition duration-400 hover:bg-gray-700">
          Zatraži ponudu
        </NuxtLink>
      </div>
    </div>

    <Contact />
  </div>
</template>
