<script setup lang="ts">
import Hero from '~/components/Hero'
import Contact from '~/components/Contact'

const services = [
  { name: 'Knauf / suhomontaža', desc: 'Gipskartonski radovi, pregradni zidovi, spušteni stropovi', image: '/slukan/suhomontaza.png', slug: 'knauf' },
  { name: 'Soboslikarski radovi', desc: 'Bojanje, gletanje, dekorativne tehnike', image: '/slukan/Soboslikarski.png', slug: 'soboslikarski-radovi' },
  { name: 'Adaptacije', desc: 'Kompletne adaptacije stanova i kuća', image: '/slukan/Adaptacije.png', slug: 'adaptacije' },
  { name: 'Dekorativni elementi', desc: 'Ukrasni stropovi, niše, police od gipskartona', image: '/slukan/Dekorativni.png', slug: 'dekorativni-elementi' },
  { name: 'Izolacije', desc: 'Toplinska i zvučna izolacija zidova i stropova', image: '/slukan/Izolacije.png', slug: 'izolacije' },
  { name: 'Sanacije', desc: 'Popravak oštećenja, zamjena ploča, obnova površina', image: '/slukan/Sanacije.png', slug: 'sanacije' },
]
</script>

<template>
  <div class="">
    <div class="test">
    <Hero :image="'/slukan/suhomontaza.png'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins text-5xl lg:text-6xl hero-text-shadow">
          Slukan <span class="text-fizio-500">Interijeri</span>
        </h1>
        <p class="mt-3 text-xl text-gray-600 sm:mt-5 text-[1.5rem] sm:text-3xl uppercase">
          Knauf, adaptacije i uređenje interijera po sistemu ključ u ruke
        </p>
      </slot>
    </Hero>
    </div>
    <div class="mx-auto max-w-xl text-left">
      <div class="rounded-lg bg-fizio-500 p-10 m-8 sm:-mt-24 ">
        <div class="font-open first-letter:text-white text-white text-sm sm:text-lg first-line:uppercase first-line:tracking-widest first-line:font-semibold first-letter:text-[6.5rem] sm:first-letter:text-[6rem] first-letter:leading-[5rem] first-letter:-ml-[.5rem] first-letter:font-light first-letter:text-white first-letter:mr-3 first-letter:float-left">SLUKAN INTERIJERI j.d.o.o. registrirani su 2022. godine za izvođenje završnih radova u građevini. Uz soboslikarske i suhomontažne (knauf) radove, nudimo i uređenje interijera po sistemu 'ključ u ruke'.
        </div>
        <div class="text-white text-right font-barlow mt-6 text-xl sm:text-2xl font-normal uppercase">Kvaliteta i pouzdanost</div>
      </div>
    </div>

    <!-- Services highlight -->
    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 class="font-barlow font-light uppercase text-gray-700 text-5xl sm:text-6xl text-center mb-12">
        Naše <span class="text-fizio-500">usluge</span>
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <NuxtLink v-for="service in services" :key="service.name" :to="'/usluge/' + service.slug" class="bg-white rounded-2xl shadow-lg overflow-hidden text-center hover:shadow-xl transition duration-200">
          <img :src="service.image" :alt="service.name" class="w-full h-40 object-cover" />
          <div class="p-6">
            <h3 class="text-xl font-poppins font-semibold text-gray-700 mb-3">{{ service.name }}</h3>
            <p class="text-gray-500 font-open">{{ service.desc }}</p>
          </div>
        </NuxtLink>
      </div>
      <div class="text-center mt-12">
        <NuxtLink to="/kontakt" class="inline-block px-8 bg-fizio-500 border border-transparent rounded-md shadow py-4 text-xl uppercase font-medium text-white text-center transition duration-400 hover:bg-gray-700">
          Zatraži ponudu
        </NuxtLink>
      </div>
    </section>

    <Contact />
  </div>
</template>
