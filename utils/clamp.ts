export default function (arg: number, min: number, max: number) {
    if (arg < min) return min
    if (arg > max) return max
    return arg
}
