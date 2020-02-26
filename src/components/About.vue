<template>
  <div class="members">
    <div class="intro-container-1">
      <div class="intro-img"><b-img-lazy :src="require('../assets/About/recruiting.png')" alt="recruitment" width=300 height=300 style="border-radius: 7px; margin-top: 5%;" /></div>
      <div style=" margin-left: auto; margin-right: auto; display: block; text-align: center;">
        <h1 class="about-us" style="text-align: center; font-size: 30px; font-family: IKEABold;">ABOUT <span style="font-size: 30px; color: #be0819;">MCSS</span></h1>
        <hr class="hr1">
        <p style="margin-right: 10%; margin-left: 10%; margin-top: 2%; font-family: Proxima; font-size: 1.5rem;">MCSS, McGill Chinese Students' Society is the largest and most influential cultural student 
          organization in Eastern Canada. With over <strong style="font-family: Proxima; font-size: 1.5rem;">15 events per year and 40 years of history</strong>, we provide 
          a variety of events to our <strong style="font-family: Proxima; font-size: 1.5rem;">over 1,500 active members</strong> and help our members succeed in school and life. 
          Our short-term goal is to provide our students with valuable events to make their student life more 
          meaningful, while our long-term goal is to motivate and encourage our students to give back to their 
          community and excel academically by providing them with helpful services including seminars, lessons, 
          and talks.
          <br /><br />
          MCSS is a non-profit organization registered under the Students' Society of McGill University. 
          All our proceeds either go to charity or are used to provide our students with more valuable 
          services. <strong style="font-family: Proxima; font-size: 1.5rem;">Our events range from largescale shows to career planning and information seminars. 
          In addition, we organize dinner outings, networking opportunities and parties for our members.</strong>
          </p>
      </div>
    </div>
    <hr class="hr2">

    <div class="intro-container-2">
      <div style=" margin-left: auto; margin-right: auto; display: block; text-align: center;">
        <h1 style="text-align: center; font-size: 30px; font-family: IKEABold;">WHY <span style="font-size: 30px; color: #be0819;">MCSS</span></h1>
        <hr class="hr1">
        <p style="margin-right: 10%; margin-left: 10%; margin-top: 2%; font-family: Proxima; font-size: 1.5rem;">MCSS has had a long and storied history of amazing 
          events, from <strong style="font-family: Proxima; font-size: 1.5rem;">our annual Ski and New York Trips, to Be There or Be Square and 
          hosting Wong Fu Productions.</strong>
          <br /><br /> 
          With MCSS, you’ll create unforgettable memories, have a blast, and learn a thing or 
          two about event planning in the process.
          <br /><br /> 
          MCSS is a fun, loving, and close-knit family away from home!
          <br /><br /> 
          We accept executives from all around the world; <strong style="font-family: Proxima; font-size: 1.5rem;">you don’t have to be Chinese or even Asian!</strong>
          <br /><br /> 
          </p>
      </div>
      <div class="intro-img"><b-img-lazy :src="require('../assets/About/group-pic.jpg')" alt="Group Picture!" width=466 height=300 style="border-radius: 7px;" class="group-pic" /></div>
    </div>
    <hr class="hr2">

    <h1 style="text-align: center; font-size: 30px; font-family: IKEABold;">OUR <span style="font-size: 30px; color: #be0819;">TEAM</span></h1>
    <hr class="hr3">
    <br />

    <div class="board" >

      <div class="president">
        <b-row>
          <b-col sm="12" md="6" class="avatar">
            <b-img-lazy :src="require('../assets/Members/owen.jpg')"
            :blank-src="require('../assets/About/placeholder.png')" alt="Co-President"/>
            <p class="name" style="font-size: 2rem;">Owen Bai</p>
            <p class="role" style="font-size: 1.5rem;">Co-President</p>
          </b-col>
          <b-col sm="12" md="6" class="avatar">
            <b-img-lazy :src="require('../assets/Members/annie.jpg')"
            :blank-src="require('../assets/About/placeholder.png')" alt="Co-President"/>
            <p class="name" style="font-size: 2rem;">Annie Sun</p>
            <p class="role" style="font-size: 1.5rem;">Co-President</p>
          </b-col>
        </b-row>
      </div>
      <br /><br />

      <div class="internals">
        <b-row>
          <b-col sm="12" md="4" class="avatar">
            <b-img-lazy :src="require('../assets/Members/emily_z.jpg')"
            :blank-src="require('../assets/About/placeholder.png')" alt="VP Internal"/>
            <p class="name" style="font-size: 2rem;">Emily Zhang</p>
            <p class="role" style="font-size: 1.5rem;">VP Internal</p>
          </b-col>
          <b-col sm="12" md="4" class="avatar">
            <b-img-lazy :src="require('../assets/Members/felix.jpg')"
            :blank-src="require('../assets/About/placeholder.png')" alt="VP External"/>
            <p class="name" style="font-size: 2rem;">Felix Lu </p>
            <p class="role" style="font-size: 1.5rem;">VP External</p>
          </b-col>
          <b-col sm="12" md="4" class="avatar">
            <b-img-lazy :src="require('../assets/Members/amy.jpg')"
            :blank-src="require('../assets/About/placeholder.png')" alt="VP Internal"/>
            <p class="name" style="font-size: 2rem;">Amy Li </p>
            <p class="role" style="font-size: 1.5rem;">VP Internal</p>
          </b-col>
        </b-row>
      </div>
      <br /><br />

      <div class="restOfBoard">
        <b-row>
          <b-col sm="12" md="4" class="avatar" v-for="member in boardMembers" :key="member.name">
            <b-img-lazy :src="member.image" :blank-src="require('../assets/About/placeholder.png')"
            offset="700" v-bind:alt="member.name"/>
            <p class="name" style="font-size: 2rem;">{{member.name}}</p>
            <p class="role" style="font-size: 1.5rem;">{{member.role}}</p>
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
  name: 'about',
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
          name: 'Dian Dian Dai',
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
          name: 'Karist Ng',
          id: 'karist',
          role: 'Project Manager',
          image: require('../assets/Members/karist.jpg'),
        },
        {
          name: 'Jeremy Leung',
          id: 'jeremy',
          role: 'Project Manager',
          image: require('../assets/Members/jeremy.jpg'),
        },
        {
          name: 'Sherry Chen',
          id: 'sherry',
          role: 'Project Manager',
          image: require('../assets/Members/sherry.jpg'),
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
.members{
  width: 90%;
  margin: auto;
}
.hr3{
    background-color: #be0819;
    width: 15%;
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
.internals, .restOfBoard {
  margin-left: auto;
  margin-right: auto;
  display: block;
  text-align: center;
}
.avatar img{
  border-radius: 7px;
  width: 80%;
  height: auto;
  margin-bottom: 20px;
  max-width: 350px;
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
  .group-pic {
    width: 80%;
    height: auto;
  }
  .about-us {
    margin-top: 5%;
  }
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
