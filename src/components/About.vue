<template>
  <div class="members">
    <div class="intro-container-1">
      <div class="intro-img">
        <b-img-lazy
          src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139816/MCSS/About/recruiting_zt7mob.png"
          alt="recruitment"
          width=300
          height=300
          style="border-radius: 7px; margin-top: 5%;"
        />
      </div>
      <div class="centered">
        <h1 class="about-us">
          ABOUT <span>MCSS</span>
        </h1>
        <hr class="hr1">
        <p>MCSS, McGill Chinese Students' Society is the largest and most influential cultural
          student organization in Eastern Canada.
          With over <strong>15 events per year and 40 years of history</strong>, we provide
          a variety of events to our <strong>over 1,500 active members</strong> and help
          our members succeed in school and life.
          Our short-term goal is to provide our students with valuable events to make their
          student life more meaningful, while our long-term goal is to motivate and encourage
          our students to give back to their community and excel academically by providing
          them with helpful services including seminars, lessons, and talks.
          <br /><br />
          MCSS is a non-profit organization registered under the Students' Society of
          McGill University.
          All our proceeds either go to charity or are used to provide our students with
          more valuable services.
          <strong>Our events range from largescale shows to career planning
          and information seminars. In addition, we organize dinner outings,
          networking opportunities and parties for our members.</strong>
          </p>
      </div>
    </div>
    <hr class="hr2">

    <div class="intro-container-2">
      <div class="centered">
        <h1>WHY <span>MCSS</span></h1>
        <hr class="hr1">
        <p>MCSS has had a long and storied history of amazing
          events, from <strong>our annual Ski and New York Trips, to Be There or Be Square and
          hosting Wong Fu Productions.</strong>
          <br /><br />
          With MCSS, you’ll create unforgettable memories, have a blast, and learn a thing or
          two about event planning in the process. MCSS is a fun, loving, and close-knit
          family away from home!
          <br /><br />
          We accept executives from all around the world;
          <strong>you don’t have to be Chinese or even Asian!</strong>
          <br /><br />
          </p>
      </div>
      <div class="intro-img">
        <b-img-lazy
          src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139816/MCSS/About/group-pic_jfk8ol.jpg"
          alt="Group Picture!"
          width=466
          height=300
          style="border-radius: 7px;" class="group-pic"
        />
      </div>
    </div>
    <hr class="hr2">

    <h1>OUR <span>TEAM</span></h1>
    <hr class="hr3">
    <br />

    <div class="board" >

      <div class="president">
        <b-row>
          <b-col sm="12" md="6" class="avatar" v-on:click="toggleAmy()">
            <transition name="flip">
              <div class="card-container-pres" v-if="amyflipped">
                <div class="member-desc">
                  <p><strong>Hometown:</strong> Ottawa, ON</p>
                  <p><strong>Major:</strong> U1, Neuroscience</p>
                </div>
              </div>
              <b-img-lazy
                src="https://res.cloudinary.com/die52atcc/image/upload/v1603139840/MCSS/Members/amy_v1ody6.jpg"
                blank-src="https://res.cloudinary.com/die52atcc/image/upload/v1603139815/MCSS/About/placeholder_wox9nt.png"
                alt="Co-President"
              />
            </transition>
            <p class="name">Amy Li</p>
            <p class="role">Co-President</p>
            <br /><br />
          </b-col>
          <b-col sm="12" md="6" class="avatar" v-on:click="toggleAnnie()">
            <transition name="flip">
              <div class="card-container-pres" v-if="annieflipped">
                <div class="member-desc">
                  <p><strong>Hometown:</strong> Vancouver, BC</p>
                  <p><strong>Major:</strong> U2 Physiology</p>
                </div>
              </div>
              <b-img-lazy
                src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139841/MCSS/Members/annie_tcpezu.jpg"
                blank-src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139815/MCSS/About/placeholder_wox9nt.png"
                alt="Co-President"
              />
            </transition>
            <p class="name">Annie Sun</p>
            <p class="role">Co-President</p>
          </b-col>
        </b-row>
      </div>
      <br /><br />

      <div class="president">
        <b-row>
          <b-col sm="12" md="6" class="avatar" v-on:click="toggleOwen()">
            <transition name="flip">
              <div class="card-container-pres" v-if="owenflipped">
                <div class="member-desc">
                  <p><strong>Hometown:</strong> Beijing, CN</p>
                  <p><strong>Major:</strong> U2 CS and East Asian Studies</p>
                </div>
              </div>
              <b-img-lazy
                src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139844/MCSS/Members/owen_kyhydw.jpg"
                blank-src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139815/MCSS/About/placeholder_wox9nt.png"
                alt="Senior Advisor"
              />
            </transition>
            <p class="name">Owen Bai</p>
            <p class="role">Senior Advisor</p>
            <br /><br />
          </b-col>
          <b-col sm="12" md="6" class="avatar" v-on:click="toggleEmily()">
            <transition name="flip">
              <div class="card-container-pres" v-if="emilyflipped">
                <div class="member-desc">
                  <p><strong>Hometown:</strong> Vancouver, BC</p>
                  <p><strong>Major:</strong> U3 Physiotherapy</p>
                </div>
              </div>
              <b-img-lazy
                src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139841/MCSS/Members/emily_z_irrh4y.jpg"
                blank-src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139815/MCSS/About/placeholder_wox9nt.png"
                alt="Senior Advisor"
              />
            </transition>
            <p class="name">Emily Zhang</p>
            <p class="role">Senior Advisor</p>
          </b-col>
        </b-row>
      </div>
      <br /><br />

      <div class="restOfBoard">
        <b-row>
          <b-col sm="12" md="4" class="avatar"
            v-on:click="toggleCard(member)"
            v-for="member in boardMembers"
            :key="member.name"
          >
            <transition name="flip">
              <div class="card-container" v-if="member.flipped">
                <div class="member-desc">
                  <p><strong>Hometown:</strong> {{ member.hometown }}</p>
                  <p><strong>Major:</strong> {{ member.major }}</p>
                </div>
              </div>
              <b-img-lazy
                :src="member.image"
                blank-src="https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139815/MCSS/About/placeholder_wox9nt.png"
                offset="700"
                v-else
                v-bind:alt="member.name"
              />
            </transition>
            <p class="name">{{member.name}}</p>
            <p class="role">{{member.role}}</p>
            <br /><br />
          </b-col>
        </b-row>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'about',
  methods: {
    toggleCard(member) {
      // eslint-disable-next-line no-param-reassign
      member.flipped = !member.flipped;
    },
    toggleOwen() {
      this.owenflipped = !this.owenflipped;
    },
    toggleAmy() {
      this.amyflipped = !this.amyflipped;
    },
    toggleEmily() {
      this.emilyflipped = !this.emilyflipped;
    },
    toggleAnnie() {
      this.annieflipped = !this.annieflipped;
    },
  },
  data() {
    return {
      annieflipped: false,
      amyflipped: false,
      owenflipped: false,
      emilyflipped: false,
      boardMembers: [
        {
          name: 'Danielle Zhu',
          id: 'danielle',
          role: 'VP Internal',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139840/MCSS/Members/danielle_fe5cxn.jpg',
          hometown: 'Montreal QC',
          major: 'U2 Marketing & Digital Innovation',
          flipped: false,
        },
        {
          name: 'Jian Qiao He',
          id: 'mike',
          role: 'VP External',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139844/MCSS/Members/mike_eptzv7.jpg',
          hometown: 'Montreal QC',
          major: 'U2 Marketing',
          flipped: false,
        },
        {
          name: 'Gloria Ma',
          id: 'gloria',
          role: 'VP Internal',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139843/MCSS/Members/gloria_frhx9z.jpg',
          hometown: 'Hillsborough, NJ',
          major: 'U2 Biochem',
          flipped: false,
        },
        {
          name: 'Xi Ran Chen',
          id: 'xiran',
          role: 'VP Finance',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139845/MCSS/Members/xiran_kbjh5c.jpg',
          hometown: 'Montreal, QC',
          major: 'U1 Economics & Accounting',
          flipped: false,
        },
        {
          name: 'Melody Zhou',
          id: 'melody',
          role: 'Junior VP Finance',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139843/MCSS/Members/melody_ghlll9.jpg',
          hometown: 'Boston, MA',
          major: 'U2 Cognitive Science',
          flipped: false,
        },
        {
          name: 'Julian Qu',
          id: 'julian',
          role: 'Sponsorship Director',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139843/MCSS/Members/julian_bmz2km.jpg',
          hometown: 'Vancouver, BC',
          major: 'U1 Civil Engineering',
          flipped: false,
        },
        {
          name: 'Karist Ng',
          id: 'karist',
          role: 'Project Manager',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139843/MCSS/Members/karist_qzggqy.jpg',
          hometown: 'Thailand',
          major: 'U2 Materials Engineering',
          flipped: false,
        },
        {
          name: 'Jeremy Leung',
          id: 'jeremy',
          role: 'Project Manager',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139843/MCSS/Members/jeremy_ymbcml.jpg',
          hometown: 'Toronto, ON',
          major: 'U2 Microbiology & Immunology',
          flipped: false,
        },
        {
          name: 'Sherry Chen',
          id: 'sherry',
          role: 'Project Manager',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139845/MCSS/Members/sherry_lbmxrv.jpg',
          hometown: 'Chengdu, China',
          major: 'U1 Joint Political Science & Psychology',
          flipped: false,
        },
        {
          name: 'Chris Gao',
          id: 'chris',
          role: 'VP Communications and Academics',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139840/MCSS/Members/chris_q6kb0z.jpg',
          hometown: 'Markham, ON',
          major: 'U1 Psychology',
          flipped: false,
        },
        {
          name: 'Dimitri Yang',
          id: 'dimitri',
          role: 'VP Marketing and Communications',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139842/MCSS/Members/dimitri_sxtgdo.jpg',
          hometown: 'Vancouver, BC',
          major: 'U1 Neuroscience',
          flipped: false,
        },
        {
          name: 'YoungRock Han',
          id: 'youngrock',
          role: 'Social Director',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139845/MCSS/Members/youngrock_kc4n6f.jpg',
          hometown: 'Winnipeg, MB',
          major: 'U1 Nursing',
          flipped: false,
        },
        {
          name: 'Ivy Chen',
          id: 'ivy',
          role: 'VP Media',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139844/MCSS/Members/ivy_r0jpar.jpg',
          hometown: 'Toronto, ON',
          major: 'U0 Nursing',
          flipped: false,
        },
        {
          name: 'Dian Dian Dai',
          id: 'dian',
          role: 'Photographer',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139840/MCSS/Members/dian_q3x9cr.jpg',
          hometown: 'Toronto, ON',
          major: 'U1 Computer Science',
          flipped: false,
        },
        {
          name: 'Hattie Chen',
          id: 'hattie',
          role: 'Photographer',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139843/MCSS/Members/hattie_qblkwf.jpg',
          hometown: 'Montreal, QC',
          major: 'U2 Physical Therapy',
          flipped: false,
        },
        {
          name: 'Xinrui Li',
          id: 'xinrui',
          role: 'Webmaster',
          image: 'https://res.cloudinary.com/die52atcc/image/upload/q_auto,f_auto/v1603139845/MCSS/Members/xinrui_qdiho1.jpg',
          hometown: 'Montreal, QC',
          major: 'U2 Computer Science',
          flipped: false,
        },
      ],
    };
  },
};
</script>

<style scoped>
  .centered {
    margin-left: auto;
    margin-right: auto;
    display: block;
    text-align: center;
  }

  h1 {
    text-align: center;
    font-size: 30px;
    font-family: IKEABold;
  }

  h1 span {
    font-size: 30px;
    font-family: IKEABold;
    color: #be0819;
  }

  .intro-img {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .card-container {
    display: block;
    margin-right: auto;
    margin-left: auto;
    background-color: #be0819;
    border-radius: 7px;
    width: 80%;
    padding-top: 120%; /* Aspect Ratio */
    position: relative; /* If you want text inside of it */
    cursor: pointer;
    text-align: center;
    margin-bottom: 20px;
    -webkit-box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
    -moz-box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
    box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
    will-change: transform;
  }
  .card-container-pres {
    display: block;
    margin-right: auto;
    margin-left: auto;
    background-color: #be0819;
    border-radius: 7px;
    width: 60%;
    padding-top: 90%; /* Aspect Ratio */
    position: relative; /* If you want text inside of it */
    cursor: pointer;
    text-align: center;
    margin-bottom: 20px;
    -webkit-box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
    -moz-box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
    box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
    will-change: transform;
  }

  .flip-enter-active {
    transition: all 1s ease;
    transform-style: preserve-3d;
  }

  .flip-leave-active {
    display: none;
  }

  .flip-enter, .flip-leave {
    transform: rotateY(90deg);
    opacity: 0;
  }

  .member-desc {
    color: #fff;
    position: absolute;
    top: 40%;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    margin-left: 5px;
    margin-right: 5px;
  }

  .member-desc p, .member-desc p strong, p.name {
    font-size: 2rem;
    font-family: IKEABold;
  }

  p.role {
    font-size: 1.5rem;
    font-family: Proxima;
  }

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
    cursor: pointer;
  }
  .avatar .name{
    font-weight: bold;
    margin-bottom: 0;
  }

  .members li{
    display: inline-grid;
    padding: 10px 20px 10px 20px;
    font-weight: bold;
  }
  @media screen and (min-width: 840px) {
    .intro-container-1 p, .intro-container-2 p {
      margin-right: 10%;
      margin-left: 10%;
      margin-top: 2%;
      font-family: Proxima;
      font-size: 1.8rem;
      text-align: justify;
    }

    .intro-container-1 p strong, .intro-container-2 p strong {
      font-family: Proxima;
      font-size: 1.8rem;
    }

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
    .president img{
      width: 60% !important;
    }

    .card-container-pres {
      display: block;
      margin-right: auto;
      margin-left: auto;
      background-color: #be0819;
      border-radius: 7px;
      width: 60%;
      padding-top: 90%; /* Aspect Ratio */
      position: relative; /* If you want text inside of it */
      cursor: pointer;
      text-align: center;
      margin-bottom: 20px;
      -webkit-box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
      -moz-box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
      box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
      will-change: transform;
    }
  }
  @media screen and (max-width: 840px) {
    .intro-container-1 p, .intro-container-2 p {
      margin-right: 5%;
      margin-left: 5%;
      margin-top: 2%;
      font-family: Proxima;
      font-size: 1.8rem;
      text-align: justify;
    }

    .intro-container-1 p strong, .intro-container-2 p strong {
      font-family: Proxima;
      font-size: 1.8rem;
    }

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
  @media screen and (max-width: 767px) {
    h2 {
      font-size: 25px;
    }
    .members li{
      width: 95%;
    }
    .card-container-pres {
      display: block;
      margin-right: auto;
      margin-left: auto;
      background-color: #be0819;
      border-radius: 7px;
      width: 80%;
      padding-top: 120%; /* Aspect Ratio */
      position: relative; /* If you want text inside of it */
      cursor: pointer;
      text-align: center;
      margin-bottom: 20px;
      -webkit-box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
      -moz-box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
      box-shadow: 9px 10px 22px -8px rgba(209,193,209,.5);
      will-change: transform;
    }
  }
</style>
