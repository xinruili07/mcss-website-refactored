<template>
  <div class="events">
    <h1 style="text-align: center; font-size: 30px;">VALENTINES <span style="font-size: 30px; color: #be0819;">DAY</span></h1>
    <hr class="hr1">
    <div class="event2"><b-img-lazy :src="require('../assets/lunar-new-year-2020.jpg')" alt="Lunar New Year 2020" style="border-radius: 7px;" /></div>
    <hr class="hr2">
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf45CD441mwiZ6MSBl039qiK_B5NCVaLcnhNDeIGg-9W4bBBA/viewform?embedded=true" width="640" height="1659" frameborder="0" marginheight="0" marginwidth="0" style="margin-right: auto; margin-left: auto; display: block;">Loading…</iframe>
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
      width: 30%;
      height: 1px;
  }

  .event1 img{
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 87%;
    height: auto;
    background-image: url(../assets/sky-background.jpg);
  }

  .event2 img{
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 90%;
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
