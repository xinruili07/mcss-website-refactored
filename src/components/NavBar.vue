<template>
  <div>
    <div class="navbar">
      <b-navbar toggleable="lg" variant="faded">
        <b-navbar-brand @click="gotoHome">
          <img
            src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139753/MCSS/redlogo_jpk8nl.png"
            alt="redlogo"
            class="navbar-logo"
          />
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto navbar-links">
            <b-nav-item
              class="nav-element"
              @click="gotoAnnouncements"
              v-bind:class="{ active: routeName == '/announcements'}"
            >
              Announcements
            </b-nav-item>

            <b-nav-item class="nav-element"
              @click="gotoEvents"
              v-bind:class="{ active: routeName == '/events'}"
            >
              Events
            </b-nav-item>

            <b-nav-item class="nav-element"
              @click="gotoAbout"
              v-bind:class="{ active: routeName == '/about'}"
            >
              About Us
            </b-nav-item>

            <b-nav-item
              class="nav-element"
              @click="gotoSponsors"
              v-bind:class="{ active: routeName == '/sponsors'}"
            >
              Sponsors
            </b-nav-item>

            <b-nav-item
              class="nav-element"
              @click="gotoContact"
              v-bind:class="{ active: routeName == '/contact'}"
            >
              Contact
            </b-nav-item>

            <stripe-checkout
              ref="checkoutRef"
              :pk="publishableKey"
              :lineItems="lineItems"
              :mode="mode"
              :successUrl="successUrl"
              :cancelUrl="cancelUrl"
            >
              <template slot="checkout-button">
                <button
                  class="checkout-button-redirect"
                  @click="checkout"
                >
                  Purchase our Card
                </button>
              </template>
            </stripe-checkout>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
import { StripeCheckout } from 'vue-stripe-checkout';

export default {
  name: 'mainPage',
  components: {
    StripeCheckout,
  },
  data() {
    return {
      isActive: '',
      currentPos: 0,
      targetPos: 0,
      transitionName: '',
      loading: false,
      mode: 'payment',
      publishableKey: process.env.VUE_APP_PUBLISHABLE_KEY,
      lineItems: [{ price: process.env.VUE_APP_LINE_ITEM, quantity: 1 }],
      successUrl: process.env.VUE_APP_SUCCESS_URL,
      cancelUrl: process.env.VUE_APP_CANCEL_URL,
    };
  },
  methods: {
    checkout() {
      this.$refs.checkoutRef.redirectToCheckout();
    },
    gotoHome() {
      this.$router.push('/');
    },
    gotoAnnouncements() {
      if (this.currentComponent !== 'main-announcements') {
        this.$router.push('/announcements');
        this.currentComponent = 'main-announcements';
        this.isActive = 'announcements';
      }
    },
    gotoEvents() {
      if (this.currentComponent !== 'main-events') {
        this.$router.push('/events');
        this.currentComponent = 'main-events';
        this.isActive = 'main-events';
      }
    },
    gotoAbout() {
      if (this.currentComponent !== 'main-about') {
        this.$router.push('/about');
        this.currentComponent = 'main-about';
        this.isActive = 'main-about';
      }
    },
    gotoSponsors() {
      if (this.currentComponent !== 'main-sponsors') {
        this.$router.push('/sponsors');
        this.currentComponent = 'main-sponsors';
        this.isActive = 'sponsors';
      }
    },
    gotoContact() {
      if (this.currentComponent !== 'main-contact') {
        this.$router.push('/contact');
        this.currentComponent = 'main-contact';
        this.isActive = 'main-contact';
      }
    },
  },
  computed: {
    routeName() {
      return this.$route.path;
    },
    getTransition() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.transitionName = this.currentPos < this.targetPos ? 'slide-right' : 'slide-left';
      return this.transitionName;
    },
  },
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

  .navbar-links .active a{
    color: black !important;
  }
}
</style>
