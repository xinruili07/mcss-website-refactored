<template>
  <div>
    <div class="banner-img">
      <b-img-lazy
        src="https://res.cloudinary.com/die52atcc/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative/v1605406313/MCSS/Merch/_YWD8123_t7pqpq.jpg"
      />
    </div>
    <h1>MCSS <span>FIRST COLLECTION</span></h1>
    <hr class="hr1">
    <div class="row">
      <Product
        v-for="product in products"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :image="product.image"
        :price="product.price"
        :path="product.path"
      />
    </div>
    <hr class="hr2">
  </div>
</template>

<script>
import Product from '../components/Product.vue';

export default {
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
  components: {
    Product,
  },
};
</script>

<style scoped>
h1 {
  color: #be0819;
  font-family: IKEABold;
  font-size: 30px;
  text-align: center;
  margin-top: 2.5%;
}

h1 span {
  font-size: 30px;
  font-family: IKEABold;
  color: black;
}
img {
  margin-left: auto;
  margin-right: auto;
  display: block;
  width: 100%;
  height: auto;
}

.hr2 {
  margin-top: 50px;
  margin-bottom: 50px;
  width: 80%;
  border: 0;
  border-top: 1px solid rgba(0,0,0,.1);
}

.hr1{
  background-color: #be0819;
  width: 30%;
  height: 1px;
}
</style>
