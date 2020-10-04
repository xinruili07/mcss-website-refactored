<template>
  <div class="events">
    <h1>OUR MEMBERSHIP CARD <span>IS HERE!</span></h1>
    <hr class="hr1">
    <div class="intro-container-2">
      <div class="intro-img"><b-img-lazy :src="require('../assets/card2020.png')" alt="Group Picture!" width=542 height=330 style="border-radius: 7px;" class="group-pic" /></div>
      <div style=" margin-left: auto; margin-right: auto; display: block; text-align: center;">
        <p class="card-text">
          With our MCSS Membership card, students can get numerous discounts 
          at various restaurants and stores across the city.
          Get yours today for only <b>$2.99</b> by clicking on <b>"Purchase our Card"</b> on our navigation bar.
          <br /><br />
          After your purchase, you should receive an email containing the activation code. Make sure to 
          check your spam folder if it doesn't arrive in your inbox.
          <br /><br />
          Once you have your activation code, please follow our tutorial to activate your membership card:
        </p>
        <a href="https://s3.ca-central-1.amazonaws.com/mcss.ca/Instruction-Manual.pdf" class="tutorial-btn" target="_blank">Go to Tutorial</a>
      </div>
    </div>
    
    <hr class="hr2">
    <h1>FALL 2020 <br><span>NEW RECRUITS</span></h1>
    <hr class="hr1">
    <div class="event2"><b-img-lazy :src="require('../assets/Announcements/Welcome Post 2020 Fall.png')" alt="New Recruit Fall 2020" style="border-radius: 7px;" /></div>
    
    <hr class="hr2">
    <h1>WINTER 2020 <br><span>NEW RECRUITS</span></h1>
    <hr class="hr1">
    <div class="event2"><b-img-lazy :src="require('../assets/Announcements/New Recruits Winter 2020.png')" alt="New Recruit Winter 2020" style="border-radius: 7px;" /></div>
    
    <hr class="hr2">
    <div id="sogaeting"><h1>SOGAETING <br><span> FEB 14 2020</span></h1></div>
    <hr class="hr1">
    <div style="width: 80%; margin-right: auto; margin-left: auto; display: block;">
      <vueper-slides lazy lazy-load-on-drag :slide-ratio="485 / 728" slide-image-inside :touchable="false">
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

<style scoped>
  .vueperslide__image {
    border-radius: 7px;
  }
  b {
  font-size: 1.8rem;
  }

  @media screen and (max-width: 840px) {
    .intro-container-2 {
      display: flex;
      flex-direction: column;
    }
    .intro-container-2 .intro-img {
      margin-left: auto;
      margin-right: auto;
      display: block;
      text-align: center;
    }
    .intro-img img{
      width: 80%;
      height: auto;
    }
    .events h1 {
      text-align: center; 
      font-size: 20px; 
      font-family: IKEABold;
    }
    .events span {
      font-size: 20px; 
      color: #be0819;
    }
    .card-text {
      margin-right: 10%; 
      margin-left: 10%; 
      margin-top: 5%; 
      margin-bottom: 5%;
      font-family: Proxima; 
      font-size: 1.8rem; 
      text-align: justify;
    }
  }
  @media screen and (min-width: 840px) {
    .intro-container-2 {
      display: flex;
      flex-wrap: nowrap;
    }

    .intro-img {
      margin-left: 7vw;
    }

    .events h1 {
      text-align: center; 
      font-size: 30px; 
      font-family: IKEABold;
    }
    .events span {
      font-size: 30px; 
      color: #be0819;
    }
    .card-text {
      margin-right: 10%; 
      margin-left: 10%; 
      margin-top: 2%; 
      margin-bottom: 2%;
      font-family: Proxima; 
      font-size: 1.8rem; 
      text-align: justify;
    }
  }

  .hr1{
      background-color: #be0819;
      width: 28%;
      height: 1px;
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

  .tutorial-btn {
      font-family: IKEABold;
      width: 25rem;
      height: 5rem;
      padding: 10px 15px;
      background: #be0819;
      color: white;
      border: none;
      border-radius: 2rem;
      outline: none;
      font-size: 1.8rem;
      letter-spacing: 0.1rem;
      transition: all 0.3s ease-out;
      margin-top: 20px;
  }
  .tutorial-btn:hover {
      transform: translateY(-0.4rem);
      font-weight: 600;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      cursor: pointer;
      background: #be0819;
      color: white;
      text-decoration: none;
    }

</style>