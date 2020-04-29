<template>
  <div class="events">
    <h1 style="text-align: center; font-size: 30px; font-family: IKEABold;">UPCOMING <span style="font-size: 30px; color: #be0819;">EVENTS</span></h1>
    <hr class="hr1">
    <div class="event-container event2 upcoming" v-on:click="farewellToggle = !farewellToggle">
      <b-img-lazy :src="require('../assets/farewell.jpg')" :class="{toggled: farewellToggle}" alt="Farewell my Concubine" style="border-radius: 7px;" />
        <a class="event-redirect" v-if="farewellToggle" href="https://www.facebook.com/events/559381931328945/" target="_blank">
          <div class="middle">
            <h2 style="font-family: IKEABold;" class="check-it-out">Check out our event page!</h2>
          </div>
        </a>
    </div>
    <hr class="hr2">
    <h1 style="text-align: center; font-size: 30px; font-family: IKEABold;">PAST <span style="font-size: 30px; color: #be0819;">EVENTS</span></h1>
    <hr class="hr1">
    <div class="event2"><b-img-lazy :src="require('../assets/sogaeting.jpg')" alt="Sogaeting 2020" style="border-radius: 7px;" /></div>
    <div class="event1"><b-img-lazy :src="require('../assets/ski-trip-2020.png')" alt="Ski Trip 2020" style="border-radius: 7px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"/></div>
    <div class="event2"><b-img-lazy :src="require('../assets/casino-night-2019.jpg')" alt="Casino Night: Red Carpet 2019" style="border-radius: 7px;" /></div>
  </div>
</template>

<script>
export default {
  name: 'events',
  data() {
    return {
      farewellToggle: false,
    }
  },
  methods:{
    switchFarewell(){
      this.farewellToggle = !this.farewellToggle;
    }
  }
};
</script>

<style scoped>


  .check-it-out {
    font-size: 3rem;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    background-color: white;
    border:0.1em solid #000000;
    border-radius:2rem;
    padding:0.46em 1.6em;
    transition: all 0.5s;
    color: #be0819;
  }

  .check-it-out:hover {
    font-weight: 600;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
    background: #be0819;
    color: white;
  }

  .toggled {
    opacity: 0.4;
    transition: all 0.15s;
  }
  .hr1{
      background-color: #be0819;
      width: 22%;
      height: 1px;
  }
  .event2 {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }
  .event2 img{
    border-radius: 7px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 100%;
    height: auto;
  }

  .hr2 {
    margin-top: 3rem;
    margin-bottom: 3rem;
    width: 80%;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
  }
  .upcoming {
    cursor: pointer;
  }

  .event-container {
    position: relative;
  }

@media screen and (min-width: 1000px) {
  .event1 img{
    padding: 20px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 80%;
    height: auto;
    background-image: url(../assets/sky-background.jpg);
  }
  .event2 {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
  }

  .middle:hover {
    cursor: pointer;
  }

  .event-container:hover .middle {
    opacity: 1;
  }

  .check-it-out {
    font-family: IKEABold;
    font-size: 3rem;
  }
}

@media screen and (max-width:1000px) {
  .event2 {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
  .event1 img{
    padding: 20px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 90%;
    height: auto;
    background-image: url(../assets/sky-background.jpg);
  }
  .check-it-out {
    font-family: IKEABold;
    font-size: 1.5rem;
  }
}

</style>
