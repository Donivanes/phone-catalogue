import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";

import { store } from "../lib/redux/store";
import { phoneData } from "./api/phones.api.js";

import { Loading } from "../src/components/Loading";
import { useSetPhones } from "./redux/action";

export const withAuthentication = (Component) => () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    phoneData()
      .then((phones) => store.dispatch(useSetPhones(phones)))
      .catch((e) => console.error(e.response.statusText))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Provider store={store}>
      {loading && <Loading />}
      <Component />
    </Provider>
  );
};
