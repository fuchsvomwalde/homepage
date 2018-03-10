<template>
  <div id="app">
    <div id="large-header" class="large-header">
        <ul class="image-wrap fxSoftScale">
            <li class="current">
                <img src="./assets/img/bgr_1.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_2.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_3.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_4.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_5.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_6.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_7.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_8.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_9.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_10.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_11.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_12.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_13.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_14.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_15.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_16.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_17.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_18.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_19.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_20.jpg" alt="Hintergrundbild">
            </li>
            <li>
                <img src="./assets/img/bgr_21.jpg" alt="Hintergrundbild">
            </li>
        </ul>
        <canvas id="header-canvas"></canvas>

        <!-- div id="header-skipper" class="header-skipper">Scrolle um mehr zu erfahren
            <div class="arrow-down"></div>
        </div -->
        <div class="header-caption">© Jascha Quintern Photography</div>
    </div>

    <header class="main-title">

        <div>
            <img id="fuchsvomwalde-logo" src="./assets/img/fuchsvomwalde-logo.svg" alt="Fuchsvomwalde Logo">
        </div>

        <div id="headertitle">
            <p>
                <span>Jascha A.</span>
                <span class="thin">Quintern</span>
            </p>
        </div>

        <div id="subtitle">
            <p>Founder • Creative Artist • Filmmaker • Developer • Software Architect</p>
        </div>

        <ul class="btn-bar">
            <li class="btn-wrapper flip-init ">
                <a href="mailto:mail@jascha-quintern.de?Subject=Hello" target="_top" class="icon-mail"></a>
            </li>
            <li class="btn-wrapper flip-init ">
                <a href="https://hackerstolz.de" target="_top" class="img">
                  <img height="32px" src="./assets/img/hackerstolz.svg" />
                </a>
            </li>
            <li class="btn-wrapper flip-init ">
                <a href="https://pulseshift.com" target="_top" class="img">
                  <img height="32px" src="./assets/img/pulseshift.svg" />
                </a>
            </li>
            <li class="btn-wrapper flip-init ">
                <a href="https://twitter.com/fuchsvomwalde" target="_blank" class="icon-twitter"></a>
            </li>
            <li class="btn-wrapper flip-init ">
                <a href="https://www.facebook.com/jascha.quintern" target="_blank" class="icon-facebook"></a>
            </li>
            <li class="btn-wrapper flip-init ">
                <a href="https://www.xing.com/profile/Jascha_Quintern" target="_blank" class="icon-xing"></a>
            </li>
            <li class="btn-wrapper flip-init ">
                <a href="http://de.linkedin.com/pub/jascha-quintern/91/ba/29" target="_blank" class="icon-linkedin"></a>
            </li>
            <li class="btn-wrapper flip-init ">
                <a href="https://github.com/fuchsvomwalde" target="_blank" class="icon-github"></a>
            </li>
            <!-- <li class="btn-wrapper flip-init ">
                <a href="http://stackoverflow.com/users/4568723/jascha-quintern" target="_blank" class="icon-stack-overflow"></a>
            </li> -->
            <!-- <li class="btn-wrapper flip-init ">
                <a href="https://itunes.apple.com/de/artist/jascha-quintern/id873642053" target="_blank" class="icon-apple"></a>
            </li> -->
            <li class="btn-wrapper flip-init ">
                <a href="http://instagram.com/fuchsvomwalde" target="_blank" class="icon-instagram"></a>
            </li>
            <!-- <li class="btn-wrapper flip-init ">
                <a href="https://www.flickr.com/photos/129289504@N05/" target="_blank" class="icon-flickr"></a>
            </li> -->
        </ul>
    </header>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="less">
@import './styles/fonts.less';
@import './styles/animations.less';

html * {margin: 0; padding: 0; font-size: 1rem; font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif; font-weight: 200;}

body {background: #dddddd; -webkit-font-smoothing: antialiased; font-smoothing: antialiased;}

.large-header {position: absolute; width: 100%; overflow: hidden; background: black; z-index: 2;}
.header-caption {position: absolute; right: 0; bottom: 0; color: rgba(255,255,255,0.5); padding: 10px; font-size: .825rem; z-index: 5;}
.header-skipper {position: absolute; cursor: pointer; width: 120px; text-align: center; color: white; padding: 10px; bottom: 75px; left: 50%; transform: translateX(-50%); -webkit-transform: translateX(-50%); z-index: 5;}
.header-skipper .arrow-down {position: absolute; bottom: -35px; width: 50px; height: 50px; border-bottom: 1px solid white; border-right: 1px solid white; left: 50%; transform: translateX(-50%) rotate(45deg); -webkit-transform: translateX(-50%) rotate(45deg);}

#header-canvas {position: absolute; z-index: 3;}
.image-wrap {position: absolute; width: 100%; height: 100%; z-index: 1;}
.image-wrap li {width: 100%; height: 100%; position: absolute; overflow: hidden; opacity: 0; opacity: 0; -webkit-transition: opacity 3s; transition: opacity 3s;}
.image-wrap li.current {opacity: 1;}
.image-wrap li img {position: absolute; left: 50%; max-height: 100%; transform: translateX(-50%); -webkit-transform: translateX(-50%);}
@media (min-aspect-ratio: 3/2) { 
  .image-wrap li img {max-width: 100%; height: auto; max-height: none;}
}

header {position: absolute; width: 100%; height: 5rem; top: 50%; text-align: center; transform: translateY(-150%); -webkit-transform: translateY(-150%); z-index: 5;}
header #fuchsvomwalde-logo {width: 40vw;}
header #headertitle span {color: rgba(255,255,255,1); font-weight: 600; font-size: 5vw; text-transform: uppercase; letter-spacing: 0.1rem; }
header #headertitle span.thin {font-weight: 200; font-size: 5vw; white-space: nowrap;}
header #subtitle p {
  // max-width: 60vw;
  // margin: 0 auto;
  font-weight: 400;
  font-size: 2vw;
  color: #fff;
}
@media (max-width: 800px) { 
  header #headertitle span {font-size: 8vw;}
  header #headertitle span.thin {font-size: 8vw;}
  header #subtitle p {font-size: 3vw;}
} 
.btn-bar {max-width: 100%; width: 70vw; margin: 0 auto; list-style: none; padding-top: 2rem; text-align: center;}
.btn-wrapper {width: 40px; height: 40px; margin: 10px; border: 2px solid white; border-radius: 25px; background: rgba(0,0,0,.6); transition: background .3s; display: inline-block; position: relative; text-align: -webkit-match-parent; cursor: pointer;}
.btn-wrapper a {
  font-size: 1.5rem;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  display: block;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: color .3s;

  &.img {
    font-size: 0;
    line-height: 0;
  }
 }
.btn-wrapper:hover, .btn-wrapper:active {background: white;}
.btn-wrapper:hover a, .btn-wrapper:active a {color: black;}
.icon-github, .icon-linkedin {margin-left: 4px;}
.icon-eyeem, .icon-pixel {font-weight: 800;}
a.icon-pixel {font-size: 1.3rem; letter-spacing: -0.2rem; margin-top: -4px; margin-left: -1px;}
@media (min-width: 800px) { 
  .btn-wrapper {width: 60px; height: 60px; margin: 15px; border: 2px solid white; border-radius: 35px;}
  .btn-wrapper a {font-size: 2rem;}
  .icon-github, .icon-linkedin {margin-left: 5px;}
  .icon-eyeem, .icon-pixel {font-weight: 800; margin-top: -3px; margin-left: -2px;}
  a.icon-pixel {font-size: 2rem; letter-spacing: -0.3rem;}
}

</style>
