class DataHelper {
  store = undefined;

  getStore = () => {
    return this.store;
  };

  setStore = storeRef => {
    this.store = storeRef;
  };

  getAccessToken = () => {
    return this.store.getState().user?.data?.accessToken;
  };
}

export default new DataHelper();
