<template>
  <div class="flex items-stretch flex-wrap lg:flex-no-wrap">
    <div class="w-full lg:w-7/12">
      <div class="px-4 space-y-4">
        <div class="flex items-end space-x-2">
          <h2 class="text-white text-2xl font-brand leading-normal">
            Burrito
          </h2>
          <h3 class="text-gray-300 text-lg font-brand leading-normal">
            Declasse
          </h3>
        </div>
        <ul class="ml-2 text-gray-100 space-y-2">
          <li class="flex space-x-2 items-center">
            <font-awesome-icon
              :icon="['fad', 'check-circle']"
              class="text-green-500 text-xl"
              fixed-width
            ></font-awesome-icon>
            <span class="text-green-500 font-brand text-lg">sofort verfügbar</span>
          </li>
<!--          <li class="flex space-x-2 items-center">-->
<!--            <font-awesome-icon-->
<!--              :icon="['fad', 'times-circle']"-->
<!--              class="text-red-500 text-xl"-->
<!--              fixed-width-->
<!--            ></font-awesome-icon>-->
<!--            <span class="text-red-500 font-brand text-lg">-->
<!--              vermietet-->
<!--              <span class="text-gray-400">(bis 27.12.2020)</span>-->
<!--            </span>-->
<!--          </li>-->
          <li class="flex space-x-2 items-center">
            <font-awesome-icon
              :icon="['fad', 'tachometer']"
              class="text-brand text-xl"
              fixed-width
            ></font-awesome-icon>
            <span class="text-lg">
              ~150km/h
              <span class="text-gray-400">(142PS)</span>
            </span>
          </li>
          <li class="flex space-x-2 items-center">
            <font-awesome-icon
              :icon="['fad', 'chair-office']"
              class="text-brand text-xl"
              fixed-width
            ></font-awesome-icon>
            <span class="text-lg">
              4
              <span class="text-gray-300">Sitzplätze</span>
            </span>
          </li>
          <li class="flex space-x-2 items-center">
            <font-awesome-icon
              :icon="['fad', 'gas-pump']"
              class="text-brand text-xl"
              fixed-width
            ></font-awesome-icon>
            <span class="text-lg">
              Benzin
            </span>
          </li>
          <li class="flex space-x-2 items-center">
            <font-awesome-icon
              :icon="['fad', 'truck-loading']"
              class="text-brand text-xl"
              fixed-width
            ></font-awesome-icon>
            <span class="text-lg">
              350kg
              <span class="text-gray-300">Zuladung</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full lg:w-5/12 mt-8 lg:mt-0">
      <img src="@/assets/Burrito.jpg" alt="Burrito" class="mx-auto w-2/3 lg:mx-0 lg:w-full lg:h-full lg:max-h-56 rounded-lg object-cover">
    </div>
    <div class="w-full flex justify-end items-stretch space-x-1 text-white mt-8">
      <div
        class="bg-gray-900 py-2 px-4 text-gray-100 text-right flex-1 font-brand first:rounded-l-lg last:rounded-r-lg"
      >
        <div class="text-lg">
          Tagestarif*
        </div>
        <p class="text-3xl">
          $300
          <span class="text-base">/ Tag</span>
        </p>
      </div>
      <div
        class="bg-gray-900 py-2 px-4 text-gray-100 text-right flex-1 font-brand first:rounded-l-lg last:rounded-r-lg"
      >
        <div class="text-lg">
          Wochentarif*
        </div>
        <p class="text-3xl">
          $1,300
          <span class="text-base">/ Woche</span>
        </p>
      </div>
      <div
        class="bg-brand py-2 px-4 text-black opacity-75 text-right flex-1 font-brand first:rounded-l-lg last:rounded-r-lg"
      >
        <div class="text-lg">
          Kombitarif "sleep"*
        </div>
        <p class="text-3xl">
          $50
          <span class="text-base">/ Stunde</span>
        </p>
      </div>
      <div
        class="bg-brand py-2 px-4 text-black text-right flex-1 font-brand first:rounded-l-lg last:rounded-r-lg"
      >
        <div class="text-lg">
          Kombitarif "sleep'n'eat"*
        </div>
        <p class="text-3xl">
          $60
          <span class="text-base">/ Stunde</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
