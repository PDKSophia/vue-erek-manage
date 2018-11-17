<template>
  <div>
    <canvas id='canvas' />
  </div>
</template>

<script>
export default {
  name: 'CanvasAnimate',
  mounted() {
    let max_particles = 100
    let particles = [] // 粒子数组，每一项都是 Particle 的实例
    let frequency = 100
    let init_num = max_particles
    let max_time = frequency * max_particles
    let time_to_recreate = false

    // 100 * 100 后，重新创建粒子
    setTimeout(function() {
      time_to_recreate = true
    }.bind(this), max_time)

    popolate(max_particles)

    let tela = document.querySelector('canvas')
    let WIDTH = document.body.clientWidth
    let HEIGHT = document.body.clientHeight
    tela.width = WIDTH
    tela.height = HEIGHT

    let canvas = tela.getContext('2d')

    class Particle {
      constructor(canvas) {
        let colors = ['#feea00','#a9df85','#5dc0ad', '#ff9a00','#fa3f20']
        let types = ['full', 'fill', 'empty']
        this.random = Math.random()
        this.canvas = canvas
        this.progress = 0
        
        this.x = (WIDTH / 3) + (Math.random() * 200 - Math.random() * 200) // 粒子x坐标
        this.y = (HEIGHT / 2) + (Math.random() * 200 - Math.random() * 200) // 粒子y坐标
        this.w = WIDTH // 粒子宽度
        this.h = HEIGHT // 粒子高度

        this.radius = 1 + (8 * this.random) // 角度
        this.type = types[this.randomIntFromInterval(0, types.length -1 )]
        this.color = colors[this.randomIntFromInterval(0, types.length -1 )]

        this.a = 0
        this.s = (this.radius + (Math.random() * 1)) / 10
      }


      // 返回粒子的 x 和 y 坐标
      getCoordinates() {
        return {
          x: this.x,
          y: this.y
        }
      }

      // 随机数
      randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
      }

      render() {
        let lineWidth = 0.2 + (2.8 * this.random)
        let color = this.color
        switch(this.type) {
          case 'full':
            this.createArcFill(this.radius, color)
            this.createArcEmpty(this.radius + lineWidth, lineWidth/2, color)
            break
          case 'fill':
            this.createArcFill(this.radius, color)
            break
          case 'empty': 
            this.createArcEmpty(this.radius, lineWidth, color)
            break
        }
      }
      
      createArcFill(radius, color) {
        this.canvas.beginPath()
        this.canvas.arc(this.x, this.y, radius, 0, Math.PI * 2)
        this.canvas.fillStyle = color
        this.canvas.fill()
        this.canvas.closePath()
      }

      createArcEmpty(radius, lineWidth, color) {
        this.canvas.beginPath()
        this.canvas.arc(this.x, this.y, radius, 0, Math.PI * 2)
        this.canvas.lineWidth = lineWidth
        this.canvas.strokeStyle = color
        this.canvas.stroke()
        this.canvas.closePath()
      }

      move () {
        this.x += Math.cos(this.a) * this.s
        this.y += Math.sin(this.a) * this.s
        this.a += Math.random() * 0.4 - 0.2

        if (this.x < 0 || this.x > this.w - this.radius) {
          return false
        }
        if (this.y < 0 || this.y > this.h - this.radius) {
          return false
        }
        this.render()
        return true
      }
    }

    function popolate(num) {
      for (let i = 0; i < num; i++) {
        setTimeout(function(){
          return function () {
            particles.push(new Particle(canvas))
          }
        }(i), frequency * i)
      }
      return particles.length
    }

    function clear() {
      canvas.fillStyle = '#111111'
      canvas.fillRect(0, 0, tela.width, tela.height)
    }

    function connection() {
      let old_element = null
      particles.map((element, index) => { // 第一次粒子为null，所以从第二个粒子开始
        if (index > 0) {
          let box1 = old_element.getCoordinates()
          let box2 = element.getCoordinates()
          canvas.beginPath()
          canvas.moveTo(box1.x, box1.y)
          canvas.lineTo(box2.x, box2.y)
          canvas.lineWidth = 0.45
          canvas.strokeStyle = '#3f47ff'
          canvas.stroke()
          canvas.closePath()
        }
        old_element = element
      })
    }

    function update() {
      clear()
      connection()
      particles = particles.filter(function(part) { return part.move() })
      if (time_to_recreate) {
        if(particles.length < init_num){ popolate(1);}
      }
      requestAnimationFrame(update.bind(this)) // 动画
    }

    update()
  }
}
</script>

<style>

</style>
