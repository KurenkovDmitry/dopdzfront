const dontClickElements = {
    button: document.getElementById('Button')
}

const modal = document.getElementById('Show');

function editIndexHtml() {
    modal.tabIndex = -1;
    document.getElementById('Button').addEventListener('click', (event) => {
        modal.style.opacity = '1';
        modal.focus();

        /*if (modal.style.opacity === '0' || modal.style.opacity === '') {
            modal.style.opacity = '1';  // Показываем окно
            modal.focus();  // Устанавливаем фокус на модальное окно
        }*/
    });
}

editIndexHtml();

modal.addEventListener('blur', () => {
    modal.style.opacity = '0';
})
