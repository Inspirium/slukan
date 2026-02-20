<script setup lang="ts">
import { computed, defineComponent, h } from 'vue'
import { LocationMarkerIcon, MailOpenIcon, PhoneIcon } from '@heroicons/vue/outline'

const navigation = {
  company: [
    { name: 'Početna', href: '/' },
    { name: 'Usluge', href: '/usluge' },
    { name: 'O nama', href: '/o-nama' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
  usluge: [
    { name: 'Knauf / suhomontaža', href: '/usluge/knauf' },
    { name: 'Soboslikarski radovi', href: '/usluge/soboslikarski-radovi' },
    { name: 'Adaptacije', href: '/usluge/adaptacije' },
    { name: 'Dekorativni elementi', href: '/usluge/dekorativni-elementi' },
    { name: 'Izolacije', href: '/usluge/izolacije' },
    { name: 'Sanacije', href: '/usluge/sanacije' },
  ],
}
</script>

<template>
  <footer class="bg-gray-100 text-left" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">
      Footer
    </h2>
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div class="md:flex md:justify-between">
        <div class="xl:grid-col-1">
          <img class="h-16" src="~assets/img/logo.svg" alt="Slukan Interijeri">
          <p class="mt-8 text-gray-500 text-xl">
            Mače, Mače 193<br>
            +385 91 600 1873<br>
            vendelins393@gmail.com
          </p>
          <p class="text-fizio-500 uppercase text-base my-5 font-bold font-poppins">
            Vlasnik: Vendelin Slukan
          </p>
        </div>
        <div class="mt-12 md:mt-0 md:grid-col-2">
          <div class="flex md:space-x-12 space-y-6 flex-col sm:flex-row sm:space-y-0 flex-wrap">
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-fizio-500 tracking-wider uppercase">
                Slukan Interijeri
              </h3>
              <ul role="list" class="mt-4 space-y-3">
                <li v-for="item in navigation.company" :key="item.name">
                  <NuxtLink :to="item.href" class="text-md font-open text-gray-500 hover:text-fizio-500">
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="flex-1">
              <h3 class="text-xl font-semibold text-fizio-500 tracking-wider uppercase">
                Usluge
              </h3>
              <ul role="list" class="mt-4 space-y-3">
                <li v-for="item in navigation.usluge" :key="item.name">
                  <NuxtLink :to="item.href" class="text-md font-open text-gray-500 hover:text-fizio-500">
                    {{ item.name }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-200 pt-8">
        <p class="text-base text-gray-400 xl:text-center">
          &copy; {{ new Date().getFullYear() }}. Slukan Interijeri j.d.o.o. — Završni radovi u građevini
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>

ul {
  @apply lg:col-start-4 pt-0 list-none font-poppins ml-0
}

</style>
