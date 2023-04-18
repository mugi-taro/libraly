const tabs = document.querySelectorAll('[data-toggle="tab"]');
const tab_contents = document.getElementsByClassName('tab-pane');

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function (e) {
        e.preventDefault();

        for (let j = 0; j < tabs.length; j++) {
            tabs[j].classList.remove('active');
            tab_contents[j].classList.remove('active');
            tab_contents[j].classList.remove('show');
        }

        tabs[i].classList.add('active');
        tab_contents[i].classList.add('active');
        tab_contents[i].classList.add('show');
    });
}
