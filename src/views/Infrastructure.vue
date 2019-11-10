<template>
  <div id="root">
    <svg
      id="Metro_Map_Lines"
      class="map"
      data-name="Metro Map Lines"
      xmlns="http://www.w3.org/2000/svg"
      width="2212"
      height="2464"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <!-- <g>
        <title>background</title>
        <rect fill="#fff" id="canvas_background" height="2466" width="2214" y="-1" x="-1" />
        <g
          display="none"
          overflow="visible"
          y="0"
          x="0"
          height="100%"
          width="100%"
          id="canvasGrid"
        >
          <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%" />
        </g>
      </g> -->
      <g>
        <title>metro-map-svg</title>
        <path
          id="green-line"
          class="line cls-1"
          d="M1549.74933,692.49893c-216.58356,-98.33317 -433.16712,-196.66635 -649.75068,-294.99953l649.75068,294.99953z"
        />
        <path
          id="yellow-line"
          class="line cls-2"
          d="M1317.24968,762.49883c-69.91711,23.33331 -139.83423,46.66661 -209.75134,69.99992l209.75134,-69.99992z"
          transform="translate(-27 -21)"
        />
        <path
          id="orange-line"
          class="line cls-3"
          d="M1392.24957,839.99871l-304.7512,-294.99953l304.7512,294.99953z"
          transform="translate(-27 -21)"
        />
        <path
          id="silver-line"
          class="line cls-4"
          d="M30,104l22.17,22.17a2.84,2.84,0,0,0,2,.83H81a7,7,0,0,0,7-7l0-7.38c.15-2,2.64-5.42,5.75-5.66l30.22-.32c4.43,0,7.35,3.55,7.35,8l.1,15.83c0,4.18,4,7.56,8.16,7.56h29.79a4.35,4.35,0,0,0,2.89-1.1l6.31-5.61a4,4,0,0,1,2.91-1.3H234"
          transform="translate(-27 -21)"
        />
        <path
          id="blue-line"
          class="line cls-5"
          d="M82,223v-8.58A6.42,6.42,0,0,1,88.42,208h32.33a3.25,3.25,0,0,0,3.25-3.25V190.88a4.88,4.88,0,0,0-4.88-4.88h-2.88a5.24,5.24,0,0,1-5.24-5.24V159.25a7.84,7.84,0,0,0-2.3-5.54L95,140a12.07,12.07,0,0,1-3.54-8.54v-17a4,4,0,0,1,4-4h27.93a3.57,3.57,0,0,1,3.57,3.57v14.84A13.09,13.09,0,0,0,140.09,142h30.26a4.7,4.7,0,0,0,2.94-1l7-5.57a6.4,6.4,0,0,1,4-1.4H234"
          transform="translate(-27 -21)"
        />
        <path
          id="red-line"
          class="line cls-6"
          d="M137.5,22.5V54a6.2,6.2,0,0,0,1.69,4.26l27.74,28.59A5,5,0,0,1,168,88.65a5.22,5.22,0,0,1,.3,2.06c-.28,7.59.3,15.2.16,22.79a4.32,4.32,0,0,1-1,3,3.68,3.68,0,0,1-2,1c-11.33,0-26.67-.15-38,0-7.89.1-7.29-3.89-7.29-3.89L120,97.15c-.3-1.25-2-3.14-2.87-4.08L107.08,82.41a5.25,5.25,0,0,0-4-1.91H100.7c-2.69,0-5.27-3.08-7.15-5L52.5,34.5"
          transform="translate(-27 -21)"
        />
      </g>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
#root {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #222;
}
.map {
  height: 80%;
  width: 80%;
}
.line {
  stroke-dasharray: 400;
  stroke-dashoffset: 400;
  -webkit-animation: draw 5s infinite;
  animation: draw 5s infinite;
}
@-webkit-keyframes draw {
  from {
    stroke-dashoffset: 400;
  }
  to {
    stroke-dashoffset: 0;
  }
}
@keyframes draw {
  from {
    stroke-dashoffset:400;
  }
  to {
    stroke-dashoffset: 0;
  }
}
body {
  margin: 0;
}
.cls-1,
.cls-2,
.cls-3,
.cls-4,
.cls-5,
.cls-6 {
  fill: none;
  stroke-linecap: round;
  stroke-miterlimit: 10;
  stroke-width: 3px;
}
.cls-1 {
  stroke: #0aa848;
}
.cls-2 {
  stroke: #fcd000;
}
.cls-3 {
  stroke: #f49506;
}
.cls-4 {
  stroke: #9fa5a4;
}
.cls-5 {
  stroke: #1076c4;
}
.cls-6 {
  stroke: #e72434;
}
</style>
