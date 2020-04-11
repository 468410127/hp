<template>
    <svg :class="svgClass" aria-hidden="true" v-on="$listeners">
        <path
            id="block_web_bg_shape"
            d="M97.704,60.126L61.811,6.31c-5.85-8.58-15.312-8.318-20.993,0.227L2.833,58.716c-6.963,11.471-0.49,22.041,12.883,20.964l72.053-0.042C97.961,79.462,103.377,69.221,97.704,60.126z"
        >
            <!-- <use :xlink:href="iconName" /> -->
        </path>
    </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
    width: 1.05em;
    height: 1.05em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>
