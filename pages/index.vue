<template>
  <main>
    <div class="">

      <h1 class="lg:text-2xl text-lg font-bold leading-none text-gray-900 tracking-tight mb-5">
        Flöde
      </h1>

      <div class="lg:flex justify-center lg:space-x-10 lg:space-y-0 space-y-5">

        <!-- left sidebar-->
        <div class="space-y-5 flex-shrink-0 lg:w-7/12">
          <CardPost
            v-for="post in posts"
            :key="post.key"
            :card="post"
          />
        </div>

        <!-- right sidebar-->
        <div class="lg:w-5/12">
          <div>
            <CardTags />
          </div>

          <div
            class="mt-5 uk-sticky"
            uk-sticky="offset:28; bottom:true ; media @m"
          >
            <CardTrek />
            <!-- card-feed goes here -->
          </div>
          <div
            class="uk-sticky-placeholder"
            hidden=""
            style="height: 381px; margin: 20px 0px 0px;"
          ></div>

        </div>

      </div>

    </div>
    <div>
      <div
        v-for="post in posts"
        :key="post.key"
      >
        {{ post.id }}
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data () {
    return {
      tags: [],
      sjozet25: [],
      posts: []
    };
  },
  async fetch () {
    const posts = await fetch(`${this.$config.facebookBaseApi}/${this.$config.facebookVersionApi}/${this.$config.igid}/media?access_token=${this.$config.facebookTokenApi}`)
      .then((response) => response.json())

    const sjozet25 = await fetch(`${this.$config.facebookBaseApi}/${this.$config.facebookVersionApi}/${this.$config.igid}?fields=business_discovery.username(sjozet25){followers_count,media_count,media{media_url,comments_count,like_count}}&access_token=${this.$config.facebookTokenApi}`)
      .then((response) => response.json())

    posts.data.forEach((value) => {
      this.getPost(value.id)
    })

    this.sjozet25 = sjozet25
    console.log('sjozet25', this.sjozet25)

    const tags = await fetch(`${this.$config.facebookBaseApi}/${this.$config.facebookVersionApi}/${this.$config.igid}/tags?access_token=${this.$config.facebookTokenApi}`)
      .then((response) => response.json())

      this.tags = tags
  },
  methods: {
    async getPost (postid) {
      const post = await fetch(`${this.$config.facebookBaseApi}/${this.$config.facebookVersionApi}/${postid}?fields=id,media_type,media_url,owner,timestamp,caption&access_token=${this.$config.facebookTokenApi}`)
        .then((response) => response.json())
      this.posts.push(post)
      console.log('posts', this.posts)
    },
    async getPostSjozet25 (postid) {
      const post = await fetch(`${this.$config.facebookBaseApi}/${this.$config.facebookVersionApi}/${postid}?fields=media_url,owner,timestamp&access_token=${this.$config.facebookTokenApi}`)
        .then((response) => response.json())
      this.sjozet25.push(post)
      console.log('sjozet25', this.posts)
    }
  }
}
</script>

<style></style>
