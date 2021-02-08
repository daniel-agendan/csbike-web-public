<template>
  <div class="bg-white dark:bg-gray-900 shadow-md rounded-md overflow-hidden">
    <div class="bg-gray-50 dark:bg-gray-800 border-b border-gray-100 flex items-baseline justify-between py-4 px-6 dark:border-gray-800">
      <h2 class="font-semibold text-lg">Taggad av</h2>
      <a href="#"> Uppdatera</a>
    </div>
    <div v-if="$fetchState.pending">
      <BlockSpinner text="hämtar omnämningar" classes="text-green-400" />
    </div>
    <div v-else-if="$fetchState.error">Error while fetching posts</div>
    <div v-else-if="tags.data.length" class="divide-gray-300 divide-gray-50 divide-opacity-50 divide-y px-4 dark:divide-gray-800 dark:text-gray-100">
      <div class="flex items-center justify-between py-3">
        <div class="flex flex-1 items-center space-x-4">
          <a href="profile.html">
            <img
              src=""
              class="bg-gray-200 rounded-full w-10 h-10"
            >
          </a>
          <div class="flex flex-col">
            <span class="block capitalize font-semibold"> Johnson smith </span>
            <span class="block capitalize text-sm"> Australia </span>
          </div>
        </div>
        <a
          href="#"
          class="border border-gray-200 font-semibold px-4 py-1 rounded-full hover:bg-pink-600 hover:text-white hover:border-pink-600 dark:border-gray-800"
        > Follow </a>
      </div>
    </div>
    <div v-else class="px-4 py-8 text-center font-bold">
        Tagga mig, använd #CsBike.Se
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tags: []
    };
  },
  async fetch () {
    this.tags = await fetch(`${this.$config.facebookBaseApi}/${this.$config.facebookVersionApi}/${this.$config.igid}/tags?access_token=${this.$config.facebookTokenApi}`)
      .then((response) => response.json())
    console.log('card-tags', this.tags)
  },
  computed: {
    filterTags: function () {
      if (!this.tags.hasOwnProperty('data')) return this.tags

      return this.tags.data.filter(tag => {
        return tag.hasOwnProperty('name')
      })
    }
  }
}
</script>

<style>
</style>