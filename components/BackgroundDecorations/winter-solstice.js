import img from '~/assets/img/decorations/snowflake.png'

class WSEventManager {
    constructor(width, height, amount) {
        this.image = new Image()
        this.image.src = img

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
            if (p.y > height + 100) p.y = -100
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
    const ws = winterSolstice[date.getFullYear % 100]

    return month == 12 && day >= ws && day < ws + 7
}
const isChristmas = () => {
    const date = new Date()
    const month = date.getMonth() + 1
    const day = date.getDate()
    return month == 12 && day == 25
}
export default (width, height) => {
    if (!isWinterSolsticeWeek()) {
        return null
    }

    let amount = width < 720 ? 15 : 30
    if (isChristmas()) amount *= 5

    return new WSEventManager(width, height, amount)
}