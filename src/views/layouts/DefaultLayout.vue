<template>
  <div id="app">
    <div class="page-background min-h-screen flex flex-col">
      <visible when-hidden="#site-header">
        <header
          class="bg-opacity-75 bg-gray-950 hidden lg:block z-20 shadow-md fixed top-0 left-0 w-full"
        >
          <div class="container mx-auto py-1">
            <div class="flex flex-col lg:flex-row">
              <h1 class="text-brand font-brand text-4xl">
                THE VICEROY
                <span class="hidden sm:inline text-xl text-white"
                  >Hotels & Resorts</span
                >
              </h1>

              <Nav :small="true" :is-open="isNavOpen"></Nav>
            </div>
          </div>
        </header>
      </visible>

      <room-information></room-information>

      <header :class="{ 'bg-gray-950 lg:bg-transparent bg-opacity-80': isNavOpen }">
        <div class="pt-4">
          <div class="container mx-auto flex flex-wrap px-4 lg:px-0">
            <h1 class="text-4xl font-brand text-brand flex-grow lg:flex-grow-0">
              THE VICEROY
              <span class="hidden sm:inline text-xl text-white"
                >Hotels & Resorts</span
              >
            </h1>

            <div class="block lg:hidden self-center">
              <button
                @click.prevent="$store.dispatch('layout/toggleNav')"
                class="flex items-center px-3 py-2 border rounded text-brand border-brand hover:text-white hover:border-white"
              >
                <svg
                  class="fill-current h-3 w-3"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
            </div>

            <Nav :is-open="isNavOpen"></Nav>
          </div>
        </div>
      </header>

      <main class="flex-1 container mx-auto">
        <slot></slot>
      </main>

      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "./defaultLayout/Footer";
import Nav from "./defaultLayout/Nav";
import RoomInformation from "@/views/layouts/defaultLayout/RoomInformation";

export default {
  components: {
    RoomInformation,
    Visible: () => import("@/components/Visible"),
    Footer,
    Nav
  },

  computed: {
    isNavOpen() {
      return this.$store.getters["layout/isNavOpen"];
    }
  }
};
</script>

<style lang="scss"></style>
