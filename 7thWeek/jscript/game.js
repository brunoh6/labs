document.getElementById('guessButton').addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    let attemptsLeft = 5;
    const text = document.getElementById("textField");
    text.style.display = "block";
    setTimeout(function() {
        text.style.display = "none";
    }, 3400);

    function makeGuess() {
        let userGuess = parseInt(document.getElementById('guessInput').value);
        let feedback = document.getElementById('feedback');
        let attempts = document.getElementById('attempts');

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
            feedback.textContent = 'Please enter a valid number between 1 and 10.';
            setTimeout(function() {
                if (confirm("Invalid Character! Let's try again")) {
                    window.location.reload();
                }
            }, 500);
        }

        attemptsLeft--;
        attempts.textContent = `Attempts left: ${attemptsLeft}`;

        if (userGuess === randomNumber) {
            feedback.textContent = 'Congratulations! You guessed the number!';
            attempts.textContent = '';
            setTimeout(resetGame, 2000);
        } else if (userGuess > randomNumber) {
            feedback.textContent = 'Too high.';
        } else {
            feedback.textContent = 'Too low.';
        }

        if (attemptsLeft === 0) {
            feedback.textContent = `You ran out of attempts! The number was ${randomNumber}.`;
            attempts.textContent = '';
            setTimeout(resetGame, 2000);
        }
    }

    function resetGame() {
        if (confirm('Play again?')) {
            document.getElementById('feedback').textContent = '';
            document.getElementById('attempts').textContent = '';
            document.getElementById('guessInput').value = '';
        }
    }

    makeGuess();
});
