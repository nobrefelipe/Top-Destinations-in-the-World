export default  {

  name: 'main-content',

  computed: {

    current_location(){

      return this.$store.state.current_location;

    },

    current_location_content(){

      return this.$store.state.destinations[this.current_location];

    },

  }
}

