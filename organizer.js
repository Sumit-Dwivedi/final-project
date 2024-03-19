function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleViewport() {
    const organizerContainer = document.querySelector('.Organizer-container');
    const cardAbout = document.querySelector('.card-about');

    if (window.innerWidth > 1000 && isInViewport(organizerContainer)) {
        organizerContainer.style.justifyContent = 'flex-start';
        cardAbout.style.display = 'flex';
    } else {
        organizerContainer.style.justifyContent = 'center';
        cardAbout.style.display = 'none';
    }
}

window.addEventListener('scroll', handleViewport);
window.addEventListener('resize', handleViewport);

handleViewport();
