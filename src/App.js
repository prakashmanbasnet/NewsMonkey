import NavBar from './components/NavBar'
import News from './components/News';
import React, { Fragment, useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <>
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='red'
            progress={progress}
            height={4}
          />
          <Routes>
            <Fragment>
              <Route exact path='/' element={<News setProgress={setProgress} key='Home' category='general' />}> </Route>
              <Route exact path='/sports' element={<News setProgress={setProgress} key='Sports' category='sports' />}> </Route>
              <Route exact path='/business' element={<News setProgress={setProgress} key='Business' category='business' />}> </Route>
              <Route exact path='/entertainment' element={<News setProgress={setProgress} key='entertainment' category='entertainment' />}> </Route>
              <Route exact path='/health' element={<News setProgress={setProgress} key='health' category='health' />}> </Route>
              <Route exact path='/science' element={<News setProgress={setProgress} key='science' category='science' />}> </Route>
              <Route exact path='/technology' element={<News setProgress={setProgress} key='technology' category='technology' />}> </Route>
            </Fragment>

          </Routes>
        </Router>
      </div>
    </>

  );
}

export default App;
