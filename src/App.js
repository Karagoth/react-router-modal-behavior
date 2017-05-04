import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import style from './style.css';

export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Route component={Home} path={"/"}/>
            </BrowserRouter>
        );
    }
}

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {input: 'hello?'}
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <Link to={"/info"}>More Info</Link><br />

                <Route path={"/info"} component={Info}/>
            </div>
        );
    }
}

class Info extends Component {
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }

    close(e) {
        this.props.history.goBack();
    }

    render() {
        return (
            <div className={style.modal} onClick={this.close}>
                <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                    <p>Here be some more info</p>
                    <button onClick={this.close}>Close</button>
                </div>
            </div>
        );
    }
}
