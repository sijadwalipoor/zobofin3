function flip(event) {
    const flipCard = event.currentTarget ? event.currentTarget.closest('.flip-card-inner') : null;
    if (flipCard) {
        const currentStyle = window.getComputedStyle(flipCard).getPropertyValue('transform');

        if (currentStyle === 'none') {
            flipCard.style.transform = 'rotateY(180deg)';
        } else {
            flipCard.style.transform = '';
        }
    }
}