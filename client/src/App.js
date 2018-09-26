import React, { Component } from 'react';
import './App.css';
import ListsContainer from './components/ListsContainer';
import {GoogleAPI, GoogleLogin, GoogleLogout} from 'react-google-oauth';

class App extends Component {
   constructor() {
        super();
        this.state = { isAuthenticated: false, user: null, token: ''};
  }

  logout = () => {
      this.setState({isAuthenticated: false, token: '', user: null})
  };


  responseGoogle = (google_response) => {
    var token = google_response.Zi;
    const requestOptions = {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${google_response.Zi.accessToken}`,
        'Content-Type': 'application/json',
        'access_token': `${google_response.Zi.accessToken}`
      },
      body: JSON.stringify(token)
    }

    console.log('RESPONSEGOOGLE')
    console.log(google_response)
    console.log(requestOptions)

    return fetch('/auth/request', requestOptions)
      .then(response => {
        // Cookie.set('accesstoken', response.headers.get('access-token'), {
        //   expires: 7
        // });
        // Cookie.set('client',response.headers.get('client'), {expires: 7});
        // Cookie.set('tokentype',response.headers.get('token-type'), {expires: 7});
        // Cookie.set('expiry',response.headers.get('expiry'), {expires: 7});
        // Cookie.set('uid', response.headers.get('uid'),{expires: 7});
        console.log('Setting cookie here')
        console.log(response)
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">List example!</h1>

        </header>
        <h2>Login</h2>
        <GoogleAPI className="GoogleLogin" clientId="353785721759-4bp1vlk62ctn0uj2voea76p7c5uhttfh.apps.googleusercontent.com">
        <div>
          <GoogleLogin  backgroundColor="#A31515" 
                        text="login"
                        width="180px" 
                        access="offline" 
                        scope="email profile" 
                        onLoginSuccess={this.responseGoogle} 
                        onFailure={this.responseGoogle}/>
          <GoogleLogout />     
        </div>
        </GoogleAPI>

        <ListsContainer />
      </div>
    );
  }
}

export default App;