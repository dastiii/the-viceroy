<template>
  <div class="mt-8 mb-8 md:mt-20">
    <h3 class="text-white text-3xl font-brand -mb-1 pl-4 text-brand">
      Fahrzeugvermietung
    </h3>

    <div class="w-full flex flex-wrap lg:flex-no-wrap items-stretch bg-gray-950 rounded-lg">
      <div class="w-full lg:w-2/3 py-8">
        <div class="grid grid-cols-1 gap-x-4 gap-y-12 mx-4">
          <vehicle></vehicle>
          <vehicle></vehicle>
          <vehicle></vehicle>
        </div>
      </div>
      <div class="w-full lg:w-1/3">
        <div class="px-3 pt-4 pb-8 space-y-6">
          <div class="space-y-4">
            <h2 class="font-brand text-white text-2xl">Verfügbarkeit</h2>
            <div>
              <ul class="space-y-1">
                <li
                  class="flex items-center cursor-pointer space-x-2 bg-gray-900 rounded py-3 px-2 text-gray-100"
                >
                  <font-awesome-icon
                    :icon="['fad', 'square']"
                    class="text-2xl text-gray-100"
                    fixed-width
                  ></font-awesome-icon>
                  <span>Sofort verfügbar</span>
                </li>
                <li class="flex items-center cursor-pointer space-x-2 bg-gray-900 rounded py-3 px-2 text-gray-100">
                  <font-awesome-icon
                    :icon="['fad', 'square']"
                    class="text-2xl text-gray-100"
                    fixed-width
                  ></font-awesome-icon>
                  <span>vermietet</span>
                </li>
              </ul>
            </div>
          </div>
          <div class="space-y-4">
            <h2 class="font-brand text-white text-2xl">Klassen</h2>
            <ul class="space-y-1">
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
          </div>
          <div class="space-y-6">
            <h2 class="font-brand text-white text-2xl">Tarifinformationen</h2>
            <div class="space-y-2">
              <h3 class="font-brand text-brand text-lg">Tagestarif</h3>
              <p class="text-gray-200 leading-relaxed">
                Beim Tagestarif zahlst du einen täglichen Preis für die Miete deines Fahrzeuges. Dieser ist i.d.R. höher als bei einer wöchentlichen Miete, bietet dir allerdings mehr Flexibiltät durch eine kürzere Laufzeit.
              </p>
            </div>
            <div class="space-y-2">
              <h3 class="font-brand text-brand text-lg">Wochentarif</h3>
              <p class="text-gray-200 leading-relaxed">
                Der Wochentarif spart dir im Vergleich zum Tagestarif durch die längere Mietdauer bares Geld. Im Schnitt sparst du dir 2-3 Tagesmieten pro Woche.
              </p>
            </div>
            <div class="space-y-2">
              <h3 class="font-brand text-brand text-lg">Kombitarif "sleep"</h3>
              <p class="text-gray-200 leading-relaxed">
                Der Kombivorteil "sleep" bietet dir zusätzlich zu deinem Fahrzeug eine Übernachtungsmöglichkeit in unserem Hotel. Deine Zimmer- und Mietgebühr wird ganz bequem von deinem Gehalts- oder Sozialhilfeeingang abgezogen.
              </p>
            </div>
            <div class="space-y-2">
              <h3 class="font-brand text-brand text-lg">Kombitarif "sleep'n'eat"</h3>
              <p class="text-gray-200 leading-relaxed">
                Alle Vorteile, die du auch beim Kombitarif "sleep" bekommst. Allerdings erhältst du zusätzlich zu deinem Zimmer und Fahrzeug die täglich wechselnde Verpflegung durch unser Partnerrestaurant GioV. Weitere Details findest du <router-link class="text-brand hover:underline" :to="{ name: 'mealplan' }">hier</router-link>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="w-full bg-gray-950 rounded-lg px-4 py-2 text-gray-400 mt-8 text-justify"
    >
      * Die Bedingungen für die einzelnen Tarife entnimmst du bitte deinem persönlichen Mietvertrag, den du vor Abschluss von uns erhältst. Bei Fragen zu unseren Bedingungen, melde dich einfach telefonisch oder per SMS bei uns.
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
        { name: "PKW", id: 5 },
        { name: "LKW", id: 6 },
        { name: "Sportwagen", id: 1 },
        { name: "Nutzfahrzeuge", id: 3 },
        { name: "Geländefahrzeuge", id: 4 },
        { name: "Motorräder", id: 7 },
        { name: "Fahrräder", id: 8 }
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
