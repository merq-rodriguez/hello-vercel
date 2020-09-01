import React from 'react';
import logo from './logo.svg';
import './App.css';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            count: "?"
        };
    }

    refreshData() {
        fetch("api/count")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log("loaded");
                    this.setState({
                        count: result.body
                    });
                },
                (error) => {
                    this.setState({
                        count: "?",
                        error
                    });
                }
            )
    }

    componentDidMount() {
       this.refreshData();
    }

    render() {
        const {error, count} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        Hello Vercel!
                        <br/>
                        Count: {count}
                    </header>
                </div>
            );
        }
    }
}