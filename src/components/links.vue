<template lang="html">

  <section class="links">

    <transition-group name="fade">

      <a v-for="(item, index) in location_links" :href="item.link" :title="item.label" :key="index" target="_blank"  v-if="!$store.state.loading">{{ item.label }}</a>

    </transition-group>

  </section>

</template>

<script>

  export default  {

    name: 'links',

    methods: {

    },

    computed: {

      current_location(){

        return this.$store.state.current_location;

      },

      location_links(){

        return this.$store.state.destinations[this.current_location].links;

      },

    }
}
</script>

<style scoped lang="scss">

  .links {

    position: relative;

    float: left;

    width: calc( 100% - 10px);

    padding: 20px 10px;

    margin-bottom: 20px;

    white-space: nowrap;

    overflow-x: auto;

    a{

      display: inline;

      margin-right: 10px;

      padding: 10px 20px 12px;

      background: rgb(211,224,252);

      color: #333;

      font-size: 20px;

      text-decoration: none;

      transition: all .3s ease;

      &:hover{

        background: rgb(190,184,220);

      }

    }


    @media all and (max-width: 724px){

      width: 100%;

      a{

        font-size: 15px;

      }

    }



    .fade-enter {
      opacity: 0;
    }

    .fade-leave-active {
      opacity: 0;
    }


    /* width */
    &::-webkit-scrollbar {
      height: 2px;
      border-radius: 5px;

    }

    /* Handle */
    &::-webkit-scrollbar-thumb {
      background: #fff;
    }

    &::-webkit-scrollbar-track{
      background: #ccc;
    }


  }

</style>
