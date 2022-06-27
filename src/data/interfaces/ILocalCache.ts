export default interface ILocalCache{
    get: (key: string) => any
    set: (key: string, value: object) => void
}