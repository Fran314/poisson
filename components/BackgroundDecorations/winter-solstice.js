import img from '~/assets/img/decorations/snowflake.png'

const isWinterSolsticeWeek = () => {
    const winterSolstice = [
        21, 21, 22, 22, 21, 21, 22, 22, 21, 21, 22, 22, 21, 21, 22, 22, 21, 21,
        21, 22, 21, 21, 21, 22, 21, 21, 21, 22, 21, 21, 21, 22, 21, 21, 21, 22,
        21, 21, 21, 22, 21, 21, 21, 22, 21, 21, 21, 22, 21, 21, 21, 21, 21, 21,
        21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
        21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 20, 21, 21, 21, 20, 21,
        21, 21, 20, 21, 21, 21, 20, 21, 21, 21,
    ]

    const date = new Date()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const ws = winterSolstice[date.getFullYear() % 100]

    return month == 12 && day >= ws && day < ws + 7
}
const hasParam = () => {
    let url = new URL(window.location.href)
    return url.searchParams.get('decoration') === 'winter-solstice'
}
const isChristmas = () => {
    const date = new Date()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return month == 12 && day == 25
}

export default class WinterSolstice {
    constructor(width, height) {
        this.image = new Image()
        this.image.src = img

        this.active = isWinterSolsticeWeek() || hasParam()
        const amount = width < 720 ? 15 : 30

        this.particles = []
        for (let i = 0; i < amount; i++) {
            const x = Math.random() * width
            const y = -((i * height) / amount + 100)
            const vx = 35
            const vy = 100 + Math.random() * 60
            const life = Math.random()
            this.particles.push({ x, y, vx, vy, life })
        }
    }

    update(dt, width, height) {
        this.particles.forEach(p => {
            p.life += dt

            p.x += p.vx * dt
            p.y += p.vy * dt

            p.vx += (Math.random() * 2 - 1) * 10
            p.vx = clamp(p.vx, -100, 100)

            p.x = mod(p.x + 100, width + 200) - 100
            while (p.y > height + 100) {
                p.y -= height + 100 + 100 // the additional +100 is to start at height -100 instead of 0
            }
        })
    }

    draw(ctx) {
        this.particles.forEach(p => {
            ctx.drawImage(
                this.image,
                p.x - (this.image.width * Math.cos(p.life * 2)) / 2,
                p.y,
                this.image.width * Math.cos(p.life * 2),
                this.image.height,
            )
        })
    }
}
