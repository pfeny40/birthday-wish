document.addEventListener('DOMContentLoaded', () => {
    const heart = document.getElementById('heart');
    const introMessage = document.getElementById('intro-message');
    const messageContainer = document.getElementById('message-container');
    const messageText = document.getElementById('message-text');

    const messages = [
        "Happy Birthday! May this year be your best one yet. 🎉",
        "In just a few months, you've brought more joy into my life than I could have ever imagined. 😊",
        "When we first met, I never knew you'd become my fiancée. But now, it feels like you were always meant to be in my life. ✨",
        "your messages are always the best part of my day. i wait for your message every day, everytime .",
        "I can't wait to meet you again soon to celebrate all these moments together.💖",
        "Happy Birthday, my love! I want to give you all the happiness in the world, and this is just the beginning.",
        "Your smile is the most beautiful thing I've ever seen. Please keep smiling forever! 🎈"
    ];

    let messageIndex = 0;

    heart.addEventListener('click', () => {
        if (messageIndex < messages.length) {
            // Hide intro message after the first click
            introMessage.style.display = 'none';

            messageContainer.classList.remove('hidden');
            messageText.textContent = messages[messageIndex];
            messageText.style.animation = 'none'; // Reset animation
            setTimeout(() => {
                messageText.style.animation = 'fadeIn 1s forwards';
            }, 10);

            messageIndex++;
        } else {
            // Final message after all messages have been shown
            showFinalMessage();
        }
    });

    function showFinalMessage() {
        heart.style.display = 'none';
        messageContainer.style.backgroundColor = 'transparent';
        messageText.innerHTML = `
            <p style="font-size: 2.5em; color: #e74c3c;">Happy Birthday, My Life! 💍</p>
            <p style="font-size: 1.5em;">- Your Partner</p>
            <p style="font-size: 1.2em; margin-top: 20px;">I made this for you to make your birthday special. I hope you love it.</p>
        `;
        messageText.style.animation = 'fadeIn 1s forwards';
    }
});