const header = document.querySelector('#site-header');
const footer = document.querySelector('#site-footer');

header.innerHTML = `<nav class="site-nav" aria-label="Main navigation">
    <a href="index.html">Home</a>
    <a href="resume.html">Resume</a>
    <a href="portfolio.html">Portfolio</a>
</nav>`;

footer.innerHTML = `<p>Contact me at <a href="https://rose-hulman.joinhandshake.com/profiles/8ev6ra">Handshake</a> or with my email <a href="mailto:huangw5@rose-hulman.edu">huangw5@rose-hulman.edu</a></p>`;

const detailsButton = document.querySelector('#details-toggle');

if (detailsButton) {
    const projectDetails = document.querySelectorAll('.card p, .card span');
    let detailsAreHidden = false;

    // use a button to show and hide HTML elements.
    // Source: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
    detailsButton.onclick = function () {
        if (detailsAreHidden) {
            for (let i = 0; i < projectDetails.length; i++) {
                projectDetails[i].style.display = 'block';
            }
            detailsButton.textContent = 'Hide project details';
            detailsAreHidden = false;
        } else {
            for (let i = 0; i < projectDetails.length; i++) {
                projectDetails[i].style.display = 'none';
            }
            detailsButton.textContent = 'Show project details';
            detailsAreHidden = true;
        }
    };
}
