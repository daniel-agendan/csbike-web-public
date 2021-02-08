<template>
  <div
    id="wrapper"
    class="flex min-h-screen sm:p-3.5 bg-gradient-to-tr from-blue-600 to-green-600"
  >
    <div class="bg-gray-100 px-3 md:px-20 lg:px-60 rounded-md">
      <header class="container mx-auto w-full">
        <AppHeader />
      </header>
      <AppMenu />
      <Nuxt class="container mx-auto w-full" keep-alive />
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>
</style>
