<template>
  <nav
    class="text-xl font-brand text-white"
    :class="{
      'w-full flex-grow lg:flex-1 flex-col lg:flex-row lg:flex lg:items-center lg:justify-end lg:space-x-3': !small,
      'flex-1 flex items-center justify-end space-x-3': small,
      block: isOpen && !small,
      'hidden lg:block': !isOpen && !small
    }"
  >
    <router-link
      :id="small ? '' : 'site-header'"
      :to="{ name: 'home' }"
      class="whitespace-nowrap hover:bg-brand hover:text-black"
      :class="{
        'my-2 lg:my-0 block py-2 px-3': !small,
        'px-2 py-1': small
      }"
      active-class="bg-brand text-black"
      exact
      >Home</router-link
    >

    <router-link
      :to="{ name: 'benefits' }"
      class="whitespace-nowrap hover:bg-brand hover:text-black"
      :class="{
        'my-2 lg:my-0 block py-2 px-3': !small,
        'px-2 py-1': small
      }"
      active-class="bg-brand text-black"
      exact
      >Deine Vorteile</router-link
    >

    <router-link
      :to="{ name: 'vehicles' }"
      class="whitespace-nowrap hover:bg-brand hover:text-black"
      :class="{
        'my-2 lg:my-0 block py-2 px-3': !small,
        'px-2 py-1': small
      }"
      active-class="bg-brand text-black"
      exact
      >Fahrzeugvermietung</router-link
    >

    <router-link
      :to="{ name: 'mealplan' }"
      class="whitespace-nowrap hover:bg-brand hover:text-black"
      :class="{
        'my-2 lg:my-0 block py-2 px-3': !small,
        'px-2 py-1': small
      }"
      active-class="bg-brand text-black"
      >Verpflegung</router-link
    >
  </nav>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      required: false,
      default: false
    },

    isOpen: {
      type: Boolean,
      required: true
    }
  }
};
</script>
