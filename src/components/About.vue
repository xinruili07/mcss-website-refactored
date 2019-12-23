<template>
  <div class="volunteers">
    <h1 style="text-align: center;">Our Team</h1>
    <br />

    <div class="board" >

      <div class="president">
        <b-row>
          <b-col sm="12" md="6" class="avatar">
            <b-img-lazy :src="require('../assets/Members/owen.jpg')" :blank-src="require('../assets/placeholder.png')" alt="Co-President"/>
            <p class="name">Owen Bai</p>
            <p class="role">Co-President</p>
          </b-col>
          <b-col sm="12" md="6" class="avatar">
            <b-img-lazy :src="require('../assets/Members/annie.jpg')" :blank-src="require('../assets/placeholder.png')" alt="Co-President"/>
            <p class="name">Annie Sun</p>
            <p class="role">Co-President</p>
          </b-col>
        </b-row>
      </div>
      <br /><br />

      <div class="internals">
        <b-row>
          <b-col sm="12" md="6" class="avatar">
            <b-img-lazy :src="require('../assets/Members/emily_z.jpg')" :blank-src="require('../assets/placeholder.png')" alt="VP Internal"/>
            <p class="name">Emily Zhang</p>
            <p class="role">VP Internal</p>
          </b-col>

          <b-col sm="12" md="6" class="avatar">
            <b-img-lazy :src="require('../assets/Members/qian.jpg')" :blank-src="require('../assets/placeholder.png')" alt="VP Internal"/>
            <p class="name">Qian Hui Sun </p>
            <p class="role">VP Internal</p>
          </b-col>
        </b-row>
      </div>
      <br /><br />

      <div class="restOfBoard">
        <b-row>
          <b-col sm="12" md="4" class="avatar" v-for="member in boardMembers" :key="member.name">
            <b-img-lazy :src="member.image" :blank-src="require('../assets/placeholder.png')" offset="700" v-bind:alt="member.name"/>
            <p class="name">{{member.name}}</p>
            <p class="role">{{member.role}}</p>
            <br /><br />
          </b-col>
        </b-row>
      </div>

      <div class="divider"></div><br />
    </div>

  </div>
</template>

<script>
export default {
  name: 'VolunteersPage',
  data() {
    return {
      boardMembers: [
        {
          name: 'Charlie Tang',
          id: 'charlie',
          role: 'VP Finance',
          image: require('../assets/Members/charlie.jpg'),
        },
        {
          name: 'Xi Ran Chen',
          id: 'xiran',
          role: 'Junior VP Finance',
          image: require('../assets/Members/xiran.jpg'),
        },
        {
          name: 'Dian Dian',
          id: 'dian',
          role: 'VP Media',
          image: require('../assets/Members/dian.jpg'),
        },
        {
          name: 'Gloria Ma',
          id: 'gloria',
          role: 'Junior VP Media',
          image: require('../assets/Members/gloria.jpg'),
        },
        {
          name: 'Xinrui Li',
          id: 'xinrui',
          role: 'Webmaster',
          image: require('../assets/Members/xinrui.jpg'),
        },
        {
          name: 'Hattie Chen',
          id: 'hattie',
          role: 'Photographer',
          image: require('../assets/Members/hattie.jpg'),
        },
        {
          name: 'Jian Qiao He',
          id: 'mike',
          role: 'VP Marketing',
          image: require('../assets/Members/mike.jpg'),
        },
        {
          name: 'Emily Huang',
          id: 'emily_h',
          role: 'Social Director',
          image: require('../assets/Members/emily_h.jpg'),
        },
        {
          name: 'Danielle Zhu',
          id: 'danielle',
          role: 'Social Director',
          image: require('../assets/Members/danielle.jpg'),
        },
        {
          name: 'Felix Lu',
          id: 'felix',
          role: 'VP External',
          image: require('../assets/Members/felix.jpg'),
        },
        {
          name: 'Dimitri Yang',
          id: 'dimitri',
          role: 'Sponsorship Director',
          image: require('../assets/Members/dimitri.jpg'),
        },
        {
          name: 'Julian Qu',
          id: 'julian',
          role: 'Sponsorship Director',
          image: require('../assets/Members/julian.jpg'),
        },
        {
          name: 'Melody Zhou',
          id: 'melody',
          role: 'Sponsorship Director',
          image: require('../assets/Members/melody.jpg'),
        }, 
        {
          name: 'Tian Jing Li',
          id: 'tj',
          role: 'Project Manager',
          image: require('../assets/Members/tj.jpg'),
        },
        {
          name: 'Jeremy Leung',
          id: 'jeremy',
          role: 'Project Manager',
          image: require('../assets/Members/jeremy.jpg'),
        },
        {
          name: 'Amy Li',
          id: 'amy',
          role: 'Project Manager',
          image: require('../assets/Members/amy.jpg'),
        },
        {
          name: 'Janet Tang',
          id: 'janet',
          role: 'Project Manager',
          image: require('../assets/Members/janet.jpg'),
        },
        {
          name: 'Bowen Li',
          id: 'bowen',
          role: 'Photographer',
          image: require('../assets/Members/bowen.jpg'),
        },
        {
          name: 'Chris Gao',
          id: 'chris',
          role: 'VP Communications and Academics',
          image: require('../assets/Members/chris.jpg'),
        },
        {
          name: 'YoungRock Han',
          id: 'youngrock',
          role: 'Tech Director',
          image: require('../assets/Members/youngrock.jpg'),
        },
        {
          name: 'Karist Ng',
          id: 'karist',
          role: 'Tech Director',
          image: require('../assets/Members/karist.jpg'),
        },
        {
          name: 'Sherry Chen',
          id: 'sherry',
          role: 'First Year Representative',
          image: require('../assets/Members/sherry.jpg'),
        },
        {
          name: 'Ivy Chen',
          id: 'ivy',
          role: 'First Year Representative',
          image: require('../assets/Members/ivy.jpg'),
        },
        {
          name: 'Sean Wang',
          id: 'sean',
          role: 'First Year Representative',
          image: require('../assets/Members/sean.jpg'),
        },
      ],
    };
  },
};
</script>

<style scoped>
.volunteers{
  width: 90%;
  margin: auto;
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

.internals, .restOfBoard {
  margin-left: auto;
  margin-right: auto;
  display: block;
  text-align: center;
}
.avatar img{
  border-radius: 0%;
  width: 30vw;
  height: 44.97vw;
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
.members li{
  display: inline-grid;
  padding: 10px 20px 10px 20px;
  font-weight: bold;
}

@media screen and (max-width: 992px) {
  h2 {
    font-size: 25px;
  }
  .members li{
    width: 95%;
  }
}
</style>
