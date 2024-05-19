 import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RouterConfigComponents from './RouteConfig';
import store from './Store/store';
import { Provider } from 'react-redux';
function App() {
  return (
    <>
    <Provider store={store}>
     <RouterConfigComponents/> 
    </Provider>
    </>
  );
}

export default App;
