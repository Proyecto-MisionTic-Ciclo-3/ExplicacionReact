import Index from "pages/index";
import RhodesianInfoPage from "pages/rhodesian";
import {BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";  
import "styles/styles.css";


function App() {
  return (
    <div className='App'>
      <Router>
          <Switch>
                <Route path='/rhodesian'>
                    <RhodesianInfoPage />
                </Route>

                <Route path='/'>
                    <Index />
                </Route>
          </Switch>
 
      </Router>
    </div>
  );
}

export default App;