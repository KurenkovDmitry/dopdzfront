const dontClickElements = {
    button: document.getElementById('Button')
}

const modal = document.getElementById('Show');

function prov(param) {
    let flag = true;

    for (let key in dontClickElements) {
        if (dontClickElements[key] === param) {
            flag = false;
            break;
        }
    }

    return flag;
}

modal.addEventListener('click', (event) => {
    event.stopPropagation();
});

document.addEventListener('click', (event) => {
    if (prov(event.target)) {
        modal.style.opacity = '0';
    }
});
