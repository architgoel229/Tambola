const themeCheckbox = document.getElementById('theme');
        const root = document.documentElement;  // More efficient than querySelector(':root')

        themeCheckbox.addEventListener('change', () => {
            if (themeCheckbox.checked) {
                root.style.setProperty('--bgC', '#f1f1f1');
                root.style.setProperty('--txtC', '#202124');
                root.style.setProperty('--secBgC', 'rgb(210,209,206)');
                root.style.setProperty('--tertBgC', 'rgb(195,191,188)');
                document.querySelector(`i.ri-moon-fill`).style.opacity=0;
                document.querySelector(`i.ri-moon-fill`).style.rotate=`-360deg`;
                document.querySelector(`i.ri-sun-fill`).style.opacity=1;
                document.querySelector(`i.ri-sun-fill`).style.rotate=`360deg`;
                document.querySelector(`i.ri-sun-fill`).style.scale="1";
            } else {
                root.style.setProperty('--bgC', '#202124');
                root.style.setProperty('--txtC', '#f1f1f1');
                root.style.setProperty('--secBgC', 'rgb(45, 46, 49)');
                root.style.setProperty('--tertBgC', '#3c4043');
                document.querySelector(`i.ri-moon-fill`).style.opacity=1;
                document.querySelector(`i.ri-moon-fill`).style.rotate=`360deg`;
                document.querySelector(`i.ri-sun-fill`).style.opacity=0;
                document.querySelector(`i.ri-sun-fill`).style.rotate=`-360deg`;
                document.querySelector(`i.ri-sun-fill`).style.scale="1.25";
            }
        });
        if (themeCheckbox.checked) {
            // Apply light theme
            root.style.setProperty('--bgC', '#f1f1f1');
            root.style.setProperty('--txtC', '#202124');
            root.style.setProperty('--secBgC', 'rgb(210,209,206)');
            root.style.setProperty('-tertBgC', '#3c4043');
        }

function announcerPage(){
    document.querySelector(`.homePage`).style.display='none';
    document.querySelector(`.announcerPage`).style.display='flex';
}

function participantPage(){
    document.querySelector(`.homePage`).style.display='none';
    document.querySelector(`.participantPage`).style.display='flex';
}

function homePage(){
    closeAll();
    document.querySelector('.homePage').style.display='flex';
}
function rulePage(){
    closeAll();
    document.querySelector('.rulePage').style.display='flex';
}
function howToPlayPage(){
    closeAll();
    document.querySelector('.howToPlayPage').style.display='flex';
}
function aboutPage(){
    closeAll();
    document.querySelector('.about').style.display='flex';
}

function showSidebar(){
    document.querySelector(`.sidebar`).style.right='0px';
}

function hideSidebar(){
    document.querySelector(`.sidebar`).style.right='-100%';
}

function closeAll(){
    document.querySelector(`.announcerPage`).style.display='none';
document.querySelector(`.homePage`).style.display='none';
document.querySelector(`.participantPage`).style.display='none';
document.querySelector('.rulePage').style.display='none';
document.querySelector('.howToPlayPage').style.display='none';
document.querySelector('.about').style.display='none';
document.querySelector(`.sidebar`).style.right='-100%';
}