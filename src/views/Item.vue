<template lang="html">
  <div class="flex-container">
    <div style="width: 408px;">
      <vueper-slides class="no-shadow"
        ref="vueperslides1"
        :autoplay="false"
        fade
        :bullets="false"
        @slide="$refs.vueperslides2.goToSlide($event.currentSlide.index, { emit: false })"
        :slide-ratio="408 / 272"
        :arrows="true">
        <vueper-slide
          v-for="(slide, i) in product.displayImages"
          :key="i"
          :image="slide.image">
        </vueper-slide>
      </vueper-slides>
      <br />
      <vueper-slides
        class="no-shadow thumbnails"
        ref="vueperslides2"
        @slide="$refs.vueperslides1.goToSlide($event.currentSlide.index, { emit: false })"
        :visible-slides="product.displayImages.length"
        fixed-height="105px"
        :slide-ratio="105 / 70"
        :bullets="false"
        :touchable="false"
        :gap="2.5"
        :arrows="false">
        <vueper-slide
          v-for="(slide, i) in product.displayImages"
          :key="i"
          :image="slide.image"
          @click.native="$refs.vueperslides2.goToSlide(i)">
        </vueper-slide>
      </vueper-slides>
    </div>
    <div class="item-desc">
      <h1 class="product-name">{{ product.name }}</h1>
      <h2 class="product-detail">{{ product.description }}</h2>
      <h1 class="product-price">${{ product.price }} CAD</h1>
      <div class="flex-sizes">
        <span v-for="size in product.size" :key="size">
          <input
            :id="size"
            v-model="selectedSize"
            name="Radios" type="radio"
            :value="size"
            :disabled="inventory[size] === 0"
          >
          <label :for="size">{{ size }}</label>
        </span>
      </div>
      <div>
        <button
          class="add_cart_btn"
          @click="addToCart(product.name, product.image, product.price, product.sizeSku, product.dbName)"
          :disabled="!selectedSize"
        >
          ADD TO BAG
        </button>
        <button
          class="redirect_to_cart_btn"
          @click="redirectToCart()"
          v-if="itemAdded"
        >
          VIEW CART
        </button>
      </div>
      <hr class="hr2">
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
import axios from 'axios';

export default {
  props: ['itemPath'],
  components: {
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      product: {},
      selectedSize: '',
      itemAdded: false,
      inventory: {},
    };
  },
  methods: {
    addToCart(name, image, price, sizeSku, dbName) {
      const item = {
        itemName: name,
        itemImage: image,
        itemPrice: price,
        itemSize: this.selectedSize,
        itemSku: sizeSku[this.selectedSize],
        itemDbName: dbName,
      };
      this.$store.dispatch('addItem', item);
      this.itemAdded = true;
    },
    redirectToCart() {
      this.$router.push('/shopping-bag');
    },
  },
  created() {
    // eslint-disable-next-line arrow-body-style
    const foundProduct = this.$store.getters.products.filter((product) => {
      return product.path === this.$route.params.itemPath;
    });
    if (foundProduct.length > 0) {
      // eslint-disable-next-line prefer-destructuring
      this.product = foundProduct[0];
    } else {
      this.$router.push('/404');
    }
    console.log(this.product.dbName);
    axios
      .get(`https://mcss-website-backend.herokuapp.com/inventory/${this.product.dbName}`)
      .then((response) => {
        this.inventory = response.data;
      })
      .catch(error => console.log(error));
  },
};
</script>

<style lang="scss">
.item-desc h1 {
  font-size: 30px;
  font-family: IKEABold;
  color: #be0819;
}
h2 {
  white-space: pre-wrap;
  word-wrap: break-word;
}
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.flex-sizes {
  display: flex;
  justify-content: space-between;
}
.thumbnails {
  margin: auto;
  max-width: 300px;
}

.thumbnails .vueperslide {
  box-sizing: border-box;
  border: 1px solid #fff;
  transition: 0.3s ease-in-out;
  opacity: 0.7;
  cursor: pointer;
}

.thumbnails .vueperslide--active {
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
  opacity: 1;
  border-color: #000;
}

input[type="radio"],
input[type="checkbox"] {
    /* hide the inputs */
    display: none;
}

input[type="radio"] + label:hover,
input[type="checkbox"] + label:hover {
    /* hide the inputs */
    border: 1px solid black;
}

input[type="radio"]:disabled + label,
input[type="checkbox"]:disabled + label {
  border: none;
  background: #E9E9E9;
  color: #C7C7C7;
  cursor: not-allowed;
}

/* style your lables/button */
input[type="radio"] + label,
input[type="checkbox"] + label {
  /* keep pointer so that you get the little hand showing when you are on a button */
  cursor: pointer;
  /* the following are the styles */
  padding: 10px 15px;
  border: 1px solid #ccc;
  background: white;
  color: black;
  border-radius: 3px;
  font-family: IKEABold;
  text-shadow: 1px 1px 0 rgba(0,0,0,0);
  font-size: 1.5rem;
}

input[type="radio"]:checked + label,
input[type="checkbox"]:checked + label{
    /* style for the checked/selected state */
    background: #be0819;
    border-color: #be0819;
    color: white;
}

.add_cart_btn {
  width: 100%;
  height: 40px;
  background: #be0819;
  font-family: IKEABold;
  border: none;
  color: white;
  border-radius: 5px;
  font-size: 1.5rem;
  margin-bottom: 10px;
}
.add_cart_btn:hover {
  cursor: pointer;
  opacity: 0.8;
}

.redirect_to_cart_btn {
  width: 100%;
  height: 40px;
  background: white;
  font-family: IKEABold;
  border: 3px solid black;
  color: black;
  border-radius: 5px;
  font-size: 1.5rem;
}
.redirect_to_cart_btn:hover {
  cursor: pointer;
  opacity: 0.8;
  background: black;
  font-family: IKEABold;
  color: white;
  transition: 0.5s;
}

.add_cart_btn:disabled {
  border: none;
  background: #E9E9E9;
  color: #C7C7C7;
  cursor: not-allowed;
}

.vueperslides__arrow {
  color: black;
  background: rgba(255,255,255,0.5)
}

.product-name, .product-detail, .product-price, .flex-sizes {
  margin-bottom: 20px;
}

@media screen and (min-width: 840px) {
  .item-desc {
    margin-top: 10%;
    width: 240px;
  }
  .item-desc .hr2 {
    display: none;
  }
}
@media screen and (max-width: 840px) {
  .thumbnails {
    display: none;
  }

  .item-desc {
    margin-top: 5%;
    width: 80%;
  }
  .item-desc .hr2 {
    margin-top: 50px;
    margin-bottom: 50px;
    width: 80%;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
  }
}
</style>
