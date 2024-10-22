import img0 from '~/assets/img/decorations/chocobo-run/0.png'
import img1 from '~/assets/img/decorations/chocobo-run/1.png'
import img2 from '~/assets/img/decorations/chocobo-run/2.png'
const imgs = [img0, img1, img2]

const FRAME_DURATION = 0.1

class ChocoboEventManager {
    constructor(width, height, amount) {
        this.images = [...Array(3).keys()].map(i => {
            const img = new Image()
            img.src = imgs[i]
            return img
        })

        this.life = 0
        this.y = height
        this.x = width + 200
    }

    update(dt, width, height) {
        this.life += dt
    }

    draw(ctx) {
        const frame = Math.floor(this.life / FRAME_DURATION) % 3
        ctx.translate(this.x - this.life * 200, this.y)
        ctx.drawImage(
            this.images[frame],
            -this.images[frame].width / 2,
            -this.images[frame].height, // This is to have the base point at footlevel
            this.images[frame].width,
            this.images[frame].height,
        )
        ctx.translate(-this.x + this.life * 200, -this.y)
    }
}
const hasParam = () => {
    let url = new URL(window.location.href)
    return url.searchParams.get('decoration') === 'chocobo-run'
}
export default (width, height) => {
    const dice = Math.floor(Math.random() * 20)
    if (dice != 0 && !hasParam()) {
        return null
    }
    let amount = width < 720 ? 15 : 30
    return new ChocoboEventManager(width, height, amount)
}
