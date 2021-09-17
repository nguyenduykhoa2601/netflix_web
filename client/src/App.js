import { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import DetailMovie from './components/Home/DetailMovie/DetailMovie';
import NotFound from './components/utils/NotFound/NotFound'
import HomePage from './components/Home/HomePage';
import UserAccount from './components/Home/UserAccount/UserAccount';
import Watch from './components/Home/Watch/Watch';
import { GlobalState } from './GlobalState';

function App() {
    const state = useContext(GlobalState)
    const [user] = state.user


    // const logoutAdmin = () => {
    //     localStorage.removeItem('admin')
    //     setIsLogged(false)
    //     window.location.href = "/"
    // }
    return (
        <Router>
            <div className="App">
                {
                    user.accessToken ?
                        <>
                            
                            <Switch>
                                <Route path="/" exact component={HomePage} />
                                <Route path="/user" exact component={UserAccount} />
                                <Route path="/watch/:id" exact component={Watch} />
                                <Route path="/detailMovie/:id" exact component={DetailMovie} />
                                <Route path="*" exact component={NotFound} />
                            </Switch>
                           
                        </>
                        :
                        <Switch>
                            <Route path="/" exact component={Login} />
                            <Route path="/register" exact component={Register} />
                            <Route path="*" exact component={NotFound} />
                        </Switch>

                }

            </div>
        </Router>

    );
}

export default App;
