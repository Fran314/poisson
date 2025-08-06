export const rebaseUrl = s => {
    if (s === null) {
        return null
    }
    // const config = useRuntimeConfig()
    const rebasedUrl = (import.meta.env.BASE_URL || '/') + s
    return rebasedUrl.replace(/\/\//, '/')
}
