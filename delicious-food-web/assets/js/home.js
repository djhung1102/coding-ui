const toggleBtn = document.querySelector(".menu-bar__main-toogle");
const navbarLink = document.querySelector(".menu-bar__main");
toggleBtn.addEventListener("click", function () {
    navbarLink.classList.toggle("active-navbar");
});

// home menu
const tabs = document.querySelectorAll('.home-menu__select-title');
const panes = document.querySelectorAll('.home-menu-main-tab');
tabs.forEach((tab, index) => {
    const pane = panes[index];
    tab.onclick = function() {
        const tabsActive = document.querySelector('.home-menu__select-title.active');
        const panesActive = document.querySelector('.home-menu-main-tab.active');
        panesActive.classList.remove('active');
        pane.classList.add('active');

        tabsActive.classList.remove('active');
        this.classList.add('active');
    }
})
