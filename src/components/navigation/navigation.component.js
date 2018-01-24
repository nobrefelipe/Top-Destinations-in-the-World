
export default  {

  name: 'navigation',

  filters: {

    trim : function (value) {

      value = value.split(" ").join("-").toLowerCase();

      return value;
    }

  },

  watch: {

    current_location: function (val) {



    }

  },

  computed: {


    current_location(){

      return this.$store.state.current_location;

    },

    cities(){

      return this.$store.state.destinations;

    }

  },


  methods: {

    /*
      Event Delegation so I dont attach click events to each link
    */
    getLocation(e){

      let links = document.querySelectorAll('.nav-links');

      // remove active class
      links.forEach( e => {

        e.classList.remove('active');

      });


      if (e.target && e.target.matches("a")) {

        // add active class
        e.target.classList.add('active');

        // update the selected location
        this.$store.commit('UPDATE_CURRENT_LOCATION', e.target.dataset.destination);

      }

    }

  }

}

