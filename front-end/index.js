var app = new Vue({
  el: '#app',
  data: {
    input: {
      math: '',
      ipa: '',
      ind: '',
      ing: ''
    }
  },
  methods: {
    analysis() {
      axios.post('http://localhost:4010/', self.input)
      .then((value) => {
        console.log(value);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  }

});
