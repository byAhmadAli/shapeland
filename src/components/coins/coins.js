import axios from 'axios'

export default {
  name: 'Coins',

  data () {
    return {
      coin: {}
    }
  },

  created () {
    this.fetchData()
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData () {
      axios.get('https://api.coinmarketcap.com/v1/ticker/' + this.$route.params.id + '/')
        .then((resp) => {
          this.coin = resp.data[0]
          console.log(resp)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}