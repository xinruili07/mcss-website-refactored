<template>
  <div class="sponsors">
    <div class="intro-container-1">
      <div>
        <div class="intro-img"><b-img-lazy :src="require('../assets/About/card-front.png')" alt="Sponsorship Card" width=302 height=191 style="border-radius: 7px; margin-bottom: 1vw; border-style: solid; border-color: black;" /></div>
        <div class="intro-img"><b-img-lazy :src="require('../assets/About/card-back.png')" alt="Sponsorship Card" width=302 height=191 style="border-radius: 7px; margin-bottom: 1vw; border-style: solid; border-color: black;" /></div>
      </div>
      <div class="intro-text" style="margin-left: auto; margin-right: auto; display: block; text-align: center;">
        <h1 style="text-align: center; font-size: 30px; color: #be0819; font-family: IKEABold;">MCSS <span style="font-size: 30px; color: black;">2019-2020</span> MEMBERSHIP CARD</span></h1>
        <hr class="hr2">
        <p style="margin-right: 10%; margin-left: 10%; margin-top: 5%; font-family: Proxima; font-size: 2rem;">With our MCSS Membership card, students can get numerous discounts at various restaurants and stores across the city.
          <br /><br />
          We take pride in bringing our members the best deals and benefits with our annually updated list of participating sponsors.
          <br /><br />
          Get yours today! Grab one at our next upcoming event for only $5!
          </p>
      </div>
    </div>
    <hr class="hr2">
    <h1 style="text-align: center; font-size: 30px; font-family: IKEABold;">OUR <span style="font-size: 30px; color: #be0819;">SPONSORS</span></h1>
    <hr class="hr3">
    <br />

    <div class="sponsors" >
      <div class="restOfSponsors">
        <b-row>
          <b-col sm="12" md="4" class="avatar" v-for="sponsor in sponsorsList" :key="sponsor.name">
            <b-img-lazy :src="require(`../assets/Sponsors/${sponsor.name}.png`)" :blank-src="require('../assets/About/food-placeholder.jpg')"
            offset="700" v-bind:alt="sponsor.name"/>
            <p class="name" style="font-size: 2rem;">{{sponsor.name}}</p>
            <p class="role" style="font-size: 1.5rem;">{{sponsor.address}}</p>
            <br /><br />
          </b-col>
        </b-row>
      </div>
      <iframe style="width: 80%;"src="https://www.google.com/maps/d/embed?mid=1MCocHjxAGO78uFDjn0fm486kqSkhqhs6" width="640" height="480"></iframe>
      <div class="divider"></div><br />
    </div>

  </div>
</template>

<script>

export default {
  name: 'sponsors',
  data() {
    return {
      sponsorsList: [
        {
          name: 'A Beverage Store',
          address: '1863 Rue Sainte-Catherine',
        },
        {
          name: 'Ali',
          address: '1425 René-Lévesque Blvd W',
        },
        {
          name: 'Aunt Dai',
          address: '1448 St Mathieu Street',
        },
        {
          name: 'Basak',
          address: '1237 Guy Street',
        },
        {
          name: 'BMW Canbec',
          address: '4090 Rue Jean-Talon Ouest',
        },
        {
          name: 'Cacao 70',
          address: '3485 Park Avenue 2087 or Saint-Catherine Street',
        },
        {
          name: 'Chatime',
          address: '1811 Saint-Catherine St W or 3428 Park Avenue',
        },
        {
          name: 'Chef on Call',
          address: '3430 Park Ave',
        },
        {
          name: 'Chez Chen',
          address: '1618 Lincoln Avenue',
        },
        {
          name: 'Chez Chili',
          address: '1050b Clack Street',
        },
        {
          name: 'Cuisine Szechuan',
          address: '2350 Guy Street',
        },
        {
          name: 'Dobe & Andy',
          address: '1111 St Urbain Street',
        },
        {
          name: 'GAZO',
          address: '1651 Saint-Catherine Street West 1701 or St Denis Street',
        },
        {
          name: 'Go Orthodontistes',
          address: '1414 Drummond Street',
        },
        {
          name: 'GURU',
          address: '',
        },
        {
          name: 'JCer',
          address: '505 Boul de Maisonneuve O',
        },
        {
          name: 'Kalbi',
          address: '1017 St Laurent Blvd',
        },
        {
          name: 'Kam Fung',
          address: '7209 Taschereau Blvd',
        },
        {
          name: 'L2 Lounge',
          address: '71A Rue de la Gauchetière',
        },
        {
          name: 'La Cité',
          address: '350 Prince Arthur Street West',
        },
        {
          name: 'La Muse',
          address: '1608 Lincoln Avenue',
        },
        {
          name: 'Le Majesthe',
          address: '2077 Boulevard Robert-Bourassa',
        },
        {
          name: 'McGill Pizza',
          address: '625 Milton Street',
        },
        {
          name: 'Mei Clinic',
          address: '100-1442 Sherbrooke Street West',
        },
        {
          name: 'Restaurant Mei',
          address: '1425 Mackay Street',
        },
        {
          name: 'Misoya Ramen',
          address: '2065A Bishop Street',
        },
        {
          name: 'Mon Chicha',
          address: '1396 Maisonneuve Blvd W',
        },
        {
          name: 'Nouilles Badao',
          address: '1818 Saint-Catherine Street West',
        },
        {
          name: 'Nouilles de Riz Orientales',
          address: '2055 Rue Bishop',
        },
        {
          name: 'Nudo',
          address: '1055 St Laurent Blvd',
        },
        {
          name: 'Red Bull',
          address: 'hello',
        },
        {
          name: 'Stanbrooke',
          address: '2061 Stanley Street',
        },
        {
          name: 'Thaiphon',
          address: '2025 Union Avenue',
        },
        {
          name: 'UCAN',
          address: '1832 Saint-Catherine Street West',
        },
        {
          name: 'VUA',
          address: '2020 Boulevard Robert-Bourassa',
        },
        {
          name: 'Zoe Dessert & Presotea',
          address: '2160 St Mathieu Street',
        },
      ],
    };
  },
};
</script>

<style scoped>
.sponsors{
  width: 90%;
  margin: auto;
}

iframe {
  margin-left: auto;
  margin-right: auto;
  display: block;
  text-align: center;
}
.hr3{
    background-color: #be0819;
    width: 22%;
    height: 1px;
}
.hr2 {
    margin-top: 3rem;
    margin-bottom: 3rem;
    width: 80%;
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
}
.hr1{
    background-color: #be0819;
    width: 30%;
    height: 1px;
}
h2{
  background-color: #0c5fa8;
  color: white;
  padding: 10px;
  border-radius: 30px;
}
.president {
  margin-left: auto;
  margin-right: auto;
  display: block;
  text-align: center;
}
.internals, .restOfSponsors {
  margin-left: auto;
  margin-right: auto;
  display: block;
  text-align: center;
}
.avatar img{
  border-radius: 7px;
  width: 80%;
  margin-bottom: 20px;
}
.avatar .name{
  font-weight: bold;
  margin-bottom: 0;
}
.divider{
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 100px;
}
.sponsors li{
  display: inline-grid;
  padding: 10px 20px 10px 20px;
  font-weight: bold;
}
@media screen and (min-width: 840px) {
  .intro-container-1 {
    display: flex;
    flex-wrap: nowrap;
    margin-left: 7vw;
  }

  .intro-container-2 {
    display: flex;
    flex-wrap: nowrap;
    margin-right: 7vw;
  }

  .intro-text {
    margin-top: 2vw;
  }
}
@media screen and (max-width: 840px) {
  .intro-container-1 {
    display: flex;
    flex-direction: column;
  }
  .intro-container-1 .intro-img {
    margin-left: auto;
    margin-right: auto;
    display: block;
    text-align: center;
  }

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
  .intro-text {
    margin-top: 4vw;
  }
}

@media screen and (max-width: 992px) {
  h2 {
    font-size: 25px;
  }
  .sponsors li{
    width: 95%;
  }
  iframe {
    display: none;
  }
}
</style>