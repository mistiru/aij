function buildFuriganasToggleSwitch() {
    const furiganasToggleSwitch = document.getElementById('furiganas-switch');
    if (!furiganasToggleSwitch) {
        document.body.classList.add('show-furiganas');
        return;
    }

    furiganasToggleSwitch.addEventListener('change', () => {
        if (furiganasToggleSwitch.checked) {
            document.body.classList.add('show-furiganas');
            localStorage.removeItem('show-furiganas');
        } else {
            document.body.classList.remove('show-furiganas');
            localStorage.setItem('show-furiganas', 'false');
        }
        furiganasToggleSwitch.blur();
    });

    if (localStorage.getItem('show-furiganas') !== 'false') {
        furiganasToggleSwitch.checked = true;
        furiganasToggleSwitch.dispatchEvent(new Event('change'));
    }
}

(function () {
    buildFuriganasToggleSwitch();
})();
