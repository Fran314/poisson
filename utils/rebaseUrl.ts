export default function (s: String | null) {
    if (s === null) {
        return null
    }
    const config = useRuntimeConfig()
    const rebasedUrl = config.app.baseURL + s
    return rebasedUrl.replace(/\/\//, '/')
}
