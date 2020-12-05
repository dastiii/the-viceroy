<template>
  <div
    class="mt-8 w-full lg:w-1/2 opacity-50 hover:opacity-100"
    :class="{ 'opacity-100': isToday }"
  >
    <div
      class="mx-2 py-2 px-4 bg-gray-900 rounded-lg h-full relative"
      :class="{ 'border-brand-hotel': isToday }"
    >
      <span
        v-if="isToday"
        class="absolute tracking-wide uppercase font-medium top-0 right-0 block py-1 px-2 text-black bg-brand rounded-bl-lg rounded-tr-lg"
        >Heute</span
      >
      <span
        v-else
        class="absolute tracking-wide uppercase font-medium top-0 right-0 block py-1 px-2 text-gray-600 bg-gray-950 bg-opacity-50 rounded-bl-lg"
        v-text="isPast ? 'Abgelaufen' : 'Bald verfügbar'"
      ></span>

      <div class="flex justify-between items-center">
        <h1 class="text-2xl text-white font-brand text-brand">
          {{ dayForHumans }}
          <span class="text-white text-lg" v-text="`(${formattedDate})`"></span>
        </h1>
      </div>

      <div>
        <mealplan-product-list
          v-for="product in day.products"
          :key="product.id"
          :product="product"
        ></mealplan-product-list>
      </div>
    </div>
  </div>
</template>

<script>
import MealplanProductList from "@/views/mealplan/MealplanProductList";

export default {
  components: {
    MealplanProductList
  },

  props: {
    day: {
      required: true,
      type: Object
    }
  },

  created() {
    this.weekDays = [
      "Sonntag",
      "Montag",
      "Dienstag",
      "Mittwoch",
      "Donnerstag",
      "Freitag",
      "Samstag"
    ];

    this.date = new Date(this.day.date);
    this.today = new Date();
  },

  computed: {
    isPast() {
      if (this.isToday) {
        return false;
      }

      return this.today > this.date;
    },

    isFuture() {
      return (
        this.today.getFullYear() < this.date.getFullYear() ||
        this.today.getMonth() < this.date.getMonth() ||
        this.today.getDate() < this.date.getDate()
      );
    },

    isToday() {
      return (
        this.today.getFullYear() === this.date.getFullYear() &&
        this.today.getMonth() === this.date.getMonth() &&
        this.today.getDate() === this.date.getDate()
      );
    },

    dayForHumans() {
      return this.weekDays[this.date.getDay()];
    },

    formattedDate() {
      return this.date.toLocaleString("de-DE", {
        year: "numeric",
        month: "numeric",
        day: "numeric"
      });
    }
  }
};
</script>

<style scoped></style>
