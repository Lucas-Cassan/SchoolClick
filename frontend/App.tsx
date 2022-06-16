import Route from "./component/Route";

import useCachedResources from "./hooks/useCachedResources";
import { Provider } from "react-redux";
import { Store } from "./redux/Store";

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={Store}>
        <Route />
      </Provider>
    );
  }
}
