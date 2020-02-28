<template>
  <div class="events">
    <h1 style="text-align: center; font-size: 30px; font-family: IKEABold;">UPCOMING <span style="font-size: 30px; color: #be0819;">EVENTS</span></h1>
    <hr class="hr1">
    <div class="event-container event2 upcoming"><a href="https://www.facebook.com/events/559381931328945/" target="_blank">
      <b-img-lazy :src="require('../assets/farewell.jpg')" alt="Casino Night: Red Carpet 2029" style="border-radius: 7px;" />
        <div class="middle">
          <div class="check-it-out">Check it out on Facebook!</div>
          <h2 style="font-family: IKEABold; color: #be0819;">This will redirect you to our event page.</h2>
        </div>
      </a>
    </div>
    <hr class="hr2">
    <h1 style="text-align: center; font-size: 30px; font-family: IKEABold;">PAST <span style="font-size: 30px; color: #be0819;">EVENTS</span></h1>
    <hr class="hr1">
    <div class="event1"><b-img-lazy :src="require('../assets/ski-trip-2020.png')" alt="Ski Trip 2020" style="border-radius: 7px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);"/></div>
    <div class="event2"><b-img-lazy :src="require('../assets/casino-night-2019.jpg')" alt="Casino Night: Red Carpet 2020" style="border-radius: 7px;" /></div>
  </div>
</template>

<script>
export default {
  name: 'events',
};
</script>

<style scoped>
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

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  transition: .3s;
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

  .event-container:hover img {
    opacity: 0.3;
  }

  .event-container:hover .middle {
    opacity: 1;
  }

  .check-it-out {
    font-family: IKEABold;
    font-size: 5rem;
    color: black;
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
}

</style>
