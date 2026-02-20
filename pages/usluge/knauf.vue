<script setup lang="ts">
import Hero from '~/components/Hero'
import Contact from '~/components/Contact'
</script>

<template>
  <div class="">
    <Hero :image="'/slukan/suhomontaza.png'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins text-5xl lg:text-6xl hero-text-shadow">
          Knauf <span class="text-fizio-500">/ suhomontaža</span>
        </h1>
        <p class="mt-3 text-xl text-gray-600 sm:mt-5 text-[1.5rem] sm:text-3xl uppercase">
          Gipskartonski radovi
        </p>
      </slot>
    </Hero>

    <div class="max-w-4xl m-auto mb-20 px-6">
      <div class="max-w-3xl mx-auto sm:py-8">
        <p class="text-gray-400 text-xl sm:text-2xl mb-8 leading-8 sm:leading-10">
          Gipskartonski radovi predstavljaju ključnu fazu u unutarnjem uređenju obiteljskih kuća i poslovnih prostora, pružajući brojne prednosti u pogledu fleksibilnosti dizajna, brzine izvedbe i kvalitete završnog izgleda. Naš tim stručnjaka posvećen je pružanju visokokvalitetnih usluga montaže gipskartonskih ploča, koje zadovoljavaju sve tehničke standarde i estetske zahtjeve.
        </p>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Izrada pregradnih zidova
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Pregradni zidovi:</span> Postavljanje gipskartonskih pregradnih zidova za formiranje novih prostorija ili prilagodbu postojećih prostora
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Zvučna izolacija:</span> Ugradnja zvučno izolacijskih materijala unutar pregradnih zidova za bolju akustiku i privatnost
          </li>
        </ul>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Oblaganje zidova i stropova
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Oblaganje zidova:</span> Oblaganje unutarnjih zidova gipskartonskim pločama kako bi se postigla ravna i glatka površina spremna za završnu obradu
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Spušteni stropovi:</span> Montaža spuštenih stropova s mogućnošću integracije rasvjetnih tijela, ventilacijskih sustava i drugih instalacija
          </li>
        </ul>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Izrada dekorativnih elemenata
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Dekorativni stropovi i zidovi:</span> Kreiranje složenih dekorativnih oblika i dizajna na stropovima i zidovima, uključujući lučne površine, niše i police
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Ukrasni detalji:</span> Ugradnja ukrasnih letvi, lajsni i drugih dekorativnih elemenata od gipskartona
          </li>
        </ul>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Toplinska i zvučna izolacija
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Ugradnja izolacije:</span> Postavljanje toplinske i zvučne izolacije unutar gipskartonskih zidova i stropova za poboljšanje energetske efikasnosti i udobnosti prostora
          </li>
        </ul>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Sanacija i popravci
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Popravak oštećenja:</span> Sanacija oštećenih gipskartonskih površina, uključujući pukotine, rupe i druga oštećenja
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Zamjena ploča:</span> Zamjena starih ili oštećenih gipskartonskih ploča novim, osiguravajući dugotrajnost i estetiku prostora
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
