export default {
  head: {
    title: 'CsBike.Se',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Jag erbjuder en tjänst där jag återbrukar cyklar som normalt kanske hamnat på skroten, jag hämtar upp bortglömda eller trasiga cyklar för att renovera upp dom och hitta nya ägare till ett schysst pris! Plats: Kristianstad ',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  publicRuntimeConfig: {
    facebookBaseApi: 'https://graph.facebook.com',
    facebookVersionApi: 'v9.0',
    facebookTokenApi: process.env.FACEBOOK_PERMANENT_TOKEN || '',
    igid: '17841445682056786'
  },
  privateRuntimeConfig: {
    facebookApiSecret: process.env.FACEBOOK_API_SECRET
  },
  components: true,
  plugins: [{ src: '~/plugins/vue-fb-customer-chat.js', ssr: false }],
  buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/fontawesome'],
  fontawesome: {
    icons: {
      solid: ['faHome', 'faHeart', 'faSpinner', 'faDotCircle', 'faEllipsisH', 'faFan'],
      regular: ['faDotCircle', 'faSun', 'faSnowflake'],
      brands: ['faInstagram']
    }
  }
};
