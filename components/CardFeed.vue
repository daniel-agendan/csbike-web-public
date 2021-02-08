<template>
  <div
    id="card-feed"
    class="bg-white dark:bg-gray-900 shadow-md rounded-md overflow-hidden"
  >
  <div>
      {{ feed }}
  </div>
    <div class="bg-gray-50 border-b border-gray-100 flex items-baseline justify-between py-4 px-6 dark:bg-gray-800 dark:border-gray-700">
      <h2 class="font-semibold text-lg">Latest</h2>
      <a href="explore.html"> See all</a>
    </div>
    <div class="grid grid-cols-2 gap-2 p-3 uk-link-reset">
      <div class="bg-green-500 max-w-full h-32 rounded-lg relative overflow-hidden uk-transition-toggle">
        <a
          href="#story-modal"
          uk-toggle=""
        >
          <img
            :src="feed.business_discovery.media.data[0].media_url"
            class="w-full h-full absolute object-cover inset-0"
          >
        </a>
        <div class="flex flex-1 justify-around items-center absolute bottom-0 w-full p-2 text-white custom-overly1 uk-transition-slide-bottom-medium">
          <a href="#"> <i class="uil-heart"></i> 150 </a>
          <a href="#"> <i class="uil-heart"></i> 30 </a>
        </div>
      </div>

      <div class="bg-red-500 max-w-full h-40 rounded-lg relative overflow-hidden uk-transition-toggle">
        <a
          href="#story-modal"
          uk-toggle=""
        >
          <img
            src="assets/images/post/img7.jpg"
            class="w-full h-full absolute object-cover inset-0"
          >
        </a>
        <div class="flex flex-1 justify-around items-center absolute bottom-0 w-full p-2 text-white custom-overly1 uk-transition-slide-bottom-medium">
          <a href="#"> <i class="uil-heart"></i> 150 </a>
          <a href="#"> <i class="uil-heart"></i> 30 </a>
        </div>
      </div>

      <div class="bg-red-500 max-w-full h-40 -mt-8 rounded-lg relative overflow-hidden uk-transition-toggle">
        <a
          href="#story-modal"
          uk-toggle=""
        >
          <img
            src="assets/images/post/img5.jpg"
            class="w-full h-full absolute object-cover inset-0"
          >
        </a>
        <div class="flex flex-1 justify-around  items-center absolute bottom-0 w-full p-2 text-white custom-overly1 uk-transition-slide-bottom-medium">
          <a href="#"> <i class="uil-heart"></i> 150 </a>
          <a href="#"> <i class="uil-heart"></i> 30 </a>
        </div>
      </div>

      <div class="bg-red-500 max-w-full h-32 rounded-lg relative overflow-hidden uk-transition-toggle">
        <a
          href="#story-modal"
          uk-toggle=""
        >
          <img
            src="assets/images/post/img3.jpg"
            class="w-full h-full absolute object-cover inset-0"
          >
        </a>
        <div class="flex flex-1 justify-around  items-center absolute bottom-0 w-full p-2 text-white custom-overly1 uk-transition-slide-bottom-medium">
          <a href="#"> <i class="uil-heart"></i> 150 </a>
          <a href="#"> <i class="uil-heart"></i> 30 </a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    feed: Object
  }
}
</script>

<style>
</style>