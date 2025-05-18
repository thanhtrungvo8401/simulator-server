class DataService {
  private _proxies: Record<string, any> = {};

  setProxiesValue(proxies: Record<string, any> = {}) {
    this._proxies = proxies;
  }

  getProxiesKey() {
    return Object.keys(this._proxies);
  }

  getProxyValueByKey(key: string) {
    return this._proxies[key];
  }
}

export default new DataService();
