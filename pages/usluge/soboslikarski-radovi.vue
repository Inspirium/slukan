<script setup lang="ts">
import Hero from '~/components/Hero'
import Contact from '~/components/Contact'
</script>

<template>
  <div class="">
    <Hero :image="'/slukan/Soboslikarski.png'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins text-5xl lg:text-6xl hero-text-shadow">
          Soboslikarski <span class="text-fizio-500">radovi</span>
        </h1>
        <p class="mt-3 text-xl text-gray-600 sm:mt-5 text-[1.5rem] sm:text-3xl uppercase">
          Bojanje, gletanje i dekorativne tehnike
        </p>
      </slot>
    </Hero>

    <div class="max-w-4xl m-auto mb-20 px-6">
      <div class="max-w-3xl mx-auto sm:py-8">
        <p class="text-gray-400 text-xl sm:text-2xl mb-8 leading-8 sm:leading-10">
          Soboslikarski radovi obuhvaćaju sve faze završne obrade unutarnjih zidova i stropova. Naš tim pruža profesionalne usluge bojanja, gletanja i dekorativnih tehnika koje osiguravaju savršen završni izgled vašeg prostora.
        </p>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Bojanje zidova i stropova
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Unutarnje bojanje:</span> Profesionalno bojanje unutarnjih prostora s kvalitetnim bojama, uključujući pripremu površina i višeslojni nanos
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Stropovi:</span> Precizno bojanje stropova ravnih i zakrivljenih površina za ujednačen i čist izgled
          </li>
        </ul>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Gletanje i priprema površina
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Gletanje zidova:</span> Nanošenje glet mase za postizanje savršeno ravne i glatke površine, pripremljene za završno bojanje
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Brušenje i priprema:</span> Temeljito brušenje i čišćenje površina prije nanošenja završnog sloja
          </li>
        </ul>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Dekorativne tehnike
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Dekorativne žbuke:</span> Nanošenje dekorativnih žbuka i teksturiranih završnih obrada za jedinstven izgled prostora
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Tapeciranje:</span> Postavljanje tapeta i dekorativnih zidnih obloga po izboru klijenta
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
