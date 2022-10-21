import React, { useState } from 'react';

const JokeAppFunction = () => {
    const [joke, setJoke] = useState('');
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const _fetchJoke = () => {
        const url = 'https://api.chucknorris.io/jokes/random?category=dev';

        setIsLoading(true);

        fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.status && data.status !== 200) {
                setIsLoading(false);
                setHasError(true);
                return;
            }

            setJoke(data.value);
            setIsLoading(false);
        })
        
    }

    return (
        <div>
            <p>
                {isLoading ? 'App is loading' : joke}
            </p>
            <p>
                {hasError ? 'Please try again' : ''}
            </p>
            <button onClick={_fetchJoke}>New Joke</button>
        </div>
    );
}

export default JokeAppFunction;