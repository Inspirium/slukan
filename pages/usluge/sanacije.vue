<script setup lang="ts">
import Hero from '~/components/Hero'
import Contact from '~/components/Contact'
</script>

<template>
  <div class="">
    <Hero :image="'/slukan/Sanacije.png'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins text-5xl lg:text-6xl hero-text-shadow">
          <span class="text-fizio-500">Sanacije</span>
        </h1>
        <p class="mt-3 text-xl text-gray-600 sm:mt-5 text-[1.5rem] sm:text-3xl uppercase">
          Popravci i obnova površina
        </p>
      </slot>
    </Hero>

    <div class="max-w-4xl m-auto mb-20 px-6">
      <div class="max-w-3xl mx-auto sm:py-8">
        <p class="text-gray-400 text-xl sm:text-2xl mb-8 leading-8 sm:leading-10">
          Nudimo profesionalne usluge sanacije i popravaka oštećenih površina — od manjih popravaka pukotina do kompletne zamjene gipskartonskih ploča i obnove zidova i stropova.
        </p>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Popravak oštećenja
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Pukotine i rupe:</span> Sanacija pukotina, rupa i drugih oštećenja na gipskartonskim i žbukanim površinama
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Oštećenja od vlage:</span> Sanacija zidova i stropova oštećenih vlagom ili procurivanjem, uključujući uklanjanje uzroka i obnovu površine
          </li>
        </ul>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Zamjena ploča i obloga
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Zamjena gipskartonskih ploča:</span> Zamjena starih ili oštećenih ploča novim, osiguravajući dugotrajnost i estetiku prostora
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Obnova žbuke:</span> Uklanjanje oštećene žbuke i nanošenje nove za savršeno ravnu površinu
          </li>
        </ul>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Završna obrada
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Gletanje i brušenje:</span> Priprema sanirane površine za završno bojanje ili tapeciranje
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Bojanje:</span> Završno bojanje saniranih površina s usklađivanjem tona s postojećim bojama
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
