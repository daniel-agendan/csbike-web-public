<template>
  <div
    id="card-trek"
    class="bg-white dark:bg-gray-900 shadow-md rounded-md overflow-hidden"
  >
    <div v-if="$fetchState.pending">
      <BlockSpinner text="hämtar taggen #trek" classes="text-pink-400" />
    </div>
    <div v-else-if="$fetchState.error">Error while fetching posts</div>
    <div
      v-else
      class="bg-gray-50 border-b border-gray-100 flex items-baseline justify-between py-4 px-6 dark:bg-gray-800 dark:border-gray-700"
    >
      <h2 class="font-semibold text-lg">#trek</h2>
    </div>

    <div class="grid grid-cols-2 gap-2 p-3 uk-link-reset">
      <div
        v-for="post in filterPosts.slice(0,6)"
        :key="post.key"
      >
        <div class="bg-green-500 max-w-full h-32 rounded-lg relative overflow-hidden uk-transition-toggle">
          <a
            href="#story-modal"
            uk-toggle=""
          >
            <img
              :src="post.media_url"
              class="w-full h-full absolute object-cover inset-0"
            >
          </a>
          <div class="flex flex-1 justify-around items-center absolute bottom-0 w-full p-2 text-white custom-overly1 uk-transition-slide-bottom-medium">
            <a href="#"> <i class="uil-heart"></i> 150 </a>
            <a href="#"> <i class="uil-heart"></i> 30 </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: []
    };
  },
  async fetch () {
    this.posts = await fetch(`${this.$config.facebookBaseApi}/${this.$config.facebookVersionApi}/17841563587100484/recent_media?user_id=${this.$config.igid}&fields=media_url&access_token=${this.$config.facebookTokenApi}`)
      .then((response) => response.json())
    console.log('card-trek', this.posts)
  },
  computed: {
    filterPosts: function () {
      if (!this.posts.hasOwnProperty('data')) return this.posts

      return this.posts.data.filter(post => {
        return post.hasOwnProperty('media_url')
      })
    }
  }
}
</script>

<style>
</style>