import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Router,
} from "react-router-dom";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import NotFound from "./pages/NotFound.js";
import Confirmation from "./pages/Confirmation.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact></Route>
          <Route path="/upload" component={Upload}></Route>
          <Route path="/confirmation" component={Confirmation}></Route>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
