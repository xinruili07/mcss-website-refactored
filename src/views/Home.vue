<template>
  <div class="home">
    <section class="home-intro">
      <img src="../assets/logo.png" alt="mcss-logo" class="home-intro-logo" />
      <div class="home-intro-title">MCGILL CHINESE STUDENTS' SOCIETY</div>
      <button class="home-intro-btn" @click="gotoMain">GET STARTED</button>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  methods: {
    gotoMain() {
      this.$router.push("/main");
    }
  }
};
</script>

<style lang="scss">
@font-face {
    font-family: IKEABold;
    src: url("../assets/fonts/IKEA Sans Bold.otf") format("opentype");
}
@font-face {
    font-family: Proxima;
    src: url("../assets/fonts/Proxima Nova Regular.otf") format("opentype");
}
@media screen and (max-width: 600px) {
  .home {
    background-position: -40rem;
  }
}

@media screen and (min-width: 600px) {
  .home {
    background-position: 0 0;
  }
}

.home {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(190, 8, 51, 0.4),
      rgba(190, 8, 25, 0.4)
    ),
    url(../assets/home.jpg);
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;

  .home-intro {
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .home-intro-logo {
      height: 9rem;
    }
    .home-intro-title {
      font-family: IKEABold;
      width: 85vw;
      text-align: center;
      font-size: 5rem;
      color: aliceblue;
      font-weight: 600;
      letter-spacing: 0.8rem;
    }
    .home-intro-btn {
      font-family: IKEABold;
      width: 25rem;
      height: 5rem;
      background: #fff;
      color: #be0819;
      border: none;
      border-radius: 2rem;
      outline: none;
      font-size: 2rem;
      letter-spacing: 0.1rem;
      transition: all 0.3s ease-out;
    }
    .home-intro-btn:hover {
      transform: translateY(-0.4rem);
      font-weight: 600;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      cursor: pointer;
      background: #be0819;
      color: white;
    }
  }
}
</style>