<script setup lang="ts">
import Hero from '~/components/Hero'
import Contact from '~/components/Contact'
</script>

<template>
  <div class="">
    <Hero :image="'/slukan/Adaptacije.png'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins text-5xl lg:text-6xl hero-text-shadow">
          <span class="text-fizio-500">Adaptacije</span>
        </h1>
        <p class="mt-3 text-xl text-gray-600 sm:mt-5 text-[1.5rem] sm:text-3xl uppercase">
          Kompletne adaptacije stanova i kuća
        </p>
      </slot>
    </Hero>

    <div class="max-w-4xl m-auto mb-20 px-6">
      <div class="max-w-3xl mx-auto sm:py-8">
        <p class="text-gray-400 text-xl sm:text-2xl mb-8 leading-8 sm:leading-10">
          Nudimo kompletne adaptacije stambenih i poslovnih prostora — od početnog planiranja i projektiranja do završnih radova. Naš tim koordinira sve faze adaptacije kako biste dobili funkcionalan i estetski ugodan prostor.
        </p>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Adaptacije stanova
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Prenamjena prostora:</span> Rušenje i postavljanje novih pregradnih zidova, promjena rasporeda prostorija prema vašim potrebama
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Obnova kupaonice:</span> Kompletna renovacija kupaonice uključujući keramiku, sanitarije i vodoinstalacije
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Obnova kuhinje:</span> Adaptacija kuhinjskog prostora s novim instalacijama i završnim obradama
          </li>
        </ul>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Adaptacije kuća
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Unutarnje uređenje:</span> Kompletno unutarnje uređenje obiteljskih kuća — podovi, zidovi, stropovi, stolarija
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Energetska obnova:</span> Poboljšanje toplinske izolacije, zamjena stolarije i ostali radovi za veću energetsku efikasnost
          </li>
        </ul>
      </div>

      <div class="mb-12">
        <h2 class="font-barlow font-light uppercase text-gray-700 text-4xl sm:text-5xl mb-6">
          Poslovni prostori
        </h2>
        <ul class="space-y-4 text-left max-w-3xl mx-auto">
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Uredi i trgovine:</span> Adaptacije poslovnih prostora prema specifičnim zahtjevima djelatnosti
          </li>
          <li class="font-open text-lg text-gray-700 leading-8">
            <span class="font-semibold text-fizio-500">Koordinacija radova:</span> Upravljanje svim fazama projekta — od demontaže do završne čistke
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
