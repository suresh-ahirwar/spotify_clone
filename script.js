

// Select all elements with the class 'redirect-btn'
const redirectButtons = document.querySelectorAll('.images_1');

// Loop through each element and add a click event listener
redirectButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Get the URL from the data-url attribute
        const url = this.getAttribute('data-url');
        
        // Redirect to the specified URL
        window.location.href = 'playlist.html';
    });
});

const artistbtn = document.querySelectorAll('.images');

// Loop through each element and add a click event listener
artistbtn.forEach(button => {
    button.addEventListener('click', function() {
        // Get the URL from the data-url attribute
        const url = this.getAttribute('data-url');
        
        // Redirect to the specified URL
        window.location.href = 'playlist.html';
    });
});


//nav bar script //

window.onscroll = function() {
    changeNavbarBackground();
};

function changeNavbarBackground() {
    // Get the navbar element
    const navbar = document.getElementById("navbar");
    
    // Get the offset position of the section below the navbar
    const sticky = navbar.offsetTop;
    
    // Check if the user has scrolled past the navbar
    if (window.pageYOffset > sticky) {
        // Add the sticky class to the navbar
        navbar.classList.add("sticky");
    } else {
        // Remove the sticky class from the navbar
        navbar.classList.remove("sticky");
    }
}