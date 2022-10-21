import React from 'react';

class JokeApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: '',
            isLoading: false,
            hasError: false
        };
    }
    
    render() {
        return (
            <div>
                <p>{this.state.isLoading ? 'Loading' : this.state.joke}</p>
                <p>{this.state.hasError ? 'Please try again' : ''}</p>
                <button onClick={this._fetchJoke}>New Joke</button>
            </div>
        );
    }

    _fetchJoke = () => {
        const url = 'https://api.chucknorris.io/jokes/rando';
        this.setState({
            isLoading: true
        }, () => {
            fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.status && data.status !== 200) {
                    this.setState({
                        isLoading: false,
                        hasError: true
                    });
                    return;
                }
                console.log(data);
                this.setState({
                    joke: data.value,
                    isLoading: false
                }, () => {
                    console.log('New joke stored');
                })
            }).catch(err => {
                console.error(err);
                this.setState({
                    hasError: true,
                    isLoading: false,
                    joke: ''
                });
            })
        });
    }
}

export default JokeApp;