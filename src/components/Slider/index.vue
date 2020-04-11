<template>
    <div ref="warp" class="fakin-slider" :class="`fakin-slider-${direction}`">
        <div ref="list" class="fakin-slider-list">
            <slot />
        </div>
        <div v-if="showIndicators" class="fakin-slider-indicators">
            <div
                v-for="(item,index) in pages"
                :key="index"
                class="slider-indicators-item"
                :class="{'indicators-active':index===currentPage-1}"
                @click="goToPage(index)"
            />
        </div>
        <div v-if="showButton&&isFlag" class="fakin-slider-btn">
            <div class="slider-btn-left" @click.stop.prevent="prevPage"><</div>
            <div class="slider-btn-right" @click.stop.prevent="nextPage">></div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default: []
    },
    showIndicators: {
      type: Boolean,
      default: true
    },
    showButton: {
      type: Boolean,
      default: false
    },
    speed: {
      type: Number,
      default: 300
    },
    autoSwipe: {
      type: Number,
      default: 3000
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    disabled: {
      type: Boolean,
      default: true
    },
    indicatorsCut: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      currentIndex: 1,
      currentPage: 1,
      isClick: false,
      pages: [],
      timer: null,
      scrolling: false,
      quick: false,
      isFlag: true
    }
  },
  created() {
    this.dragState = {}
  },
  mounted() {
    const self = this
    if (self.list.length <= 1) {
      return
    }
    if ((document.documentElement.clientWidth || document.body.clientWidth) <= 768) {
      self.isFlag = false
    }
    self._cloneDom()
    self.$nextTick(() => {
      self.play()
    })

    window.addEventListener('resize', self._setItemWidth)

    const element = self.$el
    //            //mobile
    element.addEventListener('touchstart', self.dragStartEvent, false)
    element.addEventListener('touchmove', self.dragMoveEvent, false)
    element.addEventListener('touchend', self.dragEndEvent, false)
    // pc
    element.addEventListener('mouseout', self.play)
    element.addEventListener('mouseover', self.stop)
  },
  destroyed() {
    const self = this
    window.removeEventListener('resize', self._setItemWidth)
  },
  methods: {
    nextPage() { // 下一页
      this._setPage('next', this.$refs.list.children.length - 2, 1)
    },
    prevPage() { // 上一页
      this._setPage('prev', 1, this.$refs.list.children.length - 2)
    },
    goToPage(index) {
      const self = this
      console.log(self.isFlag)
      if (!self.indicatorsCut || !self.isFlag) {
        return
      }
      if (self.currentPage === index + 1) {
        return
      }
      if (self.scrolling) {
        return
      }
      self.stop()

      self.currentIndex = self.currentPage = index + 1
      self._setCurrentPageStyle(self.currentIndex)

      setTimeout(() => {
        self.scrolling = false
        self.$refs.list.style.transitionDuration = '0ms'
        self.play()
      }, self.speed)
    },
    play() {
      const self = this
      if (self.autoSwipe <= 0 || self.scrolling) {
        return
      }
      self.stop()
      self.timer = setInterval(() => {
        self.nextPage()
      }, self.autoSwipe)
    },
    stop() {
      const self = this
      clearInterval(self.timer)
    },
    dragStartEvent(event) {
      if (this.disabled || this.scrolling) return
      this.stop()

      const touch = event.changedTouches ? event.changedTouches[0] : event
      this.dragState.startLeft = touch.clientX
      this.dragState.startTop = touch.clientY
      const date = new Date().getTime()
      this.dragState.startTimer = date
      if (this.dragState.startTimer - this.dragState.endTimer <= this.speed) {
        this.quick = true
      }
      if (touch.target.className = 'slider-indicators-item') {
        this.noDrag = true
      }
    },
    dragMoveEvent(event) {
      if (this.disabled || this.scrolling) return
      this.stop()
      event.preventDefault()
      const touch = event.changedTouches ? event.changedTouches[0] : event
      this.dragState.currentLeft = touch.clientX
      this.dragState.currentTop = touch.clientY
      const drag = this.dragState
      const offsetLeft = this.dragState.currentLeft - drag.startLeft
      const offsetTop = this.dragState.currentTop - drag.startTop
      if (isNaN(offsetLeft) || isNaN(offsetTop)) {
        return
      }
      let warpOffsetLeft = (-this.$refs.warp.clientWidth * this.currentIndex) + offsetLeft
      let warpOffsetTop = (-this.$refs.warp.clientHeight * this.currentIndex) + offsetTop
      const abs_wt = warpOffsetTop
      const abs_wl = warpOffsetLeft
      const abs_b_r = -this.$refs.warp.clientWidth * (this.currentIndex + 1)
      const abs_b_l = -this.$refs.warp.clientWidth * (this.currentIndex - 1)
      const abs_b_t = -this.$refs.warp.clientHeight * (this.currentIndex + 1)
      const abs_b_b = -this.$refs.warp.clientHeight * (this.currentIndex - 1)
      if (abs_wl <= abs_b_r) {
        warpOffsetLeft = abs_b_r
      }
      if (abs_wl >= abs_b_l) {
        warpOffsetLeft = abs_b_l
      }
      if (abs_wt <= abs_b_t) {
        warpOffsetTop = abs_b_t
      }
      if (abs_wt >= abs_b_b) {
        warpOffsetTop = abs_b_b
      }
      if (this.direction === 'vertical') {
        this.quick ? this._translate(0, warpOffsetTop, 500) : this._translate(0, warpOffsetTop, 0)
      } else {
        this.quick ? this._translate(warpOffsetLeft, 0, 500) : this._translate(warpOffsetLeft, 0, 0)
      }
    },
    dragEndEvent() {
      if (this.disabled || this.scrolling) return
      this.stop()

      const dragState = this.dragState
      const offsetLeft = dragState.currentLeft - dragState.startLeft
      const offsetTop = dragState.currentTop - dragState.startTop
      this.dragState.deltaX = offsetLeft
      this.dragState.deltaY = offsetTop
      const warpOffsetLeft = -this.$refs.warp.clientWidth * this.currentIndex
      const warpOffsetTop = -this.$refs.warp.clientHeight * this.currentIndex
      this.dragState.endTimer = new Date().getTime()
      if (this.direction === 'vertical') {
        if (isNaN(offsetTop)) {
          return
        }
        if (this.dragState.startTimer - this.dragState.endTimer <= this.speed) { // 快速模式
          this.scrolling = true
          if (this.dragState.deltaY < 0) {
            this.nextPage()
          } else {
            this.prevPage()
          }
        } else {
          this._setTranslate(offsetTop, 'clientHeight', 0, warpOffsetTop)
        }
      } else {
        if (isNaN(offsetLeft)) {
          return
        }
        if (this.dragState.startTimer - this.dragState.endTimer <= this.speed) { // 快速模式
          this.scrolling = true
          if (this.dragState.deltaX < 0) {
            this.nextPage()
          } else {
            this.prevPage()
          }
        } else {
          this._setTranslate(offsetLeft, 'clientWidth', warpOffsetLeft, 0)
        }
      }

      if (this.noDrag) {
        setTimeout(() => {
          this.$refs.list.style.transitionDuration = `0ms`
          this.dragState = {}
          this.quick = false
          this.scrolling = false
          this.play()
        }, this.speed)
      } else {
        setTimeout(() => {
          this.$refs.list.style.transitionDuration = `0ms`
          //                    this.dragState = {};
          this.quick = false
          this.scrolling = false
          this.play()
        }, this.speed)
      }
    },
    _cloneDom() {
      const firstDom = this.$children[0].$el.cloneNode(true)
      const lastDom = this.$children[this.$children.length - 1].$el.cloneNode(true)
      this.$refs.list.insertBefore(lastDom, this.$children[0].$el)
      this.$refs.list.appendChild(firstDom)
      this.pages = [...this.$children]
      this._setItemWidth()
    },
    _setItemWidth() {
      this.$refs.list.children[this.currentIndex].className += ' active'
      if (this.direction === 'vertical') {
        this._translate(0, -this.$refs.warp.clientHeight * this.currentIndex, 0)
      } else {
        this._translate(-this.$refs.warp.clientWidth * this.currentIndex, 0, 0)
      }
    },
    _setCurrentPageStyle(index) {
      const self = this
      Array.from(self.$refs.list.children).forEach((item) => {
        item.className = 'fakin-slider-item'
      })
      self.$refs.list.children[index].className += ' active'
      if (self.direction === 'vertical') {
        self._translate(0, -self.$refs.warp.clientHeight * index, self.speed,)
      } else {
        self._translate(-self.$refs.warp.clientWidth * index, 0, self.speed,)
      }
    },
    _translate(x, y, speed) {
      this.$refs.list.style.cssText = `transform: translate3d(${x}px,${y}px,0px);transition-duration:${speed}ms;`
    },
    _setTranslate(offset, client, x, y) {
      const d = 10 || this.$refs.warp[client] / 4

      const s = (index, fn) => {
        if (this.currentIndex === index || Math.abs(offset) >= d) {
          fn()
        } else {
          this._translate(x, y, this.speed)
        }
      }
      if (offset < 0) {
        s(this.$refs.list.children.length - 2, this.nextPage)
      } else if (offset > 0) {
        s(1, this.prevPage)
      } else {
        return
      }
    },
    _setTimeOut(index) {
      const self = this
      setTimeout(() => {
        self.currentIndex = index
        self._setCurrentPageStyle(self.currentIndex)
      }, self.speed)
    },
    _setPage(direction, index, setIndex) {
      const self = this
      if (self.isClick || self.list.length <= 1) {
        return
      }
      self.isClick = true
      direction === 'next' ? self.currentPage += 1 : self.currentPage -= 1
      if (self.currentIndex === index) {
        self.currentPage = setIndex
        self._setTimeOut(setIndex)
      }

      direction === 'next' ? self.currentIndex += 1 : self.currentIndex -= 1
      self._setCurrentPageStyle(self.currentIndex)
      setTimeout(() => {
        self.isClick = false
        self.$refs.list.style.transitionDuration = '0ms'
        self.scrolling = false
      }, self.speed)
    }
  }
}
</script>
<style>
.fakin-slider {
    width: 100%;
    height: 100%;
    margin: 60px auto;
    position: relative;
    overflow: hidden;
    transform: translateZ(0);
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    backface-visibility: hidden;
    -webkit-perspective: 1000;
    -moz-perspective: 1000;
    -ms-perspective: 1000;
    perspective: 1000;
}

.fakin-slider-list {
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    transition: all 0ms ease;
}

.fakin-slider-horizontal > .fakin-slider-list {
    flex-direction: row;
}

.fakin-slider-vertical > .fakin-slider-list {
    flex-direction: column;
}

.fakin-slider-btn {
    display: none;
}

.fakin-slider:hover > .fakin-slider-btn {
    display: block;
    transition: all 0.5s;
}

.slider-btn-left,
.slider-btn-right {
    position: absolute;
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.3);
    top: 50%;
    transform: translateY(-50%);
    line-height: 40px;
    color: #fff;
    cursor: pointer;
    border-radius: 50%;
    box-sizing: border-box;
    user-select: none;
}

.slider-btn-left {
    left: -20px;
    padding-left: 10px;
}

.slider-btn-right {
    right: -20px;
    padding-right: 10px;
}

.fakin-slider-indicators {
    position: absolute;
    left: 50%;
    bottom: 5px;
    z-index: 999;
    transform: translate(-50%);
}

.fakin-slider-indicators > div {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    display: inline-block;
    background: #fff;
    margin: 0 2px;
    cursor: pointer;
}

.fakin-slider-indicators > div.indicators-active {
    background: #24d06e;
}

@media screen and (max-width: 769px) {
    .slider-btn-left,
    .slider-btn-right {
        display: none;
    }
}
</style>
