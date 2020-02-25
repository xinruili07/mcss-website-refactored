<template>
  <div>
    <div class="navbar">
      <b-navbar toggleable="sm" variant="faded">
        <b-navbar-brand @click="gotoHome">
          <img src="../assets/redlogo.png" alt="redlogo" class="navbar-logo" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto navbar-links">
            <b-nav-item class="nav-element" @click="gotoEvents">Events</b-nav-item>
            <b-nav-item class="nav-element" @click="gotoAbout">About Us</b-nav-item>
            <b-nav-item class="nav-element" @click="gotoSponsors">Sponsors</b-nav-item>
            <b-nav-item class="nav-element" @click="gotoContact">Contact</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <keep-alive>
      <transition :name="getTransition">
        <component :is="currentComponent"></component>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "mainPage",
  components: {
    "main-events": () => import("../components/Events"),
    "main-about": () => import("../components/About"),
    "main-sponsors": () => import("../components/Sponsors"),
    "main-contact": () => import("../components/Contact")
  },
  data() {
    return {
      currentComponent: "main-events",
      currentPos: 0,
      targetPos: 0,
      transitionName: ""
    };
  },
  methods: {
    gotoHome() {
      this.$router.push("/");
    },
    gotoEvents() {
      if (this.currentComponent !== "main-events") {
        this.currentPos = this.checkCurrentPos();
        this.targetPos = 0;
        this.currentComponent = "main-events";
      }
    },
    gotoAbout() {
      if (this.currentComponent !== "main-about") {
        this.currentPos = this.checkCurrentPos();
        this.targetPos = 1;
        this.currentComponent = "main-about";
      }
    },
    gotoSponsors() {
      if (this.currentComponent !== "main-sponsors") {
        this.currentPos = this.checkCurrentPos();
        this.targetPos = 2;
        this.currentComponent = "main-sponsors";
      }
    },
    gotoContact() {
      if (this.currentComponent !== "main-contact") {
        this.currentPos = this.checkCurrentPos();
        this.targetPos = 3;
        this.currentComponent = "main-contact";
      }
    },
    checkCurrentPos() {
      if (this.currentComponent === "main-events") {
        return 0;
      } else if (this.currentComponent === "main-about") {
        return 1;
      } else if (this.currentComponent === "main-sponsors") {
        return 2;
      } else if (this.currentComponent === "main-contact") {
        return 3;
      } else {
        return -1;
      }
    }
  },
  computed: {
    getTransition() {
      this.transitionName =
        this.currentPos < this.targetPos ? "slide-right" : "slide-left";
      return this.transitionName;
    }
  }
};
</script>

<style lang="scss">
.navbar {
  width: 100vw;
  border-bottom: 3px solid #be0819;
  margin-bottom: 30px;

  .navbar-expand-sm {
    border: none;
    margin-bottom: 0;
  }
  .navbar-logo {
    margin-left: -0.7rem;
    width: 12rem;
  }
  .navbar-logo:hover {
    transform: scale(1.2);
    cursor: pointer;
  }
  .navbar-links {
    color: rgba(0, 0, 0, 0.5);
  }
  .navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0, 0.5);
    font-size: 2rem;
    padding-left: 20px;
    padding-right: 20px;
    font-family: IKEABold;
  }
  .nav-link:hover {
    opacity: 0.8;
  }
}
</style>
