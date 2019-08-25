function notifyCopied(emoji) {
    const notificationEl = document.getElementById('notification');
    notificationEl.innerHTML = `Copied ${emoji} to clipboard`;
    notificationEl.style.display = 'block';

    setTimeout(() => notificationEl.style.display = 'none', 3000);
}

document.addEventListener('click', (event) => {
    if (event.target.className && event.target.className === 'emoji') {
        const emojiElement = event.target;
        const emoji = emojiElement.innerHTML;
        navigator.clipboard.writeText(emoji).then(
            result => notifyCopied(emoji)
        );
    }
});