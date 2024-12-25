import img from '~/assets/img/decorations/autumn-leaf.png'

const SWING_WIDTH = 200
const SWING_HEIGHT = 150
const SWING_DURATION = 1.5
// Default swing are left to right
const P = -2.6 // radians (beginning of swing)
const Q = -1.2 // radians (end of swing)
const COS_P = Math.cos(P)
const SIN_P = Math.sin(P)
const COS_Q = Math.cos(Q)
const SIN_Q = Math.sin(Q)

const isAutumnEquinoxWeek = () => {
    const autumnEquinox = [
        22, 23, 23, 23, 22, 23, 23, 23, 22, 22, 23, 23, 22, 22, 23, 23, 22, 22,
        23, 23, 22, 22, 23, 23, 22, 22, 23, 23, 22, 22, 23, 23, 22, 22, 23, 23,
        22, 22, 23, 23, 22, 22, 22, 23, 22, 22, 22, 23, 22, 22, 22, 23, 22, 22,
        22, 23, 22, 22, 22, 23, 22, 22, 22, 23, 22, 22, 22, 23, 22, 22, 22, 22,
        22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
        22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
    ]

    const date = new Date()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const ae = autumnEquinox[date.getFullYear() % 100]

    return month == 8 && day >= ws && day < ws + 7
}
const hasParam = () => {
    let url = new URL(window.location.href)
    return url.searchParams.get('decoration') === 'autumn-equinox'
}

const easeBetweenPnQ = x => {
    const easedX = 3 * x * x - 2 * x * x * x
    return P + easedX * (Q - P)
}

export default class AutumnEquinox {
    constructor(width, height) {
        this.image = new Image()
        this.image.src = img

        this.active = isAutumnEquinoxWeek() || hasParam()

        const amount = width < 720 ? 10 : 20

        this.particles = []
        for (let i = 0; i < amount; i++) {
            const scale = 0.5 + Math.random()
            const swingDuration = 1.25 + Math.random() * 0.5
            const swingWidth = SWING_WIDTH * scale
            const swingHeight = SWING_HEIGHT * scale

            const swingDir = 1 // 1 = to the right, -1 = to the left
            const anchorX = Math.random() * width
            const anchorY = -((i * height) / amount + swingHeight)
            const life = Math.random()
            const rot = 0

            this.particles.push({
                swingDuration,
                swingWidth,
                swingHeight,
                swingDir,
                anchorX,
                anchorY,
                life,
                rot,
            })
        }
    }

    update(dt, width, height) {
        this.particles.forEach(p => {
            const newSwingCount = Math.floor((p.life + dt) / p.swingDuration)
            const oldSwingCount = Math.floor(p.life / p.swingDuration)
            if (newSwingCount > oldSwingCount) {
                // Starting a new swing
                const newSwingDir = Math.random() < 0.5 ? 1 : -1
                // const newSwingDir = -p.swingDir

                // console.log(p.anchorX)
                // Why this "linear combination"? Do all the 4 cases for the possible signs
                // of swingDir and newSwingDir and it becomes this (keep in mind that COSP < 0)
                p.anchorX +=
                    (p.swingDir * COS_Q - newSwingDir * COS_P) * p.swingWidth
                p.anchorX =
                    mod(p.anchorX + p.swingWidth, width + p.swingWidth * 2) -
                    p.swingWidth

                // Again, keep in mind that SIN_P, SIN_Q < 0 but also that the canvas
                // has y increasing downwards
                p.anchorY += -(SIN_Q - SIN_P) * p.swingHeight
                while (p.anchorY > height + 100) {
                    p.life = 0
                    p.anchorY -= height + 100 + 100 // the additional +100 is to start at height -100 instead of 0
                }

                p.swingDir = newSwingDir
            }
            p.life += dt

            const swingProgress = (p.life / p.swingDuration) % 1
            const swingAngle = easeBetweenPnQ(swingProgress)
            const targetRotAngle =
                p.swingDir == 1
                    ? -swingAngle - Math.PI / 2
                    : swingAngle - Math.PI / 2 - P - Q

            p.rot = lerp(p.rot, targetRotAngle, dt * 1.25)
        })
    }

    draw(ctx) {
        this.particles.forEach(p => {
            const swingProgress = (p.life / p.swingDuration) % 1
            const angle = easeBetweenPnQ(swingProgress)
            const x = p.anchorX + p.swingDir * Math.cos(angle) * p.swingWidth

            // Keep in mind that y increases downward and
            const y = p.anchorY - Math.sin(angle) * p.swingHeight

            ctx.translate(x, y)
            ctx.rotate(p.rot)
            ctx.drawImage(
                this.image,
                -this.image.width,
                -this.image.height,
                this.image.width,
                this.image.height,
            )
            ctx.rotate(-p.rot)
            ctx.translate(-x, -y)
        })
    }
}
