<template>
  <div v-if="!closedByUser && !isLoading">
    <div v-if="roomsAreAvailable" class="w-full bg-brand py-2 px-2">
      <div class="container mx-auto">
        <div class="flex flex-wrap sm:flex-nowrap justify-between text-center">
          <span
            class="w-full sm:w-auto font-brand text-lg text-center sm:text-left"
            >Gute Nachrichten: Wir haben noch freie Zimmer!</span
          >
          <a
            class="w-full sm:w-auto text-center sm:text-left"
            href="#"
            @click.prevent="$store.dispatch('rooms/close')"
            >Schließen</a
          >
        </div>
      </div>
    </div>

    <div
      v-else-if="!roomsAreAvailable && !isLoading && !hadError"
      class="w-full bg-red-600 text-white py-2 px-2"
    >
      <div class="container mx-auto">
        <div class="flex flex-wrap sm:flex-nowrap justify-between text-center">
          <span
            class="w-full sm:w-auto font-brand-hotel text-lg text-center sm:text-left"
            >Aktuell sind wir leider ausgebucht. Schau doch einfach regelmäßig
            vorbei.</span
          >
          <a
            class="w-full sm:w-auto text-center sm:text-left"
            href="#"
            @click.prevent="$store.dispatch('rooms/close')"
            >Schließen</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    closedByUser() {
      return !this.$store.getters["rooms/isVisible"];
    },
    roomsAreAvailable() {
      return this.$store.getters["rooms/hasRoomsAvailable"];
    },
    hadError() {
      return this.$store.getters["rooms/getHasError"];
    },
    isLoading() {
      return this.$store.getters["rooms/getIsLoading"];
    }
  }
};
</script>
