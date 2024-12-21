import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './auth/login/Login';
import Register from './auth/register/Register';
import Root from './routes/routes';
function App() {
  return (
    <>
    <Root />
    </>
  );
}

export default App;
