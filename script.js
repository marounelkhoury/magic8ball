document.addEventListener('DOMContentLoaded', () => {
    const magicButton = document.getElementById('magicButton');
    const answerField = document.getElementById('answerField');
    const magic8ballImage = document.getElementById('magic8ballImage'); // Get the image element

    const answers = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes - definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy, try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ];

    function getRandomAnswer() {
        const randomIndex = Math.floor(Math.random() * answers.length);
        return answers[randomIndex];
    }

    magicButton.addEventListener('click', () => {
        // Clear previous answer and show a waiting message
        answerField.textContent = "Thinking...";
        
        // Disable the button to prevent multiple clicks
        magicButton.disabled = true;
        magicButton.textContent = "Waiting...";

        // Add the shake class to the image
        magic8ballImage.classList.add('shake');

        // Wait for 5 seconds before revealing the answer
        setTimeout(() => {
            const answer = getRandomAnswer();
            answerField.textContent = answer;
            
            // Remove the shake class from the image
            magic8ballImage.classList.remove('shake');

            // Re-enable the button
            magicButton.disabled = false;
            magicButton.textContent = "Get Answer";
        }, 5000); // 5000 milliseconds = 5 seconds
    });
});