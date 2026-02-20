<script setup lang="ts">
import Hero from '~/components/Hero'
import Contact from '~/components/Contact'
</script>

<template>
  <div class="">
    <Hero :image="'/slukan/Dekorativni.png'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins text-5xl lg:text-6xl hero-text-shadow">
          Dekorativni <span class="text-fizio-500">elementi</span>
        </h1>
        <p class="mt-3 text-xl text-gray-600 sm:mt-5 text-[1.5rem] sm:text-3xl uppercase">
          Ukrasni stropovi, niše i police od gipskartona
        </p>
      </slot>
    </Hero>

    <div class="max-w-4xl m-auto mb-20 px-6">
      <div class="max-w-3xl mx-auto sm:py-8">
        <p class="text-gray-400 text-xl sm:text-2xl mb-8 leading-8 sm:leading-10">
          Dekorativni elementi od gipskartona daju prostoru jedinstven karakter i osobnost. Izrađujemo složene oblike na stropovima i zidovima koji kombiniraju funkcionalnost s estetikom — od niša za rasvjetu do polica i lučnih površina.
        </p>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Dekorativni stropovi
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Višerazinski stropovi:</span> Izrada stropova s više razina za dinamičan vizualni efekt i mogućnost integracije skrivene rasvjete
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Lučne površine:</span> Kreiranje zakrivljenih i lučnih oblika na stropovima za elegantan i moderan izgled
          </li>
        </ul>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Zidne niše i police
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Niše:</span> Izrada zidnih niša za dekorativne svrhe, osvjetljenje ili smještaj TV uređaja i polica
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Ugrađene police:</span> Izrada polica od gipskartona integrirane u zidnu konstrukciju za optimalno korištenje prostora
          </li>
        </ul>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Ukrasni detalji
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Lajsne i letive:</span> Ugradnja ukrasnih letvi, lajsni i profila od gipskartona za završne detalje
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Skrivena rasvjeta:</span> Priprema i izrada utora za LED trake i indirektno osvjetljenje
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
