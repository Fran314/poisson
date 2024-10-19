export default function (arg: number, mod: number) {
    while (arg < 0) arg += mod
    return arg % mod
}
