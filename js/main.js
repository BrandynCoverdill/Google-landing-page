// Global variables ===================

// Main search bar
const searchBar = document.getElementById("searchBar");
// Sign-in Button
const signInBtn = document.querySelector(".nav-right button");
// Settings link on footer
const settingsButton = document.querySelector(".settings");
// Settings menu popup
const settingsMenu = document.querySelector(".settings-menu");
// Sidebar menu button
const sideMenuBtn = document.querySelector(".nav-left span");
// Side menu
const sideMenu = document.querySelector(".side-menu");
// Side menu Google Logo
const sideMenuLogo = document.querySelector('.side-menu img');
// Trending settings button
const trendingSettingsBtn = document.querySelector('.trending-settings-icon');
// Trending settings menu
const trendingSettingsMenu = document.querySelector(".trending-settings-links");
// Trending settings close button
const trendingCloseBtn = document.querySelector(".close-btn");

// Event Listeners ====================

// Makes text from the search bar go to the real google and search that text
searchBar.addEventListener("keypress", function (e) {
    const googleSearchUrl = "https://www.google.com/search?q=" + searchBar.value;
    if (e.key === 'Enter' && searchBar.value != "") {
        window.location.href = googleSearchUrl;
    }
});

// Makes the user redirect to logging in to the real google website
signInBtn.addEventListener('click', () => {
    window.location.href = "https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fwww.google.com%2F&ec=GAZAAQ&hl=en&passive=true&ifkv=AXo7B7XsX2HtSDTe7MOv8nUM9nEhvgroZHqwKWUyYAzi8mQRx-CuzbL46OG-O-09nDV8WF8MM7ZrNQ&flowName=GlifWebSignIn&flowEntry=ServiceLogin";
});

// Show the settings menu from the setting link
settingsButton.addEventListener('click', () => {
    settingsMenu.classList.toggle("active");
});

// Makes the left side menu show up for the user
sideMenuBtn.addEventListener('click', () => {
    sideMenu.showModal();
});

// Makes the side menu close when clicking the google logo
sideMenuLogo.addEventListener('click', () => {
    sideMenu.close();
});

// Makes the trending settings menu to popup
trendingSettingsBtn.addEventListener('click', () => {
    trendingSettingsMenu.classList.toggle('active');
});

// Closes the trending settings menu popup
trendingCloseBtn.addEventListener('click', () => {
    trendingSettingsMenu.classList.toggle('active');
});