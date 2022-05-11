const input = document.querySelector('input');
input.addEventListener('input', () => {
    document.querySelector('.container').style.backgroundColor = input.value;
})