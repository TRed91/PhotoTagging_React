function StartButton({start, setTimerId, image}){

    const buttonStyles = {
        margin: 5,
        fontSize: 20,
    }

    const handleStartGame = (e) => {
        e.preventDefault();
        fetch(`https://plain-kalinda-tred91-e9c68be1.koyeb.app/timer`, {
            method: 'post'
        })
        .then(res => res.json())
        .then(data => {
            setTimerId(data.timerId);
            start();
        })
        .catch(err => console.log(err));
    }

    return(
        <div style={buttonStyles}>
            {image 
                ? <button onClick={handleStartGame}>Start</button> 
                : <button>Loading...</button>} 
        </div>
    )
}

export default StartButton;