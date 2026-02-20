<script setup lang="ts">
import Hero from '~/components/Hero'
</script>

<template>
  <div class="">
    <Hero :image="'/slukan/Adaptacije.png'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins text-5xl lg:text-6xl hero-text-shadow">
          O nama
        </h1>
      </slot>
    </Hero>

    <div class="max-w-4xl m-auto mb-20">
      <div class="max-w-2xl mx-auto bg-white sm:py-8 sm:px-6 lg:max-w-7xl">
        <p class="text-gray-400 text-xl sm:text-2xl mb-8 px-6">
          Slukan Interijeri j.d.o.o. registrirani su 2022. godine za izvođenje završnih radova u građevini. Uz soboslikarske i suhomontažne (knauf) radove, nudimo i uređenje interijera po sistemu 'ključ u ruke'.
        </p>
        <p class="text-gray-400 text-xl sm:text-2xl mb-8 px-6">
          S ciljem pružanja kvalitetne i kompletne usluge adaptacija svih vrsta interijera, oformili smo projektantsko-izvođački tim sa višegodišnjim iskustvom.
        </p>
      </div>

      <h2 class="font-barlow font-light uppercase text-gray-700 text-5xl sm:text-6xl text-center">Naše usluge</h2>
      <p class="text-gray-400 text-xl sm:text-2xl px-6 mb-10">
        Višegodišnje iskustvo <span class="font-medium text-fizio-500">Vama</span> na raspolaganju
      </p>

      <div class="max-w-3xl mx-auto px-6">
        <div class="space-y-8">
          <div>
            <h3 class="text-fizio-500 text-xl font-semibold mb-3">Knauf / suhomontaža</h3>
            <p class="font-open text-lg text-gray-700 leading-8">
              Gipskartonski radovi za obiteljske kuće i poslovne prostore — pregradni zidovi, spušteni stropovi, oblaganje zidova, dekorativni elementi.
            </p>
          </div>
          <div>
            <h3 class="text-fizio-500 text-xl font-semibold mb-3">Soboslikarski radovi</h3>
            <p class="font-open text-lg text-gray-700 leading-8">
              Bojanje, gletanje i dekorativne tehnike za savršen završni izgled vašeg prostora.
            </p>
          </div>
          <div>
            <h3 class="text-fizio-500 text-xl font-semibold mb-3">Adaptacije i uređenje</h3>
            <p class="font-open text-lg text-gray-700 leading-8">
              Kompletne adaptacije stanova, kuća i poslovnih prostora — od planiranja do završnih radova.
            </p>
          </div>
          <div>
            <h3 class="text-fizio-500 text-xl font-semibold mb-3">Ključ u ruke</h3>
            <p class="font-open text-lg text-gray-700 leading-8">
              Cjelovita usluga uređenja interijera koja uključuje struju, vodu, grijanje, stolariju, keramiku, podopolagačke radove, Knauf i soboslikarske radove.
            </p>
          </div>
        </div>
      </div>

      <div class="text-center mt-12">
        <NuxtLink to="/kontakt" class="inline-block px-8 bg-fizio-500 border border-transparent rounded-md shadow py-4 text-xl uppercase font-medium text-white text-center transition duration-400 hover:bg-gray-700">
          Kontaktirajte nas
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
