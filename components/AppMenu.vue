<template>
  <nav class="flex justify-center space-x-4 pt-8">
    <NuxtLink
      class="py-2 block border-b-2 border-transparent
						focus:outline-none font-medium capitalize text-center
						focus:text-green-500 focus:border-green-500
						dark-focus:text-green-200 dark-focus:border-green-200
						transition duration-500 ease-in-out"
      to="/"
    >
      flöde
    </NuxtLink>
    <NuxtLink
      class="ml-6 py-2 block border-b-2 border-transparent
						focus:outline-none font-medium capitalize text-center
						focus:text-green-500 focus:border-green-500
						dark-focus:text-green-200 dark-focus:border-green-200
						transition duration-500 ease-in-out"
      to="/rebike"
    >
      Cykelåtervinning
    </NuxtLink>
    <NuxtLink
      class="ml-6 py-2 block border-b-2 border-transparent
						focus:outline-none font-medium capitalize text-center
						focus:text-green-500 focus:border-green-500
						dark-focus:text-green-200 dark-focus:border-green-200
						transition duration-500 ease-in-out"
      to="/team"
    >
      mitt team
    </NuxtLink>
    <NuxtLink
      class="ml-6 py-2 block border-b-2 border-transparent
						focus:outline-none font-medium capitalize text-center
						focus:text-green-500 focus:border-green-500
						dark-focus:text-green-200 dark-focus:border-green-200
						transition duration-500 ease-in-out"
      to="/hello"
    >
      kontakt
    </NuxtLink>

  </nav>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
a.nuxt-link-active

a.nuxt-link-exact-active
  @apply text-green-500 border-green-500
</style>
