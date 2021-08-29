const themeToggle = document.getElementById('theme-toggle');
const body = document.querySelector('body');
var theme = 1;

themeToggle.addEventListener('click', ()=>{
    theme++;
    switch(theme){
        case 2:
            body.classList.add('theme-2')
        break;
        case 3:
            body.classList.remove('theme-2')
            body.classList.add('theme-3')
            break;
        case 4:
            theme = 1;
            body.classList.remove('theme-3');
            break;

    }
    console.log('theme: ', theme);
    console.log(body);
})


// console.log(themeToggle);
// console.log(body);
