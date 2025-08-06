export const lerp = (arg, target, speed) => {
    return arg + speed * (target - arg)
}

export const mod = (arg, mod) => {
    while (arg < 0) arg += mod
    return arg % mod
}
export const clamp = (arg, min, max) => {
    if (arg < min) return min
    if (arg > max) return max
    return arg
}
