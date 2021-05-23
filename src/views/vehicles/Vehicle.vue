<template>
  <div class="flex items-stretch flex-wrap lg:flex-no-wrap">
    <div class="w-full lg:w-7/12">
      <div class="px-4 space-y-4">
        <div class="flex items-end space-x-2">
          <h2
            class="text-white text-2xl font-brand leading-normal"
            v-text="vehicle.model.model"
          ></h2>
          <h3
            class="text-gray-300 text-lg font-brand leading-relaxed"
            v-text="vehicle.model.manufacturer"
          ></h3>
        </div>
        <ul class="ml-2 text-gray-100 space-y-2">
          <li v-if="!vehicle.tenant_id" class="flex space-x-2 items-center">
            <font-awesome-icon
              :icon="['fal', 'check-circle']"
              class="text-green-500 text-xl"
              fixed-width
            ></font-awesome-icon>
            <span class="text-green-500 font-brand text-lg"
              >sofort verfügbar</span
            >
          </li>
          <li v-else class="flex space-x-2 items-center">
            <font-awesome-icon
              :icon="['fal', 'times-circle']"
              class="text-red-500 text-xl"
              fixed-width
            ></font-awesome-icon>
            <span class="text-red-500 font-brand text-lg">
              nicht verfügbar
              <span
                class="text-gray-400"
                v-if="vehicle.available_at"
                v-text="`(verfügbar ab ${vehicle.available_at})`"
              ></span>
            </span>
          </li>
          <li class="flex space-x-2 items-center">
            <font-awesome-icon
              :icon="['fal', 'tachometer']"
              class="text-brand text-xl"
              fixed-width
            ></font-awesome-icon>
            <span class="text-lg">
              {{ `${vehicle.max_speed}km/h` }}
              <span
                class="text-gray-400"
                v-text="`(${vehicle.horsepower}PS)`"
              ></span>
            </span>
          </li>
          <li class="flex space-x-2 items-center">
            <font-awesome-icon
              :icon="['fal', 'chair-office']"
              class="text-brand text-xl"
              fixed-width
            ></font-awesome-icon>
            <span class="text-lg">
              {{ vehicle.model.seats }}
              <span class="text-gray-300">Sitzplätze</span>
            </span>
          </li>
          <li class="flex space-x-2 items-center">
            <font-awesome-icon
              :icon="['fal', 'gas-pump']"
              class="text-brand text-xl"
              fixed-width
            ></font-awesome-icon>
            <span class="text-lg" v-text="vehicle.fuel"></span>
          </li>
          <li class="flex space-x-2 items-center">
            <font-awesome-icon
              :icon="['fal', 'truck-loading']"
              class="text-brand text-xl"
              fixed-width
            ></font-awesome-icon>
            <span class="text-lg">
              {{ `${vehicle.model.trunk}kg` }}
              <span class="text-gray-300">Zuladung</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full lg:w-5/12 mt-8 lg:mt-0">
      <vue-load-image>
        <img
          slot="image"
          :src="vehicle.model.picture_url"
          class="mx-auto w-2/3 lg:mx-0 lg:w-full lg:h-full lg:max-h-56 rounded-lg object-cover"
          :alt="vehicle.model.model"
        />
        <div
          slot="preloader"
          class="bg-gray-900 rounded-lg w-2/3 lg:mx-0 h-56 lg:w-full mx-auto text-center"
        >
          <font-awesome-icon
            :icon="['fal', 'spinner-third']"
            class="h-full w-full text-white text-2xl"
            spin
          ></font-awesome-icon>
        </div>
        <div
          slot="error"
          class="bg-gray-900 rounded-lg w-2/3 lg:mx-0 h-56 lg:w-full mx-auto text-center flex flex-col justify-center"
        >
          <span class="text-gray-400 font-brand"
            >Fahrzeugbild nicht verfügbar</span
          >
        </div>
      </vue-load-image>
    </div>
    <div
      class=" w-full flex flex-wrap lg:flex-no-wrap justify-end items-stretch space-x-1 text-white mt-8"
    >
      <div
        v-if="vehicle.tariffs.length <= 0"
        class="text-gray-100 text-lg font-brand bg-gray-900 text-center flex-1 rounded-lg px-4 py-6"
      >
        <h4>
          Aktuell stehen leider keiner Tarife für dieses Fahrzeug zur
          Verfügung.<br />Kontaktiere uns für ein individuelles Angebot.
        </h4>
      </div>
      <div
        v-for="tariff in vehicle.tariffs"
        :key="tariff.id"
        :class="{
          'bg-brand text-black': tariff.pivot.highlighted,
          'bg-gray-900 text-gray-100': !tariff.pivot.highlighted,
          'bg-opacity-100': tariff.pivot.highlight_percentage === 100,
          'bg-opacity-75': tariff.pivot.highlight_percentage === 75,
          'bg-opacity-50': tariff.pivot.highlight_percentage === 50,
          'bg-opacity-25': tariff.pivot.highlight_percentage === 25
        }"
        class="py-2 px-4 text-right flex-1 font-brand first:rounded-l-lg last:rounded-r-lg"
      >
        <div class="text-lg" v-text="`${tariff.name}*`"></div>
        <p class="text-3xl">
          {{ $formatCurrency.format(tariff.pivot.price) }}
          <span class="text-base" v-text="`/ ${tariff.term}`"></span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import VueLoadImage from "vue-load-image";

export default {
  components: {
    VueLoadImage
  },
  props: {
    vehicle: {
      type: Object,
      required: true
    }
  }
};
</script>
