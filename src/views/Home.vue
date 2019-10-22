<template>
  <div class="home">
    <section class="home-intro">
      <img src="../assets/logo.png" alt="mcss-logo" class="home-intro-logo" />
      <div class="home-intro-title">MCGILL CHINESE STUDENTS' SOCIETY</div>
      <button class="home-intro-btn" @click="gotoMain">Get Started</button>
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
  background-position: 0 0;
  .home-intro {
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .home-intro-logo {
      height: 7rem;
    }
    .home-intro-title {
      width: 40vw;
      text-align: center;
      font-size: 1.2rem;
      color: aliceblue;
      font-weight: 600;
      letter-spacing: 0.8rem;
    }
    .home-intro-btn {
      width: 15rem;
      height: 4rem;
      background: #fff;
      color: #777373;
      border: none;
      border-radius: 2rem;
      outline: none;
      font-size: 1.2rem;
      letter-spacing: 0.1rem;
      transition: all 0.3s ease-out;
    }
    .home-intro-btn:hover {
      transform: translateY(-0.4rem);
      font-weight: 600;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      cursor: pointer;
    }
  }
}
</style>