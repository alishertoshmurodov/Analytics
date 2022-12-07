// rating componet 

window.addEventListener('load', function (e) {
    const starEls = document.querySelectorAll('.fa-star');
    for (let i = 0; i < starEls.length; i++) {
        starEls[i].setAttribute('value', i + 1)
    }
    console.log(starEls);
    starEls.forEach(element => {
        element.addEventListener('click', function (e) {
            for (let i = 0; i < Number(element.getAttribute('value')); i++) {
                starEls[i].classList.add('checked');
            }
        });        
    });
});



// sign up form

const buttonEl = document.querySelector('button[type=submit]');
const emailInputEl = document.querySelector('#email');
const passwordEl = document.querySelector('#password');
const rePasswordEl = document.querySelector('#re-password');


buttonEl.addEventListener('click', function (e) {
    if (!(emailInputEl && passwordEl.value.length > 7 && rePasswordEl.value.length > 7 && passwordEl.value === rePasswordEl.value)) {
        e.preventDefault();
    }
});

rePasswordEl.addEventListener('input', function (e) {
    if (rePasswordEl.value === passwordEl.value) {
        passwordEl.removeAttribute('style');
        rePasswordEl.removeAttribute('style');
        passwordEl.style = 'border-color: green';
        passwordEl.setAttribute('class', 'input-focus');
        rePasswordEl.setAttribute('class', 'input-focus')
    }
    else if (rePasswordEl.value !== passwordEl.value) {
        passwordEl.style = 'border-color: red';
        rePasswordEl.style = 'border-color: red';
    }
});

rePasswordEl.addEventListener('focus', function (e) {
    if (rePasswordEl.value !== passwordEl.value) {
        rePasswordEl.style = 'border-color: red';
    }
});

passwordEl.addEventListener('focus', function (e) {
    if (passwordEl.value !== passwordEl.value) {
        passwordEl.style = 'border-color: red';
    }
});

rePasswordEl.addEventListener('focusout', function (e) {
    passwordEl.removeAttribute('style');
    rePasswordEl.removeAttribute('style');
});

passwordEl.addEventListener('focusout', function (e) {
    passwordEl.removeAttribute('style');
    rePasswordEl.removeAttribute('style');
});



// plans scroll

const flex = document.querySelector('.pricing__container__flexbox');
flex.scrollLeft = 270;


// menu 

const menuIconEl = document.querySelector('.menu-icon');
const menuListEl = document.querySelector('.menu ul');

menuIconEl.addEventListener('click', function (e) {

    if (menuListEl.getAttribute('class') === 'menuListActive') {
        menuListEl.removeAttribute('class');
    } else {
        menuListEl.setAttribute('class', 'menuListActive');
    }
});



