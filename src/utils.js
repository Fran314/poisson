export const rebaseUrl = (s) => {
  if (s === null) {
    return null
  }
  // const config = useRuntimeConfig()
  const rebasedUrl = (import.meta.env.BASE_URL || '/') + s
  return rebasedUrl.replace(/\/\//, '/')
}

export const lerp = (arg, target, speed) => {
  return arg + speed * (target - arg)
}

export const mod = (arg, mod) => {
  while (arg < 0) arg += mod
  return arg % mod
}
export const easeInOut = (x) => {
  return 3 * x * x + 2 * x * x * x
}
export const clamp = (arg, min, max) => {
  if (arg < min) return min
  if (arg > max) return max
  return arg
}
