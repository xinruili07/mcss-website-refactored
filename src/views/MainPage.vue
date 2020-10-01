<template>
  <div>
    <div class="navbar">
      <b-navbar toggleable="lg" variant="faded">
        <b-navbar-brand @click="gotoHome">
          <img src="../assets/redlogo.png" alt="redlogo" class="navbar-logo" />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto navbar-links">
            <b-nav-item class="nav-element" @click="gotoAnnouncements">Announcements</b-nav-item>
            <b-nav-item class="nav-element" @click="gotoEvents">Events</b-nav-item>
            <b-nav-item class="nav-element" @click="gotoAbout">About Us</b-nav-item>
            <b-nav-item class="nav-element" @click="gotoSponsors">Sponsors</b-nav-item>
            <b-nav-item class="nav-element" @click="gotoContact">Contact</b-nav-item>
            <stripe-checkout
              ref="checkoutRef"
              :pk="publishableKey"
              :lineItems="lineItems"
              :mode="mode"
              :successUrl="successUrl"
              :cancelUrl="cancelUrl"
            >
              <template slot="checkout-button">
                <button class="checkout-button-redirect" @click="checkout">Purchase our Card</button>
              </template>
            </stripe-checkout>
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
import { StripeCheckout } from 'vue-stripe-checkout';

export default {
  name: "mainPage",
  components: {
    StripeCheckout,
    "main-announcements": () => import("../components/Announcements"),
    "main-events": () => import("../components/Events"),
    "main-about": () => import("../components/About"),
    "main-sponsors": () => import("../components/Sponsors"),
    "main-contact": () => import("../components/Contact")
  },
  data() {
    return {
      currentComponent: "main-announcements",
      currentPos: 0,
      targetPos: 0,
      transitionName: "",
      loading: false,
      mode: "payment",
      publishableKey: process.env.VUE_APP_PUBLISHABLE_KEY,
      lineItems: [{price: process.env.VUE_APP_LINE_ITEM, quantity: 1}],
      successUrl: process.env.SUCCESS_URL,
      cancelUrl: process.env.CANCEL_URL,
    };
  },
  methods: {
    checkout () {
      this.$refs.checkoutRef.redirectToCheckout();
    },
    gotoHome() {
      this.$router.push("/");
    },
    gotoAnnouncements() {
      if (this.currentComponent !== "main-announcements") {
        this.currentPos = this.checkCurrentPos();
        this.targetPos = 0;
        this.currentComponent = "main-announcements";
      }
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
@media screen and (max-width: 992px) {
  .checkout-button-redirect {
    margin-top: 5px;
  }
}
.checkout-button-redirect {
  font-family: IKEABold;
  width: 25rem;
  height: 4rem;
  background: #be0819;
  color: white;
  border: none;
  border-radius: 2rem;
  outline: none;
  font-size: 2rem;
  letter-spacing: 0.1rem;
  transition: all 0.3s ease-out;
}
.checkout-button-redirect:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  cursor: pointer;
}
.navbar {
  width: 100vw;
  border-bottom: 3px solid #be0819;
  margin-bottom: 30px;
  .navbar-collapse {
    text-align: center;
  }
  .navbar-expand-lg {
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
