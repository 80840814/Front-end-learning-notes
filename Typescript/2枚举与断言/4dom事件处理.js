"use strict";
const bt = document.querySelector('#bt');
bt.addEventListener('click', (e) => {
    e.preventDefault();
    const body = document.querySelector('body');
    body.insertAdjacentHTML('beforeend', '<h2>asaa</h2>');
});
