<template>
  <default-layout>
    <router-view v-slot="{ Component }">
      <transition name="fade-in-left" mode="out-in" appear>
        <keep-alive>
          <component :is="Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </default-layout>
</template>

<script>
import DefaultLayout from "@/views/layouts/DefaultLayout";

export default {
  name: "App",
  created() {
    this.$store.dispatch("rooms/get");
  },
  components: {
    DefaultLayout
  }
};
</script>

<style>
@keyframes fadeInLeft {
  from {
    transform: translate3d(-40px, 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}

.fade-in-left-leave-to {
  opacity: 0;
  transition: opacity 0.3s;
}

.fade-in-left-enter {
  opacity: 0;
  transform: translate3d(-40px, 0, 0);
}

.fade-in-left-enter-to {
  opacity: 0;
  animation-duration: 0.7s;
  animation-fill-mode: both;
  animation-name: fadeInLeft;
}
</style>
