import React, { Component } from 'react';
import './App.css';
import Board1 from './containers/Board1'
import Board2 from './containers/Board2'

import Instructions from './containers/Instructions'


class App extends Component {

  render() {
    return (
      <div className="App">

        <h1 className="title">Battleship</h1>

        <Instructions />
        <br />

        <div className="Boards">

          <div className="MyFloat">
            <div className="MyFloatTitle">My Float</div>
            <div className="MyFloatBoard"><Board1 /></div>
          </div>

          <div className="Opponent">
            <div className="OpponentTitle">My Opponent</div>
            <div className="OpponentBoard"><Board2 /></div>
          </div>

        </div>

      </div>
    );
  }
}

export default App;










// import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
// import LoginPage from './components/login/LoginPage'
// import SignupPage from './components/signup/SignupPage'
// import GamesList from './components/games/GamesList'
// import GameDetails from './components/games/GameDetails'
// import LogoutPage from './components/logout/LogoutPage'
// import './App.css'
// import TopBar from './components/layout/TopBar'
//
// // <Route exact path="/signup" component={SignupPage} />
// // <Route exact path="/games" component={GamesList} />
// // <Route exact path="/games/:id" component={GameDetails} />
//
// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <TopBar />
//           <Route exact path="/login" component={LoginPage} />
//           <Route exact path="/logout" component={LogoutPage} />
//           <Route exact path="/signup" component={SignupPage} />
//           <Route exact path="/games" component={GamesList} />
//           <Route exact path="/games/:id" component={GameDetails} />
//           <Route exact path="/" render={ () => <Redirect to="/games" /> } />
//         </div>
//       </Router>
//     )
//   }
// }
// export default App
