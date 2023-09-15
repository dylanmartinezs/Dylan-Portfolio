<template>
  <div class="home-container">
    <app-header></app-header>
    <div class="home-hero parallax">
      <div class="home-container01">
        <div class="home-container02">
          <img
            alt="image"
            src="https://i.imgur.com/4SjzurP.png"
            class="home-image"
          />
          <div class="home-card">
            <h1 class="home-text HeadingOne">Dylan Martínez Sánchez</h1>
            <h2 class="home-text01 HeadingOne">
              Game Designer, 3D Artist and Unreal Developer
            </h2>
            <span class="home-text02">
              I am a passionate for videogames, with experience in 3D design and
              Unreal Engine development. Trained in the usage of Unreal and in
              game design, I am looking forward to start building my career and to
              grow as a professional in the videogame industry.
            </span>
            <div class="home-container03">
              <div class="home-container04">
                <primary-pink-button
                  button="contact me"
                  rootClassName="primary-pink-button-root-class-name"
                ></primary-pink-button>
              </div>
              <outline-gray-button
                button="read more"
                rootClassName="outline-gray-button-root-class-name"
              ></outline-gray-button>
            </div>
            <div class="home-container05">
              <img
                alt="unreal engine logo"
                src="https://cdn2.unrealengine.com/ue-logo-stacked-unreal-engine-w-677x545-fac11de0943f.png"
                class="home-image01"
              />
              <img
                alt="blender logo"
                src="https://assets.stickpng.com/images/62066bb2d7b91b0004122604.png"
                class="home-image02"
              />
              <img
                alt="image"
                src="https://upload.wikimedia.org/wikipedia/commons/4/4d/DaVinci_Resolve_Studio.png"
                class="home-image03"
              />
              <img
                alt="image"
                src="https://affinity.help/_assets/af_logo_white_pt_trans_rgb_noAffinity.png"
                class="home-image04"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="https://i.imgur.com/j5fdsn8.png"
        class="home-image05"
      />
    </div>
    <section class="home-features">
      <h1 class="home-text03">
        <span class="HeadingOne">Which are my specialities</span>
        <br />
      </h1>
      <div class="home-container06">
        <div class="home-container07">
          <feature-card
            text="Sculpting ideas into 3D wonders: where vision meets dimension!"
            title="Components"
            new_prop="3D Art"
            image_src="https://cdn-icons-png.flaticon.com/512/8213/8213440.png"
            rootClassName="feature-card-root-class-name"
          ></feature-card>
          <feature-card
            text="Designing dreams, crafting worlds. From the concept to reality."
            new_prop="Game Design"
            image_src="https://cdn-icons-png.flaticon.com/512/8213/8213526.png"
            rootClassName="feature-card-root-class-name1"
          ></feature-card>
          <feature-card
            text="The most powerful game engine. The limit is no longer imagination!"
            title="Less Code"
            new_prop="Unreal Engine"
            image_src="   https://cdn-icons-png.flaticon.com/512/8002/8002123.png "
            rootClassName="feature-card-root-class-name2"
          ></feature-card>
        </div>
      </div>
    </section>
    <section class="home-testimonials">
      <img alt="image" src="/bottom.svg" class="home-bottom-wave-image" />
      <img
        alt="image"
        src="https://i.imgur.com/giU3eW5.png"
        class="home-top-wave-image"
      />
    </section>
    <div class="home-container08">
      <section class="home-contaier">
        <div class="home-container09">
          <h1 id="projects" class="home-text06 HeadingTwo">
            Some of the projects I&apos;ve worked on
          </h1>
          <span class="home-text07">
            I will be posting in this section all the projects I have been working
            on. As for now, there&apos;s only one, as I am just getting started in
            the videogame industry. But I sure hope this section will be filled
            with exciting new adventures I get the opportunity to live!
          </span>
        </div>
        <div class="home-container10">
          <div class="home-container11"><div class="home-container12"></div></div>
          <div class="home-container13">
            <h1 class="home-text08 HeadingTwo">Tears of Elara</h1>
            <list-item
              title="2. Performance Analyze"
              new_prop="What is Tears of Elara?"
              description="Tears of Elara is an open world RPG project, set in a world where magic has changed everything."
            ></list-item>
            <list-item-dp
              new_prop="My role"
              description="During my internships in Orenji games, my main task was to be the game designer for ToE. I made the GDD and coordinated creative decisions. "
              description1="I also helped with the environment building; designed and implemented Inventory, Quests and Dialogue systems; and designed some characters in 3D"
              rootClassName="list-item-dp-root-class-name"
            ></list-item-dp>
          </div>
        </div>
      </section>
      <div class="home-container14">
        <iframe
          src="https://www.youtube.com/embed/FQ0jZcbIhJo?si=oaZkvmT8Cxd-QzG3"
          class="home-iframe"
        ></iframe>
      </div>
      <div class="home-container15">
        <div class="home-div">
          <DangerousHTML
            html="<script src='https://cdn.commoninja.com/sdk/latest/commonninja.js' defer></script>
  <div class='commonninja_component pid-2e80d0c8-94ca-4db7-94f8-9aa05200b7ae'></div>"
          ></DangerousHTML>
        </div>
      </div>
      <img alt="image" src="/bottom.svg" class="home-bottom-wave-image1" />
    </div>
    <section class="home-testimonials1">
      <img alt="image" src="/top.svg" class="home-top-wave-image1" />
    </section>
    <div class="home-container16">
      <div class="home-container17">
        <h1 id="portfolio" class="home-text09 HeadingTwo">
          My portfolio and social media
        </h1>
        <span class="home-text10">
          <span>
            In these pages, you will find my most important artwork and
            information.
          </span>
          <br />
        </span>
        <div class="home-social-bar">
          <div class="home-artstation">
            <div class="home-container18">
              <img
                alt="image"
                src="https://img.icons8.com/?size=256&amp;id=MhdWZX0TILMX&amp;format=png&amp;color=1A6DFF,C822FF"
                class="home-image06"
              />
              <h1 class="home-text13">Artstation</h1>
            </div>
            <a
              href="https://www.artstation.com/ravnfrost"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link"
            >
              <img
                alt="image"
                src="https://www.artstation.com/api/v2/image_capture/digital_cards/ravnfrost.png"
                class="home-image07"
              />
            </a>
          </div>
          <div class="home-artstation1">
            <div class="home-container19">
              <img
                alt="image"
                src="https://img.icons8.com/?size=256&amp;id=79107&amp;format=png"
                class="home-image08"
              />
              <h1 class="home-text14">Sketchfab</h1>
            </div>
            <a
              href="https://sketchfab.com/dylanmartinezs"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link1"
            >
              <img
                alt="image"
                src="https://i.imgur.com/ce4Zbua.png"
                class="home-image09"
              />
            </a>
          </div>
          <div class="home-artstation2">
            <div class="home-container20">
              <img
                alt="image"
                src="https://img.icons8.com/?size=256&amp;id=44019&amp;format=png&amp;color=1A6DFF,C822FF"
                class="home-image10"
              />
              <h1 class="home-text15">LinkedIn</h1>
            </div>
            <a
              href="https://www.linkedin.com/in/dylanm99/"
              target="_blank"
              rel="noreferrer noopener"
              class="home-link2"
            >
              <img
                alt="image"
                src="https://i.imgur.com/ryrGlIO.jpg"
                class="home-image11"
              />
            </a>
          </div>
        </div>
      </div>
      <h1 class="home-text16 HeadingTwo">And there&apos;s more!</h1>
      <div class="home-gallery">
        <div class="home-container21">
          <div class="home-container22">
            <div class="home-container23">
              <gallery-card2
                title="Lua"
                image_src="https://i.imgur.com/NXWcOB4.png"
                description="Lua cat model for a school project"
                rootClassName="rootClassName2"
              ></gallery-card2>
            </div>
            <div class="home-container24">
              <gallery-card2
                title="Samhain mask"
                image_src="https://i.imgur.com/IQHlGO9.png"
                description="Mask for the Samhain (Halloween) festival"
                rootClassName="rootClassName3"
              ></gallery-card2>
            </div>
          </div>
          <div class="home-container25">
            <gallery-card2
              title="Minikrab"
              image_src="https://i.imgur.com/62mvzI8.png"
              description="Minikrab sculpt, an enemy from Tears of Elara"
              rootClassName="rootClassName1"
            ></gallery-card2>
          </div>
        </div>
        <div class="home-container26">
          <gallery-card2
            title="Demogorgon"
            image_src="https://i.imgur.com/cev8IxT.png"
            description='Stylized Demogorgon from the Netflix series "Stranger Things"'
            rootClassName="rootClassName4"
          ></gallery-card2>
        </div>
      </div>
      <div class="home-gallery1">
        <div class="home-container27">
          <gallery-card21
            title="Wraith's kunai"
            image_src="https://i.imgur.com/j7Tnggt.jpg"
            description="The kunai the character Wraith has as a Heirloom in Apex Legends"
            rootClassName="rootClassName4"
          ></gallery-card21>
        </div>
        <div class="home-container28">
          <div class="home-container29">
            <gallery-card21
              title="Bastiodon"
              image_src="https://i.imgur.com/d7uxbCL.png"
              description="Bastiodon low-poly model, one of my first 3D designs ever."
              rootClassName="rootClassName"
            ></gallery-card21>
          </div>
          <div class="home-container30">
            <div class="home-container31">
              <gallery-card21
                title="Tora"
                image_src="https://i.imgur.com/n0HwNh5.png"
                description="Tora cat, for the same project as Lua"
                rootClassName="rootClassName2"
              ></gallery-card21>
            </div>
            <div class="home-container32">
              <gallery-card21
                title="Pixel bow"
                image_src="https://i.imgur.com/f90VIkZ.png"
                description="Hytale style bow, with pixel perfect textures and PBR maps"
                rootClassName="rootClassName3"
              ></gallery-card21>
            </div>
          </div>
        </div>
      </div>
      <img alt="image" src="/bottom.svg" class="home-bottom-wave-image2" />
    </div>
    <div class="home-hero1">
      <span class="home-text17">
        <span>CONTACT</span>
        <br />
      </span>
      <h1 class="home-text20">Are you convinced yet?</h1>
      <div class="home-container33">
        <a
          href="mailto:dylanmartinezs@outlook.com?subject=Website contact"
          class="home-link3 button"
        >
          <span class="home-text21">
            <span class="home-text22">LET&apos;S TALK</span>
            <br />
          </span>
        </a>
      </div>
      <img
        alt="image"
        src="https://i.imgur.com/W6gcCuR.jpg"
        class="home-image12"
      />
      <img alt="image" src="/top.svg" class="home-top-wave-image2" />
    </div>
    <footer class="home-footer">
      <router-link to="/" class="home-navlink Large">
        Dylan Martínez Sánchez
      </router-link>
      <span class="home-text24">
        Game designer, 3D artists and Unreal developer
      </span>
      <div class="home-icon-group">
        <img
          alt="image"
          src="https://img.icons8.com/?size=256&amp;id=MhdWZX0TILMX&amp;format=png&amp;color=1A6DFF,C822FF"
          class="home-image13"
        />
        <img
          alt="image"
          src="https://img.icons8.com/?size=256&amp;id=79107&amp;format=png"
          class="home-image14"
        />
        <img
          alt="image"
          src="https://img.icons8.com/?size=256&amp;id=44019&amp;format=png&amp;color=1A6DFF,C822FF"
          class="home-image15"
        />
        <img
          alt="image"
          src="https://img.icons8.com/?size=256&amp;id=43625&amp;format=png"
          class="home-image16"
        />
        <img
          alt="image"
          src="https://img.icons8.com/?size=256&amp;id=bYzsf9Bmocst&amp;format=png&amp;color=1A6DFF,C822FF"
          class="home-image17"
        />
      </div>
    </footer>
  </div>
</template>

<script>
import DangerousHTML from 'dangerous-html/vue'

import AppHeader from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import ListItem from '../components/list-item'
import ListItemDp from '../components/list-item-dp'
import GalleryCard2 from '../components/gallery-card2'
import GalleryCard21 from '../components/gallery-card21'

export default {
  name: 'Home',
  components: {
    AppHeader,
    PrimaryPinkButton,
    OutlineGrayButton,
    FeatureCard,
    ListItem,
    ListItemDp,
    DangerousHTML,
    GalleryCard2,
    GalleryCard21,
  },
  metaInfo: {
    title: 'Dylan Martínez - Portfolio',
    meta: [
      {
        property: 'og:title',
        content: 'Dylan Martínez - Portfolio',
      },
    ],
  },
}
</script>

<style scoped>
.home-container {
  width: 100%;
  height: auto;
  display: flex;
  min-height: 100vh;
  overflow-x: hidden;
  align-items: center;
  flex-direction: column;
  background-color: #16121a;
}
.home-hero {
  display: flex;
  align-self: stretch;
  background-size: cover;
  background-repeat: no-repeat;
}
.home-container01 {
  height: 100vh;
  align-items: flex-start;
  justify-content: center;
}
.home-container02 {
  width: 100vw;
  height: 100%;
  display: flex;
  object-fit: cover;
  align-items: center;
  justify-content: space-between;
}
.home-image {
  width: 716px;
  height: 683px;
  align-self: flex-end;
  object-fit: cover;
  margin-bottom: 5rem;
}
.home-card {
  flex: 0 0 auto;
  width: 712px;
  display: flex;
  padding: var(--dl-space-space-tripleunit);
  z-index: 1;
  align-self: center;
  box-shadow: 0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)!important;
  margin-top: 0px;
  align-items: flex-start;
  margin-left: var(--dl-space-space-twelveunits);
  margin-right: 10vw;
  border-radius: var(--dl-radius-radius-radius1);
  flex-direction: column;
  backdrop-filter: saturate(200%) blur(30px);
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.7);
}
.home-text {
  text-align: center;
  background-image: linear-gradient(-310deg,#7928ca,#ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-text01 {
  color: #d7deea;
  font-size: 1.45rem;
  align-self: flex-start;
  text-align: left;
  border-color: rgba(12, 14, 16, 0);
  border-width: 1px;
  border-radius: var(--dl-radius-radius-radius5);
  margin-bottom: var(--dl-space-space-unitandahalfunit);
}
.home-text02 {
  color: rgba(228, 228, 228, 0.72);
  font-size: 17px;
  align-self: stretch;
  text-align: left;
  margin-right: var(--dl-space-space-tripleunit);
  margin-bottom: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-tripleunit);
}
.home-container03 {
  display: flex;
  margin-top: var(--dl-space-space-unitandahalfunit);
  align-items: flex-start;
  margin-bottom: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: flex-end;
}
.home-container04 {
  display: flex;
  align-items: flex-start;
  margin-right: var(--dl-space-space-unit);
  flex-direction: row;
  justify-content: flex-end;
}
.home-container05 {
  flex: 0 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-self: stretch;
  margin-top: var(--dl-space-space-halfunit);
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
}
.home-image01 {
  width: 7vw;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  align-self: center;
  object-fit: cover;
  transition: 0.3s;
}
.home-image01:hover {
  width: 8vw;
  height: auto;
}
.home-image02 {
  width: 7vw;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  align-self: center;
  object-fit: cover;
  transition: 0.3s;
}
.home-image02:hover {
  width: 8vw;
  height: auto;
}
.home-image03 {
  width: 6vw;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  align-self: center;
  object-fit: cover;
  transition: 0.3s;
}
.home-image03:hover {
  width: 7vw;
  height: auto;
}
.home-image04 {
  width: 6vw;
  height: auto;
  padding: var(--dl-space-space-halfunit);
  align-self: center;
  object-fit: cover;
  transition: 0.3s;
}
.home-image04:hover {
  width: 7vw;
  height: auto;
}
.home-image05 {
  left: 0px;
  width: 100vw;
  bottom: 0px;
  filter: invert(93.5%) sepia(14%) saturate(1068%) hue-rotate(227deg) brightness(96%) contrast(97%);
  height: auto;
  margin: auto;
  z-index: 120;
  position: absolute;
  object-fit: cover;
}
.home-features {
  gap: var(--dl-space-space-unit);
  width: 100%;
  display: flex;
  z-index: 1;
  flex-wrap: wrap;
  max-width: 1320px;
  align-self: center;
  align-items: flex-start;
  padding-top: var(--dl-space-space-sixunits);
  padding-left: var(--dl-space-space-unit);
  padding-right: var(--dl-space-space-unit);
  flex-direction: row;
  padding-bottom: var(--dl-space-space-sixunits);
  justify-content: center;
  background-color: #16121a;
}
.home-text03 {
  margin-bottom: var(--dl-space-space-unit);
  background-image: linear-gradient(310deg,#7928ca,#ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-container06 {
  flex: 0 0 auto;
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-container07 {
  gap: 10vw;
  width: 95vw;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  margin-bottom: var(--dl-space-space-unitandahalfunit);
  flex-direction: row;
  justify-content: center;
}
.home-testimonials {
  gap: 0;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
}
.home-bottom-wave-image {
  top: auto;
  left: auto;
  right: 0px;
  width: 100%;
  bottom: -5px;
  filter: invert(96%);
  transform: scaleY(50%);
  object-fit: cover;
  margin-bottom: -3rem;
}
.home-top-wave-image {
  top: -5px;
  left: auto;
  right: 0px;
  width: 100%;
  bottom: auto;
  filter: invert(96%);
  transform: scale();
  object-fit: cover;
}
.home-container08 {
  width: 100%;
  height: auto;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.home-contaier {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  max-width: 1320px;
  align-items: center;
  padding-top: var(--dl-space-space-tripleunit);
  padding-left: var(--dl-space-space-tripleunit);
  padding-right: var(--dl-space-space-tripleunit);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-tripleunit);
}
.home-container09 {
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-text06 {
  font-size: 2.5rem;
  margin-top: var(--dl-space-space-unitandahalfunit);
  background-image: linear-gradient(-310deg,#7928ca,#ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-text07 {
  color: #67748e;
  text-align: center;
  font-weight: 400;
}
.home-container10 {
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  margin-top: var(--dl-space-space-tripleunit);
  align-items: center;
  flex-direction: row;
  justify-content: center;
}
.home-container11 {
  width: 591px;
  height: 404px;
  display: flex;
  position: relative;
  box-shadow: 0 8px 26px -4px hsla(0,0%,8%,.15),0 8px 9px -5px hsla(0,0%,8%,.06)!important;
  transition: 0.3s;
  align-items: center;
  padding-top: var(--dl-space-space-sixunits);
  padding-left: var(--dl-space-space-sixunits);
  border-radius: var(--dl-radius-radius-radius1);
  padding-right: var(--dl-space-space-sixunits);
  flex-direction: column;
  padding-bottom: var(--dl-space-space-doubleunit);
  background-size: cover;
  justify-content: center;
  background-image: url('https://i.imgur.com/zRAkhIq.png');
  background-position: center;
}
.home-container11:hover {
  width: 606px;
  transform: scale(1.04);
  margin-right: 0px;
}
.home-container12 {
  top: 0px;
  left: 10px;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: var(--dl-radius-radius-radius1);
}
.home-container13 {
  width: 468px;
  display: flex;
  align-items: flex-start;
  margin-left: var(--dl-space-space-fourunits);
  flex-direction: column;
}
.home-text08 {
  align-self: flex-start;
  margin-top: var(--dl-space-space-halfunit);
  margin-left: var(--dl-space-space-unit);
  background-image: linear-gradient(-310deg,#7928ca,#ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-container14 {
  width: 50vw;
  height: 50wh;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-iframe {
  width: 50vw;
  height: 28.5vw;
  margin-top: var(--dl-space-space-doubleunit);
  margin-left: var(--dl-space-space-doubleunit);
  margin-right: var(--dl-space-space-doubleunit);
  border-radius: var(--dl-radius-radius-radius75);
  margin-bottom: var(--dl-space-space-doubleunit);
}
.home-container15 {
  display: flex;
  align-self: center;
  align-items: stretch;
  flex-direction: row;
  justify-content: space-between;
}
.home-div {
  display: contents;
}
.home-bottom-wave-image1 {
  top: auto;
  left: auto;
  right: 0px;
  width: 100%;
  bottom: -5px;
  filter: invert(96%);
  transform: scaleY(50%);
  object-fit: cover;
  margin-bottom: -5rem;
}
.home-testimonials1 {
  gap: 0;
  flex: 0 0 auto;
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
}
.home-top-wave-image1 {
  left: auto;
  right: 0px;
  width: 100%;
  bottom: auto;
  filter: invert(96%);
  transform: scaleY(50%);
  object-fit: cover;
}
.home-container16 {
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
}
.home-container17 {
  gap: var(--dl-space-space-unitandahalfunit);
  width: 100vw;
  display: flex;
  align-items: stretch;
  padding-left: var(--dl-space-space-twelveunits);
  padding-right: var(--dl-space-space-twelveunits);
  flex-direction: column;
}
.home-text09 {
  font-size: 2.5rem;
  margin-top: var(--dl-space-space-unitandahalfunit);
  text-align: center;
  background-image: linear-gradient(-310deg,#7928ca,#ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-text10 {
  color: #67748e;
  align-self: center;
  margin-top: -1rem;
  font-weight: 400;
}
.home-social-bar {
  gap: var(--dl-space-space-sixunits);
  height: auto;
  display: flex;
  padding: var(--dl-space-space-unit);
  flex-wrap: wrap;
  align-self: stretch;
  align-items: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  justify-content: center;
}
.home-artstation {
  gap: var(--dl-space-space-unit);
  width: 333px;
  height: 477px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-container18 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-image06 {
  width: var(--dl-size-size-tripleunit);
  object-fit: cover;
  margin-right: var(--dl-space-space-unitandahalfunit);
}
.home-text13 {
  font-size: 2rem;
  background-image: linear-gradient(-310deg,#7928ca,#ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-link {
  display: contents;
}
.home-image07 {
  width: 300px;
  height: 328px;
  box-shadow: 5px 5px 10px 0px #000000;
  object-fit: cover;
  transition: 0.3s;
  border-color: #7f1dc9;
  border-width: 5px;
  border-radius: var(--dl-radius-radius-radius75);
  text-decoration: none;
}
.home-image07:hover {
  width: 353px;
  height: 363px;
}
.home-artstation1 {
  gap: var(--dl-space-space-unit);
  width: 333px;
  height: 477px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-container19 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-image08 {
  width: 63px;
  height: 58px;
  object-fit: cover;
  margin-right: var(--dl-space-space-unitandahalfunit);
}
.home-text14 {
  font-size: 2rem;
  background-image: linear-gradient(-310deg,#7928ca,#ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-link1 {
  display: contents;
}
.home-image09 {
  width: 300px;
  height: 328px;
  box-shadow: 5px 5px 10px 0px #000000;
  object-fit: cover;
  transition: 0.3s;
  border-color: #7f1dc9;
  border-width: 5px;
  border-radius: var(--dl-radius-radius-radius75);
  text-decoration: none;
}
.home-image09:hover {
  width: 333px;
  height: 363px;
}
.home-artstation2 {
  gap: var(--dl-space-space-unit);
  width: 333px;
  height: 477px;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.home-container20 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-image10 {
  width: 68px;
  height: auto;
  padding: .25rem;
  object-fit: cover;
  margin-right: var(--dl-space-space-unitandahalfunit);
}
.home-text15 {
  font-size: 2rem;
  background-image: linear-gradient(-310deg,#7928ca,#ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-link2 {
  display: contents;
}
.home-image11 {
  width: 300px;
  height: 328px;
  box-shadow: 5px 5px 10px 0px #000000;
  object-fit: cover;
  transition: 0.3s;
  border-color: #7f1dc9;
  border-width: 5px;
  border-radius: var(--dl-radius-radius-radius75);
  text-decoration: none;
}
.home-image11:hover {
  width: 355px;
  height: 363px;
}
.home-text16 {
  font-size: 2.5rem;
  margin-top: var(--dl-space-space-unitandahalfunit);
  text-align: center;
  background-image: linear-gradient(-310deg,#7928ca,#ff0080);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.home-gallery {
  height: 1000px;
  display: flex;
  max-width: 1400px;
  align-items: center;
  padding-top: 0px;
  padding-left: 48px;
  padding-right: 48px;
  padding-bottom: 0px;
}
.home-container21 {
  flex: 3;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-container22 {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.home-container23 {
  flex: 1;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-container24 {
  flex: 1;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-container25 {
  flex: 1;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
  flex-direction: column;
}
.home-container26 {
  flex: 2;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-gallery1 {
  width: 100%;
  height: 1000px;
  display: flex;
  max-width: 1400px;
  align-items: center;
  padding-top: 0px;
  padding-left: 48px;
  margin-bottom: var(--dl-space-space-sixunits);
  padding-right: 48px;
  padding-bottom: 32px;
}
.home-container27 {
  flex: 2;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-container28 {
  flex: 3;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.home-container29 {
  flex: 1;
  width: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: flex-start;
  flex-direction: column;
}
.home-container30 {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: row;
}
.home-container31 {
  flex: 1;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-container32 {
  flex: 1;
  height: 100%;
  display: flex;
  padding: var(--dl-space-space-halfunit);
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-bottom-wave-image2 {
  left: 0px;
  width: 100%;
  bottom: -82px;
  filter: invert(96%);
  z-index: 1;
  position: absolute;
  transform: scaleY(50%);
  object-fit: cover;
}
.home-hero1 {
  width: 100%;
  filter: brightness();
  display: flex;
  padding: 48px;
  position: relative;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-text17 {
  color: var(--dl-color-gray-white);
  z-index: 2;
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.home-text20 {
  color: var(--dl-color-gray-white);
  width: 552px;
  z-index: 1;
  font-size: 3rem;
  max-width: auto;
  margin-top: 32px;
  text-align: center;
  margin-bottom: 32px;
}
.home-container33 {
  display: flex;
  z-index: 100;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
.home-link3 {
  color: var(--dl-color-gray-white);
  width: 325px;
  height: 68px;
  z-index: 2;
  background: linear-gradient( -310deg ,#7928ca,#ff0080);
  transition: 0.3s;
  padding-top: var(--dl-space-space-unit);
  border-width: 0px;
  padding-left: 32px;
  border-radius: var(--dl-radius-radius-radius1);
  padding-right: 32px;
  padding-bottom: var(--dl-space-space-unit);
  text-decoration: none;
}
.home-link3:hover {
  transform: scale(1.02);
}
.home-text21 {
  font-size: 1.5rem;
  font-style: normal;
  font-family: Open Sans;
  font-weight: 800;
}
.home-text22:hover {
  transform: scale(1.02);
}
.home-image12 {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  bottom: 0px;
  filter: brightness(85%) blur(5px);
  height: 100%;
  z-index: 0;
  position: absolute;
  margin-top: var(--dl-space-space-tripleunit);
  object-fit: cover;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
}
.home-top-wave-image2 {
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  filter: invert(96%);
  margin: auto;
  position: absolute;
  transform: scaleY(50%);
  object-fit: cover;
}
.home-footer {
  width: 100%;
  display: flex;
  max-width: 1400px;
  margin-top: var(--dl-space-space-tripleunit);
  align-items: center;
  padding-top: 32px;
  padding-left: 48px;
  padding-right: 48px;
  padding-bottom: 32px;
  justify-content: space-between;
}
.home-navlink {
  color: #cfacf1;
  font-size: 1.25rem;
  font-weight: 600;
  margin-left: var(--dl-space-space-unit);
  margin-right: var(--dl-space-space-unit);
  text-decoration: none;
}
.home-icon-group {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}
.home-image13 {
  width: 55px;
  height: 55px;
  object-fit: cover;
  transition: 0.3s;
  margin-right: var(--dl-space-space-unitandahalfunit);
}
.home-image13:hover {
  width: 74px;
  height: 74px;
}
.home-image14 {
  width: 63px;
  height: 58px;
  object-fit: cover;
  transition: 0.3s;
  margin-right: var(--dl-space-space-unitandahalfunit);
}
.home-image14:hover {
  width: 76px;
  height: 69px;
}
.home-image15 {
  width: 68px;
  height: 68px;
  padding: .25rem;
  object-fit: cover;
  transition: 0.3s;
  margin-right: var(--dl-space-space-unitandahalfunit);
}
.home-image15:hover {
  width: 79px;
  height: 79px;
}
.home-image16 {
  width: 68px;
  height: 68px;
  padding: .25rem;
  object-fit: cover;
  transition: 0.3s;
  margin-right: var(--dl-space-space-unitandahalfunit);
}
.home-image16:hover {
  width: 76px;
  height: 76px;
}
.home-image17 {
  width: 56px;
  height: 63px;
  padding: .25rem;
  object-fit: cover;
  transition: 0.3s;
}
.home-image17:hover {
  width: 69px;
  height: 77px;
}
@media(max-width: 991px) {
  .home-image {
    width: 0;
    visibility: collapse;
  }
  .home-card {
    width: 100%;
    margin-left: 1rem;
    margin-right: 1rem;
  }
  .home-features {
    max-width: 960px;
  }
  .home-container07 {
    flex-flow: column;
  }
  .home-contaier {
    padding-left: var(--dl-space-space-doubleunit);
    padding-right: var(--dl-space-space-doubleunit);
  }
  .home-container13 {
    width: 45%;
    margin-left: var(--dl-space-space-unit);
  }
  .home-div {
    width: 95vw;
  }
  .home-container17 {
    padding-left: var(--dl-space-space-fourunits);
    padding-right: var(--dl-space-space-fourunits);
  }
  .home-container26 {
    width: 100%;
  }
  .home-container27 {
    width: 100%;
  }
}
@media(max-width: 767px) {
  .home-card {
    align-items: center;
  }
  .home-text02 {
    text-align: center;
    margin-right: 0px;
    padding-right: 0px;
  }
  .home-image01 {
    width: 20vw;
  }
  .home-image02 {
    width: 20vw;
  }
  .home-image03 {
    width: 15vw;
  }
  .home-image04 {
    width: 15vw;
  }
  .home-features {
    max-width: 720px;
    padding-top: var(--dl-space-space-doubleunit);
    padding-left: var(--dl-space-space-unitandahalfunit);
    padding-right: var(--dl-space-space-unitandahalfunit);
    padding-bottom: var(--dl-space-space-doubleunit);
  }
  .home-container09 {
    width: 80%;
  }
  .home-text06 {
    text-align: center;
  }
  .home-text07 {
    text-align: center;
  }
  .home-container10 {
    flex-direction: column;
  }
  .home-container13 {
    width: 80%;
    margin-top: var(--dl-space-space-fourunits);
    align-items: center;
    margin-left: 0px;
  }
  .home-text10 {
    text-align: center;
  }
  .home-social-bar {
    padding-left: 32px;
    padding-right: 32px;
  }
  .home-artstation {
    height: 409px;
  }
  .home-artstation1 {
    height: 413px;
  }
  .home-artstation2 {
    height: 401px;
  }
  .home-gallery {
    padding-left: 32px;
    padding-right: 32px;
  }
  .home-container22 {
    flex-direction: column;
  }
  .home-gallery1 {
    padding-left: 32px;
    padding-right: 32px;
  }
  .home-container30 {
    flex-direction: column;
  }
  .home-hero1 {
    padding-left: 32px;
    padding-right: 32px;
  }
  .home-footer {
    padding-left: 32px;
    padding-right: 32px;
  }
  .home-text24 {
    text-align: center;
    margin-left: var(--dl-space-space-unit);
    margin-right: var(--dl-space-space-unit);
  }
}
@media(max-width: 479px) {
  .home-hero {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  .home-container01 {
    width: 100%;
  }
  .home-container02 {
    width: 100%;
  }
  .home-card {
    padding: var(--dl-space-space-unit);
    margin-left: 0rem;
    margin-right: 0px;
  }
  .home-container03 {
    flex-direction: column;
  }
  .home-container04 {
    position: relative;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
  .home-container05 {
    gap: 0;
  }
  .home-image05 {
    left: -637px;
  }
  .home-features {
    width: 100%;
  }
  .home-text03 {
    text-align: center;
  }
  .home-bottom-wave-image {
    z-index: 1;
    transform: translateY(-1rem);
  }
  .home-top-wave-image {
    transform: translateY(1rem);
  }
  .home-contaier {
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
  }
  .home-text06 {
    font-size: 2rem;
    text-align: center;
  }
  .home-text07 {
    text-align: center;
  }
  .home-container11 {
    width: 468px;
  }
  .home-iframe {
    width: 85vw;
    height: 48vw;
  }
  .home-div {
    width: 100vw;
  }
  .home-bottom-wave-image1 {
    transform: translateY(-3rem);
  }
  .home-top-wave-image1 {
    transform: translateY(1.5rem);
  }
  .home-container17 {
    padding-left: var(--dl-space-space-doubleunit);
    padding-right: var(--dl-space-space-doubleunit);
  }
  .home-text09 {
    font-size: 2rem;
  }
  .home-text10 {
    text-align: center;
  }
  .home-social-bar {
    align-self: stretch;
    padding-top: 32px;
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: 32px;
    justify-content: center;
  }
  .home-gallery {
    height: 1068px;
    flex-direction: column;
  }
  .home-container21 {
    width: auto;
  }
  .home-container22 {
    flex-direction: row;
  }
  .home-container23 {
    width: 196px;
    height: 354px;
    margin-right: 0px;
  }
  .home-container24 {
    width: 67px;
  }
  .home-container25 {
    width: 385px;
    height: 202px;
  }
  .home-container26 {
    width: 225px;
    height: 631px;
    margin-left: 0px;
  }
  .home-gallery1 {
    padding: 0;
    flex-direction: column;
  }
  .home-container27 {
    width: 229px;
  }
  .home-container28 {
    width: auto;
  }
  .home-container30 {
    flex-direction: row;
  }
  .home-container31 {
    width: 180px;
  }
  .home-container32 {
    width: 203px;
  }
  .home-bottom-wave-image2 {
    transform: translateY(-3rem);
  }
  .home-hero1 {
    padding-top: 32px;
    padding-left: var(--dl-space-space-unit);
    padding-right: var(--dl-space-space-unit);
    padding-bottom: 32px;
  }
  .home-text20 {
    width: 80vw;
  }
  .home-top-wave-image2 {
    transform: translateY(2rem);
  }
  .home-footer {
    padding: var(--dl-space-space-unit);
    flex-direction: column;
  }
  .home-text24 {
    margin-left: 0px;
    margin-right: 0px;
    margin-bottom: var(--dl-space-space-unit);
  }
}
</style>
