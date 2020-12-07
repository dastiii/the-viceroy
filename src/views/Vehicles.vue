<template>
  <div class="mt-8 mb-8 md:mt-20">
    <h3 class="text-white text-3xl font-brand -mb-1 pl-4 text-brand">
      Fahrzeugvermietung
    </h3>

    <div class="w-full flex flex-wrap lg:flex-no-wrap items-stretch bg-gray-950">
      <div class="w-full lg:w-2/3 py-8">
        <div class="grid grid-cols-1 gap-x-4 gap-y-12 mx-4">
          <vehicle></vehicle>
          <vehicle></vehicle>
          <vehicle></vehicle>
          <vehicle></vehicle>
          <vehicle></vehicle>
          <vehicle></vehicle>
        </div>
      </div>
      <div class="w-full lg:w-1/3">
        <div class="px-3 pt-4 pb-8 space-y-6">
          <div class="space-y-4">
            <h2 class="font-brand text-white text-2xl">Klassen</h2>
            <ul class="space-y-1">
              <li
                v-for="category in categories"
                :key="category.id"
                @click="toggleCategory(category)"
                class="flex items-center cursor-pointer space-x-2 bg-gray-900 rounded py-2 px-2 text-gray-100"
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
          </div>
          <div class="space-y-4">
            <h2 class="font-brand text-white text-2xl">Verfügbarkeit</h2>
            <div>
              <ul>
                <li
                  class="flex items-center cursor-pointer space-x-2 bg-gray-900 rounded py-2 px-2 text-gray-100"
                >
                  <font-awesome-icon
                    :icon="['fad', 'square']"
                    class="text-2xl text-gray-100"
                    fixed-width
                  ></font-awesome-icon>
                  <span>Sofort verfügbar</span>
                </li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vehicle from "@/views/vehicles/Vehicle";
export default {
  components: {Vehicle},
  data() {
    return {
      selectedCategories: [],
      categories: [
        { name: "Supersportwagen", id: 1 },
        { name: "Sportwagen", id: 2 },
        { name: "Nutzfahrzeuge", id: 3 },
        { name: "Geländefahrzeuge", id: 4 },
        { name: "Kompaktwagen", id: 5 },
        { name: "SUVs", id: 6 },
        { name: "Limousinen", id: 7 }
      ],
      filters: {
        name: null,
        status: "available"
      }
    };
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
    }
  }
};
</script>
