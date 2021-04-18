<template>
  <div class="mt-8 mb-8 md:mt-20">
    <div class="flex flex-wrap lg:flex-no-wrap items-end">
      <h3
        class="mb-4 lg:-mb-1 flex-1 text-white text-3xl font-brand pl-4 text-brand"
      >
        Fahrzeugvermietung
      </h3>
      <div class="w-full flex items-stretch lg:min-w-64 lg:max-w-lg">
        <div class="bg-brand flex flex-col justify-center px-4 rounded-tl-lg">
          <font-awesome-icon
            class="text-black text-2xl"
            :icon="['fad', 'search']"
          ></font-awesome-icon>
        </div>
        <input
          type="text"
          placeholder="Welches Fahrzeug suchst du?"
          v-model="filters.name"
          class="w-full bg-gray-900 rounded-tr-lg px-4 py-4 text-lg text-white outline-none border border-gray-900 focus:border-gray-800"
        />
      </div>
    </div>
    <div
      class="w-full flex flex-wrap lg:flex-no-wrap items-stretch bg-gray-950 rounded-lg rounded-tr-none"
    >
      <div class="w-full lg:w-2/3 py-8">
        <div
          v-if="filteredVehicles.length <= 0"
          class="bg-gray-900 rounded-lg flex flex-col justify-center mx-4 text-gray-200 text-xl font-brand p-8 text-center"
        >
          <p v-if="isLoading" class="flex justify-center space-x-4 items-center">
            <font-awesome-icon
              :icon="['fad', 'spinner-third']"
              spin
            ></font-awesome-icon>
            <span>
              Fahrzeuge werden geladen.
            </span>
          </p>

          <p v-else>
            Es konnten keine Fahrzeuge mit deinen ausgewählten Kriterien
            gefunden werden. Versuche deine Suchkriterien zu ändern.
          </p>
        </div>
        <transition-group
          name="list"
          tag="div"
          class="grid grid-cols-1 gap-x-4 gap-y-12 mx-4"
        >
          <vehicle
            v-for="vehicle in filteredVehicles"
            :key="vehicle.id"
            :vehicle="vehicle"
          ></vehicle>
        </transition-group>
      </div>
      <div class="w-full lg:w-1/3">
        <div class="px-3 pt-6 pb-8 space-y-6">
          <toggle :default-open="true">
            <div slot-scope="{ isOpen, toggle }" class="space-y-4">
              <div
                @click="toggle()"
                class="flex items-center cursor-pointer space-x-2"
              >
                <font-awesome-icon
                  v-if="!isOpen"
                  :icon="['fad', 'plus-square']"
                  class="text-gray-100 text-xl"
                  fixed-width
                ></font-awesome-icon>
                <font-awesome-icon
                  v-else
                  :icon="['fad', 'minus-square']"
                  class="text-gray-100 text-xl"
                  fixed-width
                ></font-awesome-icon>
                <h2 class="font-brand text-white text-2xl select-none">
                  Verfügbarkeit
                </h2>
              </div>
              <transition name="fade">
                <ul v-if="isOpen" class="space-y-1">
                  <li
                    @click="filters.available = !filters.available"
                    class="flex items-center cursor-pointer space-x-2 bg-gray-900 rounded py-3 px-2 text-gray-100"
                  >
                    <font-awesome-icon
                      v-if="filters.available"
                      :icon="['fad', 'check-square']"
                      class="text-2xl text-brand"
                      fixed-width
                    ></font-awesome-icon>
                    <font-awesome-icon
                      v-else
                      :icon="['fad', 'square']"
                      class="text-2xl text-gray-100"
                      fixed-width
                    ></font-awesome-icon>
                    <span>Sofort verfügbar</span>
                  </li>
                  <li
                    @click="filters.unavailable = !filters.unavailable"
                    class="flex items-center cursor-pointer space-x-2 bg-gray-900 rounded py-3 px-2 text-gray-100"
                  >
                    <font-awesome-icon
                      v-if="filters.unavailable"
                      :icon="['fad', 'check-square']"
                      class="text-2xl text-brand"
                      fixed-width
                    ></font-awesome-icon>
                    <font-awesome-icon
                      v-else
                      :icon="['fad', 'square']"
                      class="text-2xl text-gray-100"
                      fixed-width
                    ></font-awesome-icon>
                    <span>vermietet</span>
                  </li>
                </ul>
              </transition>
            </div>
          </toggle>
          <toggle>
            <div slot-scope="{ isOpen, toggle }" class="space-y-4">
              <div
                @click="toggle()"
                class="flex items-center cursor-pointer space-x-2"
              >
                <font-awesome-icon
                  v-if="!isOpen"
                  :icon="['fad', 'plus-square']"
                  class="text-gray-100 text-xl"
                  fixed-width
                ></font-awesome-icon>
                <font-awesome-icon
                  v-else
                  :icon="['fad', 'minus-square']"
                  class="text-gray-100 text-xl"
                  fixed-width
                ></font-awesome-icon>
                <h2 class="font-brand text-white text-2xl select-none">
                  Klassen
                </h2>
              </div>
              <transition name="fade">
                <ul v-if="isOpen" class="space-y-1">
                  <li
                    v-for="category in categories"
                    :key="category.id"
                    @click="toggleCategory(category)"
                    class="flex items-center cursor-pointer space-x-2 bg-gray-900 rounded py-3 px-2 text-gray-100"
                  >
                    <font-awesome-icon
                      v-if="isCategorySelected(category.id)"
                      :icon="['fad', 'check-square']"
                      class="text-2xl text-brand"
                      fixed-width
                    ></font-awesome-icon>
                    <font-awesome-icon
                      v-else
                      :icon="['fad', 'square']"
                      class="text-2xl text-gray-100"
                      fixed-width
                    ></font-awesome-icon>
                    <span v-text="category.name"></span>
                  </li>
                </ul>
              </transition>
            </div>
          </toggle>
          <toggle>
            <div slot-scope="{ isOpen, toggle }" class="space-y-4">
              <div
                @click="toggle()"
                class="flex items-center cursor-pointer space-x-2"
              >
                <font-awesome-icon
                  v-if="!isOpen"
                  :icon="['fad', 'plus-square']"
                  class="text-gray-100 text-xl"
                  fixed-width
                ></font-awesome-icon>
                <font-awesome-icon
                  v-else
                  :icon="['fad', 'minus-square']"
                  class="text-gray-100 text-xl"
                  fixed-width
                ></font-awesome-icon>
                <h2 class="font-brand text-white text-2xl select-none">
                  Kofferraum
                </h2>
              </div>
              <transition name="fade">
                <div v-if="isOpen" class="space-y-2">
                  <div class="flex items-center">
                    <p class="w-20 text-gray-200 font-brand text-lg px-6">
                      von
                    </p>
                    <div class="flex flex-1 items-stretch">
                      <input
                        class="flex-1 text-right bg-gray-900 rounded-l-lg px-4 py-2 text-lg text-white outline-none border border-gray-900 focus:border-gray-800"
                        type="number"
                        v-model="filters.minTrunk"
                        placeholder="0"
                      />
                      <div
                        class="bg-gray-900 rounded-r-lg text-gray-100 flex flex-col justify-center px-2"
                      >
                        kg
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <p
                      class="w-20 text-gray-200 font-brand text-lg px-6 font-serif"
                    >
                      bis
                    </p>
                    <div class="flex flex-1 items-stretch">
                      <input
                        class="flex-1 text-right bg-gray-900 rounded-l-lg px-4 py-2 text-lg text-white outline-none border border-gray-900 focus:border-gray-800"
                        type="number"
                        v-model="filters.maxTrunk"
                        placeholder="9999"
                      />
                      <div
                        class="bg-gray-900 rounded-r-lg text-gray-100 flex flex-col justify-center px-2"
                      >
                        kg
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </toggle>
          <toggle>
            <div slot-scope="{ isOpen, toggle }" class="space-y-4">
              <div
                @click="toggle()"
                class="flex items-center cursor-pointer space-x-2"
              >
                <font-awesome-icon
                  v-if="!isOpen"
                  :icon="['fad', 'plus-square']"
                  class="text-gray-100 text-xl"
                  fixed-width
                ></font-awesome-icon>
                <font-awesome-icon
                  v-else
                  :icon="['fad', 'minus-square']"
                  class="text-gray-100 text-xl"
                  fixed-width
                ></font-awesome-icon>
                <h2 class="font-brand text-white text-2xl select-none">
                  Endgeschwindigkeit
                </h2>
              </div>
              <transition name="fade">
                <div v-if="isOpen" class="space-y-2">
                  <div class="flex items-center">
                    <p class="w-20 text-gray-200 font-brand text-lg px-6">
                      von
                    </p>
                    <div class="flex flex-1 items-stretch">
                      <input
                        class="flex-1 text-right bg-gray-900 rounded-l-lg px-4 py-2 text-lg text-white outline-none border border-gray-900 focus:border-gray-800"
                        type="number"
                        v-model="filters.minSpeed"
                        placeholder="0"
                      />
                      <div
                        class="bg-gray-900 rounded-r-lg text-gray-100 flex flex-col justify-center px-2"
                      >
                        km/h
                      </div>
                    </div>
                  </div>
                  <div class="flex items-center">
                    <p
                      class="w-20 text-gray-200 font-brand text-lg px-6 font-serif"
                    >
                      bis
                    </p>
                    <div class="flex flex-1 items-stretch">
                      <input
                        class="flex-1 text-right bg-gray-900 rounded-l-lg px-4 py-2 text-lg text-white outline-none border border-gray-900 focus:border-gray-800"
                        type="number"
                        v-model="filters.maxSpeed"
                        placeholder="9999"
                      />
                      <div
                        class="bg-gray-900 rounded-r-lg text-gray-100 flex flex-col justify-center px-2"
                      >
                        km/h
                      </div>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </toggle>
          <toggle :default-open="true">
            <div slot-scope="{ isOpen, toggle }" class="space-y-4">
              <div
                @click="toggle()"
                class="flex items-center cursor-pointer space-x-2"
              >
                <font-awesome-icon
                  v-if="!isOpen"
                  :icon="['fad', 'plus-square']"
                  class="text-gray-100 text-xl"
                  fixed-width
                ></font-awesome-icon>
                <font-awesome-icon
                  v-else
                  :icon="['fad', 'minus-square']"
                  class="text-gray-100 text-xl"
                  fixed-width
                ></font-awesome-icon>
                <h2 class="font-brand text-white text-2xl select-none">
                  Tarifinformationen
                </h2>
              </div>
              <transition name="fade">
                <div v-if="isOpen" class="space-y-6 pl-2">
                  <div
                    v-for="tariff in tariffs"
                    :key="tariff.id"
                    class="space-y-2"
                  >
                    <h3
                      class="font-brand text-brand text-lg"
                      v-text="tariff.name"
                    ></h3>
                    <p
                      class="text-gray-200 leading-relaxed"
                      v-text="tariff.description"
                    ></p>
                  </div>
                </div>
              </transition>
            </div>
          </toggle>
        </div>
      </div>
    </div>

    <div
      class="w-full bg-gray-950 rounded-lg px-4 py-2 text-gray-400 mt-8 text-justify"
    >
      * Die Bedingungen für die einzelnen Tarife entnimmst du bitte deinem
      persönlichen Mietvertrag, den du vor Mietabschluss von uns erhältst. Bei
      Fragen zu unseren Bedingungen, melde dich einfach telefonisch oder per SMS
      bei uns.
    </div>
  </div>
</template>

<script>
import Vehicle from "@/views/vehicles/Vehicle";
import Toggle from "@/components/Toggle";

export default {
  components: { Vehicle, Toggle },
  created() {
    this.load();
  },
  data() {
    return {
      isLoading: true,
      hasError: false,
      selectedCategories: [],
      categories: [],
      vehicles: [],
      tariffs: [],
      filters: {
        name: null,
        available: false,
        unavailable: false
      }
    };
  },
  watch: {
    filterAvailable(newValue) {
      if (newValue) {
        this.filters.unavailable = false;
      }
    },
    filterUnavailable(newValue) {
      if (newValue) {
        this.filters.available = false;
      }
    }
  },
  computed: {
    filteredVehicles() {
      let vehicles = this.vehicles;

      if (this.selectedCategories.length > 0) {
        vehicles = vehicles.filter(vehicle =>
          this.selectedCategories.includes(vehicle.model.vehicle_category_id)
        );
      }

      if (this.filterAvailable) {
        vehicles = vehicles.filter(vehicle => !vehicle.tenant_id);
      }

      if (this.filterUnavailable) {
        vehicles = vehicles.filter(vehicle => vehicle.tenant_id);
      }

      if (this.filters.name) {
        vehicles = vehicles.filter(vehicle => {
          let vehicleName = `${vehicle.model.manufacturer} ${vehicle.model.model}`;

          return vehicleName.match(new RegExp(this.filters.name, "i"));
        });
      }

      if (this.filters.minTrunk) {
        vehicles = vehicles.filter(
          vehicle => vehicle.model.trunk >= this.filters.minTrunk
        );
      }

      if (this.filters.maxTrunk) {
        vehicles = vehicles.filter(
          vehicle => vehicle.model.trunk <= this.filters.maxTrunk
        );
      }

      if (this.filters.minSpeed) {
        vehicles = vehicles.filter(
          vehicle => vehicle.max_speed >= this.filters.minSpeed
        );
      }

      if (this.filters.maxSpeed) {
        vehicles = vehicles.filter(
          vehicle => vehicle.max_speed <= this.filters.maxSpeed
        );
      }

      return vehicles;
    },
    filterAvailable() {
      return this.filters.available;
    },
    filterUnavailable() {
      return this.filters.unavailable;
    }
  },
  methods: {
    toggleCategory(category) {
      if (!this.selectedCategories.includes(category.id)) {
        this.selectedCategories.push(category.id);

        return;
      }

      let index = this.selectedCategories.findIndex(
        categoryId => categoryId === category.id
      );

      this.selectedCategories.splice(index, 1);
    },
    isCategorySelected(categoryId) {
      return this.selectedCategories.includes(categoryId);
    },
    load() {
      this.isLoading = true;

      this.$http
        .get("vehicles")
        .then(({ data }) => {
          this.categories = data.categories;
          this.vehicles = data.vehicles;
          this.tariffs = data.tariffs;

          this.isLoading = false;
          this.hasError = false;
        })
        .catch(() => {
          this.isLoading = false;
          this.hasError = true;
        });
    }
  }
};
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.list-move {
  transition: transform 0.3s;
}
</style>
