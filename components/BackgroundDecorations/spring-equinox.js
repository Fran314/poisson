import img0 from '~/assets/img/decorations/spring-petals/0.png'
import img1 from '~/assets/img/decorations/spring-petals/1.png'
import img2 from '~/assets/img/decorations/spring-petals/2.png'
import img3 from '~/assets/img/decorations/spring-petals/3.png'
import img4 from '~/assets/img/decorations/spring-petals/4.png'
import img5 from '~/assets/img/decorations/spring-petals/5.png'
import img6 from '~/assets/img/decorations/spring-petals/6.png'
import img7 from '~/assets/img/decorations/spring-petals/7.png'
import img8 from '~/assets/img/decorations/spring-petals/8.png'
import img9 from '~/assets/img/decorations/spring-petals/9.png'
import img10 from '~/assets/img/decorations/spring-petals/10.png'
const imgs = [img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

const isSpringEquinoxWeek = () => {
    const springEquinox = [
        20, 20, 20, 21, 20, 20, 20, 21, 20, 20, 20, 21, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,
        20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 19, 20, 20, 20, 19, 20,
        20, 20, 19, 20, 20, 20, 19, 20, 20, 20, 19, 20, 20, 20, 19, 20, 20, 20,
        19, 20, 20, 20, 19, 20, 20, 20, 19, 19, 20, 20, 19, 19, 20, 20, 19, 19,
        20, 20, 19, 19, 20, 20, 19, 19, 20, 20,
    ]

    const date = new Date()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const ws = springEquinox[date.getFullYear % 100]

    return month == 2 && day >= ws && day < ws + 7
}
const hasParam = () => {
    let url = new URL(window.location.href)
    return url.searchParams.get('decoration') === 'spring-equinox'
}

export default class SpringEquinox {
    constructor(width, height) {
        this.images = [...Array(11).keys()].map(i => {
            const img = new Image()
            img.src = imgs[i]
            return img
        })

        this.active = isSpringEquinoxWeek() || hasParam()

        const amount = width < 720 ? 15 : 30

        this.particles = []
        for (let i = 0; i < amount; i++) {
            const x = Math.random() * (width + 200) - 100 + width + 200
            const y = Math.random() * (height + 200) - 100
            const vx = -400 + Math.random() * 200
            const vy = 15 + Math.random() * 40
            const life = Math.random()
            const img = i % 11
            this.particles.push({ x, y, vx, vy, life, img })
        }
    }

    update(dt, width, height) {
        this.particles.forEach(p => {
            p.life += dt

            p.x += p.vx * dt
            p.y += p.vy * dt

            while (p.x + 100 < 0) p.x += width + 200
            while (p.y > height + 100) p.y -= height + 200
        })
    }

    draw(ctx) {
        this.particles.forEach(p => {
            const offset =
                (Math.cos(p.life * 2) +
                    Math.cos(p.life * 3) +
                    Math.cos(p.life * 6)) *
                4
            ctx.translate(p.x, p.y + offset)
            ctx.rotate(-p.life / 2)
            ctx.drawImage(
                this.images[p.img],
                -this.images[p.img].width / 2,
                -this.images[p.img].height / 2,
                this.images[p.img].width,
                this.images[p.img].height,
            )
            ctx.rotate(p.life / 2)
            ctx.translate(-p.x, -(p.y + offset))
        })
    }
}
