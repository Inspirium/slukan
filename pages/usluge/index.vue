<script setup lang="ts">
import Hero from '~/components/Hero'
import Contact from '~/components/Contact'
import { usluge } from '~/stores/services'
</script>

<template>
  <div class="">
    <Hero :image="'/slukan/suhomontaza.png'">
      <slot>
        <h1 class="text-4xl tracking-tight font-bold text-gray-700 font-poppins text-5xl lg:text-6xl hero-text-shadow">
          Naše <span class="text-fizio-500">usluge</span>
        </h1>
        <p class="mt-3 text-xl text-gray-600 sm:mt-5 text-[1.5rem] sm:text-3xl uppercase">
          Završni radovi u gradnji i uređenje interijera
        </p>
      </slot>
    </Hero>

    <div class="max-w-2xl lg:max-w-4xl mx-auto bg-white sm:py-4 sm:px-6">
      <p class="text-gray-400 text-xl sm:text-2xl px-6">
        Nudimo širok spektar usluga završnih radova u građevini — od suhomontažnih i soboslikarskih radova do kompletnih adaptacija interijera po sistemu <span class="font-medium text-fizio-500">ključ u ruke</span>.
      </p>
    </div>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="md:flex flex-wrap justify-center flex-col sm:flex-row sm:space-x-7">
        <NuxtLink v-for="item in usluge" :key="item.id" :to="'/usluge/' + item.slug" class="grow-0 rounded-3xl flex overflow-hidden flex-col lg:outline outline-4 outline-transparent lg:hover:outline-fizio-500 lg:hover:border-fizio-500 shadow-xl hover:shadow-sm transform duration-200 lg:w-1/5 hover:cursor-pointer mb-10">
          <img v-if="item.image" class="object-cover h-40 w-full" :src="item.image" :alt="item.title">
          <div class="p-4">
            <h2 class="font-barlow font-normal text-gray-700 text-3xl mb-3">
              {{ item.title }}
            </h2>
            <h3 class="text-gray-600 mb-3 text-base font-open">
              {{ item.short_dec }}
            </h3>
          </div>
        </NuxtLink>
      </div>
    </section>

    <Contact />
  </div>
</template>
