export interface AutoCookieModel {
  keep?: boolean
  defaultValue?: { [key: string]: any }
  cookieKey?: string
}

export function AutoCookie({defaultValue, cookieKey, keep}: AutoCookieModel) {
  return function (target: any, propertyKey: string) {
    let localKey;
    if (cookieKey) {
      localKey = btoa(cookieKey);
      let keyValue = window.localStorage.getItem(localKey);
      if (keyValue) {
        defaultValue = JSON.parse(keyValue);
      }
    }

    Reflect.set(target, propertyKey, defaultValue);

    if(keep){
      const obj = target[propertyKey];
      const proxy = new Proxy(obj, {
        get: function (tar, key, receiver) {
          // console.info(key)
          return Reflect.get(tar, key, receiver);
        },
        set: function (tar, key, value, receiver) {
          console.info(tar)
          console.info(key)
          console.info(value)
          let bo = Reflect.set(tar, key, value, receiver);
          // if (bo && localKey) {
          //   window.localStorage.setItem(localKey, JSON.stringify(tar));
          // }
          return bo;
        },
        deleteProperty: function (tar, key) {
          let bo = Reflect.deleteProperty(tar, key);
          // if (bo && localKey) {
          //   window.localStorage.setItem(localKey, JSON.stringify(tar));
          // }
          return bo;
        }
      });
      Reflect.set(target, propertyKey, proxy);
    }
  };
}
