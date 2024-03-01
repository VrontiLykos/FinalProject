import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation';
import {useEffect, useState} from 'react';
import {store, persistor} from './store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import DataHelper from './src/helpers/DataHelper';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (store && !isLoading) {
      DataHelper.setStore(store);
    }
  }, [isLoading]);

  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistor}
        onBeforeLift={() => {
          console.log('store is loaded');

          setIsLoading(false);
        }}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
