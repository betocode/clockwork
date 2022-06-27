import ILocalCache from "../../data/interfaces/ILocalCache";


export default class LocalCache implements ILocalCache {
    set (key: string, value: object): void {
        if (value) {
          localStorage.setItem(key, JSON.stringify(value))
        } else {
          localStorage.removeItem(key)
        }
      }
    
      get (key: string): any {
        return JSON.parse(String(localStorage.getItem(key)))
      }

}