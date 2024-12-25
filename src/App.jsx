import Body from './components/body';
import Header from './components/header';
import appStore from './utils/configurestore';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';

function App() {


  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
      </Provider>

    </>
  )
}

export default App
