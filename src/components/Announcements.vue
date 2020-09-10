<template>
  <div class="events">
    <h1 style="text-align: center; font-size: 30px; font-family: IKEABold;">FALL 2020 <br><span style="font-size: 30px; color: #be0819;">RECRUITMENT</span></h1>
    <hr class="hr1">
    <div class="event2"><a href="https://www.facebook.com/events/3209510255834127" target="_blank"><b-img-lazy :src="require('../assets/About/recruiting-landscape.jpg')" alt="New Recruit Winter 2020" style="border-radius: 7px;" /></a></div>
    
    <hr class="hr2">
    <h1 style="text-align: center; font-size: 30px; font-family: IKEABold;">NEW <span style="font-size: 30px; color: #be0819;">RECRUITS</span></h1>
    <hr class="hr1">
    <div class="event2"><b-img-lazy :src="require('../assets/About/New Recruits Winter 2020.png')" alt="New Recruit Winter 2020" style="border-radius: 7px;" /></div>
    
    <hr class="hr2">
    <div id="sogaeting"><h1 style="text-align: center; font-size: 30px; font-family: IKEABold;">SOGAETING -<span style="font-size: 30px; color: #be0819;"> FEB 14 2020</span></h1></div>
    <hr class="hr1">
    <div style="width: 80%; margin-right: auto; margin-left: auto; display: block;">
      <vueper-slides lazy lazy-load-on-drag :slide-ratio="485 / 728" slide-image-inside>
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image">
          <template v-slot:loader>
            <i class="icon icon-loader spinning"></i>
            <span>Loading...</span>
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
    <hr class="hr2">
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  name: 'announcements',
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      slides: [
        {
          title: 'Sogaeting 1',
          content: 'First Picture',
          // You can also provide a URL for the image.
          image: require('../assets/Sogaeting/pic1.jpg')
        },
        {
          title: 'Sogaeting 2',
          content: 'Second Picture',
          // You can also provide a URL for the image.
          image: require('../assets/Sogaeting/pic2.jpg')
        },
        {
          title: 'Sogaeting 3',
          content: 'Third Picture',
          // You can also provide a URL for the image.
          image: require('../assets/Sogaeting/pic3.jpg')
        },
        {
          title: 'Sogaeting 4',
          content: 'Fourth Picture',
          // You can also provide a URL for the image.
          image: require('../assets/Sogaeting/pic4.jpg')
        },
        {
          title: 'Sogaeting 5',
          content: 'Fifth Picture',
          // You can also provide a URL for the image.
          image: require('../assets/Sogaeting/pic5.jpg')
        },
      ]
    }
  }
};
</script>

<style>
  .vueperslide__image {
    border-radius: 7px;
  }

  .hr1{
      background-color: #be0819;
      width: 28%;
      height: 1px;
  }

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

  .event2 img{
    border-radius: 7px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 80%;
    height: auto;
  }

  .hr2 {
    margin-top: 3rem;
    margin-bottom: 3rem;
    width: 80%;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
}

</style>