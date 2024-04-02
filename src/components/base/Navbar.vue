<template>
  <nav
    ref="nav"
    class="z-50 w-full p-2 lg:px-10 lg:py-3 bg-primary-500 transform flex flex-row items-center fixed top-0 left-0 shadow-lg"
  >
    <div class="w-24 h-14">
      <img
        class="object-cover h-full w-full"
        src="@/assets/signature.png"
        alt=""
      />
    </div>
    <div class="mx-auto"></div>
    <ul class="hidden md:flex flex-row space-x-3">
      <li>
        <BaseButton href="#home">Home</BaseButton>
      </li>
      <li>
        <BaseButton href="#about">About</BaseButton>
      </li>
      <li>
        <BaseButton href="#project">Project</BaseButton>
      </li>
      <li>
        <BaseButton href="#design">Design</BaseButton>
      </li>
      <li>
        <BaseButton href="#contact">Contact</BaseButton>
      </li>
    </ul>
    <div
      class="inline-block md:hidden px-4 py-1 rounded-sm hover:bg-accent-1 hover:text-black transition-colors duration-200 cursor-pointer"
      @click="$emit('menuOn')"
    >
      Menu
    </div>
    <a
      href="https://drive.google.com/file/d/15ngi36ezIUfu654UwsTDpS3N7etZ76Bv/view?usp=sharing"
      class="ml-5"
    >
      <BaseButton class="border">Resume</BaseButton>
    </a>
  </nav>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  components: { BaseButton },
  created() {
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      if (scrollTop < lastScrollTop) {
        this.$refs.nav.style.transform = "translateY(0)";
      } else {
        this.$refs.nav.style.transform = "translateY(-100%)";
      }
      lastScrollTop = scrollTop;
    });
  },
};
</script>

<style scoped>
nav {
  transition: all 0.3s ease;
}
</style>
