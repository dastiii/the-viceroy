<template>
  <div class="mt-8 mb-8 md:mt-20">
    <h3 class="text-white text-3xl font-brand -mb-1 pl-4 text-brand">
      Deine Vorteile auf einen Blick
    </h3>

    <div class="bg-gray-950 py-4 px-8 rounded-lg bg-opacity-75">
      <ul class="text-white text-2xl font-brand-hotel mt-4 ml-8 list-disc space-y-6">
        <li>
          <strong class="text-brand">Tägliche Verpflegung</strong> mit
          wechselnder Wochenkarte von
          <strong class="font-brand text-brand">GioV</strong>
          <ul class="text-xl ml-8 list-disc space-y-2">
            <li>
              die Wochenkarte und Bedingungen findest du
              <router-link
                class="text-brand hover:underline"
                :to="{ name: 'mealplan' }"
                active-class="underline"
                >hier</router-link
              >.
            </li>
          </ul>
        </li>
        <li>
          <strong class="text-brand">Beste Lage</strong> in der Westside
          <ul class="text-xl ml-8 list-disc space-y-2">
            <li>nur 100m Fußweg zur öffentlichen Garage</li>
            <li>
              ATM, 24/7 und Tankstelle in unmittelbarer Umgebung
            </li>
            <li>
              Friseur und Tattoostudio einen Katzensprung entfernt
            </li>
          </ul>
        </li>
        <li>
          <strong class="text-brand">Großzügiges Grundstück</strong> mit vielen
          vielen Parkplätzen, einer Sonnenterrasse und genügend Platz für Events
        </li>
        <li>
          Auf Wunsch: <strong class="text-brand">Fahrzeug inklusive</strong>.
          Erhalte zu deinem Zimmer direkt ein passendes Fahrzeug. Der fällige
          Betrag wird dir ganz bequem von deinem Konto abgezogen.
        </li>
      </ul>

      <vue-load-image class="py-8 -mx-8">
        <div
          slot="preloader"
          class="w-full lg:max-w-xl lg:mx-auto bg-gray-900 bg-opacity-50 flex flex-col text-center justify-around"
        >
          <font-awesome-icon
            class="mx-auto text-4xl text-gray-400"
            :icon="['fad', 'spinner-third']"
            spin
          ></font-awesome-icon>
        </div>
        <img
          slot="image"
          class="w-full lg:max-w-7xl object-contain sm:object-cover sm:object-center mx-auto rounded-none lg:rounded-lg"
          src="@/assets/map.jpg"
          alt="Standort und Umgebung des Hotels"
        />
      </vue-load-image>

      <h2 class="text-center leading-relaxed font-brand text-4xl text-white">
        All' diese Vorteile erhältst du ab
        <strong class="text-brand">nur $30 pro Stunde!</strong>
      </h2>
      <h2 class="text-center leading-relaxed font-brand text-4xl text-white">
        <strong class="text-brand">Worauf wartest du?</strong> Sicher dir noch
        noch heute dein Zimmer.
      </h2>
    </div>
  </div>
</template>

<script>
import VueLoadImage from "vue-load-image";

export default {
  components: {
    VueLoadImage
  }
};
</script>

<style lang="scss" scoped></style>
