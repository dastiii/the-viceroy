<template>
  <div class="mt-8 md:mt-20">
    <h3 class="text-white text-3xl font-brand -mb-1 pl-4 text-brand">
      Verpflegung<span class="text-gray-500">*&nbsp;</span>
      <span class="font-brand text-brand">by GioV</span>
    </h3>

    <div class="bg-gray-950 py-4 px-8 rounded-lg mb-8">
      <div class="flex flex-wrap mt-4">
        <div class="w-full md:w-1/3 text-center md:text-left">
          <router-link
            :to="{
              name: 'mealplan.forWeek',
              params: { week: 'last-week' }
            }"
            href="#"
            class="block text-white text-xl font-brand border-b-4 border-gray-900 hover:border-brand hover:text-brand py-3 px-4"
            active-class="border-brand text-brand"
            >Vergangene Woche</router-link
          >
        </div>
        <div class="w-full md:w-1/3 text-center">
          <router-link
            :to="{
              name: 'mealplan.forWeek',
              params: { week: 'this-week' }
            }"
            href="#"
            class="block text-white text-xl font-brand border-b-4 border-gray-900 hover:border-brand hover:text-brand py-3 px-4"
            active-class="border-brand text-brand"
            >Diese Woche</router-link
          >
        </div>
        <div class="w-full md:w-1/3 text-center md:text-right">
          <router-link
            :to="{
              name: 'mealplan.forWeek',
              params: { week: 'next-week' }
            }"
            href="#"
            class="block text-white text-xl font-brand border-b-4 border-gray-900 hover:border-brand hover:text-brand py-3 px-4"
            active-class="border-brand text-brand"
            >Nächste Woche</router-link
          >
        </div>
      </div>

      <router-view></router-view>
    </div>

    <div class="bg-gray-950 bg-opacity-50 rounded-lg px-4 py-1">
      <h2 class="text-gray-500 text-xs md:text-base py-4 text-justify">
        <span>*</span>Die Abholung ist aus logistischen Gründen täglich nur
        zwischen <strong class="text-brand">19 und 22 Uhr</strong> möglich. Es
        kann leider kein Ersatz geliefert werden, falls du die Abholung nicht
        rechtzeitig bewerkstelligen kannst. Solltest du erst nach
        <strong class="text-brand">18 Uhr</strong> eingezogen sein, erhältest du
        deine erste Verpflegung <strong class="text-brand">am Folgetag</strong>.
        Bei Auszug aus unserem Hotel erlischt dein Anrecht auf die Verpflegung
        sofort ersatzlos. Die Ausgabe erfolgt ausschließlich am
        <strong class="text-brand">GioV Restaurant</strong>. Weitere
        Informationen zum Standort des Restaurants findest du im FireVox unter
        GioV oder auf Social. Solltest du Fragen zu den genannten Bedingungen
        haben, melde dich einfach telefonisch unter der 1822-76770759 bei uns.
      </h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>
