
document.querySelectorAll('.input-info').forEach(inputInfo => {
    inputInfo.addEventListener('click', function () {
        let parentDiv = this.closest('.input');
        parentDiv.classList.toggle('checked');
    });
});


document.getElementById('submit').addEventListener('click', function (event) {
    event.preventDefault();

    document.querySelectorAll('.input').forEach(inputDiv => {
        if (!inputDiv.classList.contains('checked')) {
            inputDiv.classList.add('blink');

            setTimeout(() => {
                inputDiv.classList.remove('blink');
            }, 1000);
        }
    });
});



// Form Buttons 
document.querySelectorAll('.button .btn').forEach(button => {
    button.addEventListener('click', function () {
        let parentContainer = this.closest('.button');
        parentContainer.querySelectorAll('.btn').forEach(btn => {
            btn.classList.remove('active');
        });
        this.classList.add('active');
    });
});
