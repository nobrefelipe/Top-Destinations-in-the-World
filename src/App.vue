<template>

  <div id="app" :style="{'background-image': 'url(' + app_bg + ')' }">

    <main :style="{'background-color': app_color_skin }">

      <!-- MAIN CONTENT : place, country, body copy -->
      <main-content />

      <div id="info-box">

        <!-- PICTURES  -->
        <slideshow />

        <!-- LINKS -->
        <links />


        <!-- MORE -->

        <a href="#" class="view-more">view more</a>

      </div>

    </main>


    <!-- LOCATIONS NAVIGATION -->
    <navigation />

  </div>

</template>

<script>
  export default {

    name: 'app',

    computed: {

      current_location(){

        return this.$store.state.current_location;

      },

      app_color_skin(){

        return this.$store.state.destinations[this.current_location].main_color;

      },

      app_bg(){

        return `./src/assets/${this.current_location}/bg.jpg`;

      }

    }

  }
</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Lato:100,300');

  *{

    box-sizing: border-box;

  }

  body{

    margin: 0;

    padding: 0;

    font-family: Lato;

    font-weight: 300;

    p{
      font-weight: 100;

      margin-top: 0;
    }

  }

  #app{

    width: 100vw;

    min-height: 100vh;

    padding: 42px 30px;

    background-size: cover;

    background-position: center;

    background-repeat: no-repeat;

    transition: all .5s ease;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;


    //fix overlay issue
    & > *{
      position: relative;
      z-index: 100;
    }


    //overlay
    &:after{

      content: '';

      width: 100%;

      height: 100%;

      background: rgba(0,0,0,0.6);

      z-index: 10;

      position: absolute;

      left: 0;

      top: 0;

    }


    @media all and (max-width: 800px){

      padding: 20px 0;

      flex-direction: column-reverse;

      background-size: contain;

      background-position: top left;

    }


  }

  main{

    float: left;

    width: 100%;

    max-width: 1210px;

    padding: 70px 50px;

    margin-top: auto;

    box-shadow: 0 0 30px rgba(0,0,0,0.3), 0 0 60px rgba(0,0,0,0.2);

    transition: all .3s ease-in;
    


    @media all and (max-width: 800px){

      background: #fff !important;

      padding: 30px 30px 0;

      margin-top: 50px;

      box-shadow: none;

    }

  }

  #info-box{

    position: absolute;

    top: -40px;

    right: 50px;

    float: left;

    width: 45%;

    height: calc(100% + 80px);

    background: #fff;

    box-shadow: 0 0 30px rgba(0,0,0,0.3), 0 0 60px rgba(0,0,0,0.2);

    display: flex;

    flex-direction: column;


    @media all and (max-width: 800px){

      width: calc( 100% + 60px);

      margin-left: -30px;

      position: static;

      float: left;

      box-shadow: none;

    }


  }

  .view-more{

    padding: 10px;

    float: right;

    text-transform: uppercase;

    border: 2px solid rgb(36, 67, 108);

    color: rgb(36, 67, 108);

    font-size: 15px;

    text-decoration: none;

    margin: auto 10px 20px auto ;

    width: 120px;

    text-align: center;

    font-weight: 400;

    transition: all .3s ease;;

    &:hover{

      color: #fff;

      font-weight: 300;

      background: rgb(36, 67, 108);

    }

  }

</style>