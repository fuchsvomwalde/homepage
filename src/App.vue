<template>
  <div id="app">
    <div id="background" class="background">
        <ul class="image-wrap fxSoftScale">
            <li v-bind:class="[counter % images.length === index ? 'current' : '']"
                v-for="(imgURI, index) in images" v-bind:key="imgURI"
                v-bind:style="{
                  backgroundImage: counter % images.length === index ||
                  counter % images.length + 1 === index
                  ? `url(${imgURI})`
                  : ''
                }">
            </li>
        </ul>
        <!-- <canvas id="background-canvas"></canvas> -->
        <div class="background-gradient" v-bind:style="{ background: `linear-gradient(180deg, rgba(0, 0, 0, 0), ${bgColor} 80%)` }"></div>
        <div class="background-caption" v-bind:style="{ color: fgColor }">© Jascha Quintern Photography</div>
    </div>

    <header class="main-title">

        <ul class="btn-bar">
            <li class="btn-wrapper flip-init fxFlipInX"
                v-for="(link, index) in links" v-bind:key="link.name"
                v-bind:style="{ borderColor: fgColor, color: fgColor, animationDelay: (100 * index) + 'ms' }">
                <a target="_top"
                    v-bind:href="link.href" v-bind:class="[link.icon ? `icon-${link.icon}` : '', link.svg ? 'img' : '']">
                    <component v-if="link.svg" v-bind:is="link.svg" v-bind:style="{ fill: fgColor, height: '32px' }"></component>
                </a>
            </li>
        </ul>

        <h1>
            <HomepageLogo v-bind:style="{ fill: fgColor }" />
        </h1>

        <h2 class="headertitle" v-bind:style="{ color: fgColor }">
            <span>{{titleBold}}</span>
            <span class="thin">{{titleLight}}</span>
        </h2>

        <p class="subtitle" v-bind:style="{ color: fgColor }">{{subtitle}}</p>

    </header>
  </div>
</template>

<script>
import * as Vibrant from 'node-vibrant'
import { interval } from 'rxjs/observable/interval'
import HomepageLogo from './assets/img/fuchsvomwalde-logo.svg'
import HSIcon from './assets/img/hackerstolz.svg'
import PSIcon from './assets/img/pulseshift.svg'

// emit counter after every 5 seconds then complete, since no second argument is supplied
const NextImgInterval = interval(10000)

export default {
  name: 'app',
  components: {
    HomepageLogo,
    HSIcon,
    PSIcon
  },
  mounted() {
    // subscribe to rxjs interval
    const subscribe = NextImgInterval.subscribe(this.nextImage)

    // load first image
    this.nextImage(0)
  },
  methods: {
    nextImage(val) {
      this.counter = val

      const newImageSrc = this.images[val % this.images.length]

      // get color palette by image
      Vibrant.from(newImageSrc)
        .getPalette()
        .then(palette => {
          const {
            Vibrant,
            LightVibrant,
            LightMuted,
            Muted,
            DarkVibrant,
            DarkMuted
          } =
            palette || {}
          const LightSwatch = LightVibrant || LightMuted || Vibrant
          const DarkSwatch = DarkMuted || DarkVibrant || Muted

          this.fgColor = LightSwatch ? LightSwatch.getHex() : '#fafafa'
          this.bgColor = DarkSwatch ? DarkSwatch.getHex() : '#21212'
        })
    }
  },
  data() {
    return {
      counter: 0,
      titleBold: 'Jascha A.',
      titleLight: 'Quintern',
      subtitle:
        'Founder • Creative Artist • Filmmaker • Developer • Software Architect',
      fgColor: '#fafafa',
      bgColor: '#212121',
      images: [
        require('./assets/img/bgr_1.jpg'),
        require('./assets/img/bgr_2.jpg'),
        require('./assets/img/bgr_3.jpg'),
        require('./assets/img/bgr_4.jpg'),
        require('./assets/img/bgr_5.jpg'),
        require('./assets/img/bgr_6.jpg'),
        require('./assets/img/bgr_7.jpg'),
        require('./assets/img/bgr_8.jpg'),
        require('./assets/img/bgr_9.jpg'),
        require('./assets/img/bgr_10.jpg'),
        require('./assets/img/bgr_11.jpg'),
        require('./assets/img/bgr_12.jpg'),
        require('./assets/img/bgr_13.jpg'),
        require('./assets/img/bgr_14.jpg'),
        require('./assets/img/bgr_15.jpg'),
        require('./assets/img/bgr_16.jpg'),
        require('./assets/img/bgr_17.jpg'),
        require('./assets/img/bgr_18.jpg'),
        require('./assets/img/bgr_19.jpg'),
        require('./assets/img/bgr_20.jpg'),
        require('./assets/img/bgr_21.jpg')
      ],
      links: [
        {
          name: 'mail',
          href: 'mailto:mail@jascha-quintern.de?Subject=Hello',
          icon: 'mail'
        },
        {
          name: 'twitter',
          href: 'https://twitter.com/fuchsvomwalde',
          icon: 'twitter'
        },
        {
          name: 'facebook',
          href: 'https://www.facebook.com/jascha.quintern',
          icon: 'facebook'
        },
        {
          name: 'xing',
          href: 'https://www.xing.com/profile/Jascha_Quintern',
          icon: 'xing'
        },
        {
          name: 'linkedin',
          href: 'http://de.linkedin.com/pub/jascha-quintern/91/ba/29',
          icon: 'linkedin'
        },
        {
          name: 'github',
          href: 'https://github.com/fuchsvomwalde',
          icon: 'github'
        },
        {
          name: 'instagram',
          href: 'http://instagram.com/fuchsvomwalde',
          icon: 'instagram'
        },
        {
          name: 'Hackerstolz e.V.',
          href: 'https://hackerstolz.de',
          icon: null,
          svg: 'HSIcon'
        },
        {
          name: 'PulseShift GmbH',
          href: 'https://pulseshift.com',
          icon: null,
          svg: 'PSIcon'
        }
      ]
    }
  }
}
</script>

<style lang="less">
@import './styles/fonts.less';
@import './styles/animations.less';

html,
html > body {
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 200;
}

body {
  background: #dddddd;
  -webkit-font-smoothing: antialiased;
}

@media (min-aspect-ratio: 3/2) {
  #app .background ul.image-wrap li img {
    max-width: 100%;
    height: auto;
    max-height: none;
  }
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .background {
    position: absolute;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: 0;

    ul.image-wrap {
      position: absolute;
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      z-index: 1;

      li {
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;
        opacity: 0;
        opacity: 0;
        background-size: cover;
        background-position: center;
        transition: opacity 3s;

        &.current {
          opacity: 1;
        }
      }
    }

    // .background-canvas {
    //   position: absolute;
    //   z-index: 2;
    // }

    .background-gradient {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 3;
    }

    .background-caption {
      position: absolute;
      right: 0;
      bottom: 0;
      color: inherit;
      padding: 10px;
      font-size: 0.825rem;
      opacity: 0.5;
      z-index: 3;
    }
  }

  header {
    width: 100%;
    height: auto;
    text-align: center;
    z-index: 5;

    h1 {
      margin: 0;
      margin-top: 1rem;

      svg {
        width: auto; // 40vw
        transition: all 0.2s ease-in-out;
      }
    }

    h2.headertitle {
      margin: 0;

      span {
        color: inherit;
        font-weight: 600;
        font-size: 5vw;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
        transition: all 0.2s ease-in-out;

        @media (min-width: 800px) {
          font-size: 8vw;
        }

        &.thin {
          font-weight: 200;
          white-space: nowrap;
        }
      }
    }

    p.subtitle {
      margin: 0;
      margin-top: 1rem;
      font-weight: 400;
      font-size: 2vw;
      color: inherit;
      transition: all 0.2s ease-in-out;

      @media (min-width: 800px) {
        font-size: 2vw;
      }
    }

    ul.btn-bar {
      max-width: 100%;
      width: 80vw;
      margin: 0 auto;
      padding: 0;
      list-style: none;
      padding-top: 2rem;
      display: flex;
      flex-direction: row;
      flex: 1 1 auto;
      flex-wrap: wrap-reverse;
      align-items: center;
      justify-content: center;

      li.btn-wrapper {
        cursor: pointer;
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        margin: 10px;
        border: 2px solid;
        border-color: inherit;
        border-radius: 25px;
        background: rgba(0, 0, 0, 0.5);
        transition: background 0.3s;
        display: inline-block;
        text-align: -webkit-match-parent;
        transition: all 0.2s ease-in-out;

        @media (min-width: 800px) {
          width: 60px;
          height: 60px;
          margin: 15px;
          border: 2px solid;
          border-radius: 35px;
        }

        &:hover,
        &:active {
          background: rgba(0, 0, 0, 0.8);
        }

        a {
          font-size: 1.5rem;
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          display: block;
          text-align: center;
          text-decoration: none;
          color: inherit;
          transition: color 0.3s;
          transition: all 0.2s ease-in-out;

          @media (min-width: 800px) {
            font-size: 2rem;
          }

          svg {
            transition: all 0.2s ease-in-out;
          }

          &.icon-github,
          &.icon-linkedin {
            margin-left: 4px;

            @media (min-width: 800px) {
              margin-left: 5px;
            }
          }

          &.img {
            font-size: 0;
            line-height: 0;
          }
        }
      }
    }
  }
}
</style>
