import React , { Suspense, lazy } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Comics = lazy(() => import('./components/Comics'));

export default function App() {
  return (
    <Router>
       <Suspense fallback={<div>Loading...</div>}>
          <Switch>
          <Route path="/">
                <Comics/>
            </Route>
          </Switch>
        </Suspense>
    </Router>
   
  );
}

