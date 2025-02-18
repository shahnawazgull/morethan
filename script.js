
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



// calendar show 
document.querySelectorAll('.input-info').forEach(inputInfo => {
    let inputField = inputInfo.querySelector('input');
    let placeholder = inputInfo.querySelector('.placeholder');

    // Open the calendar when clicking on .input-info
    inputInfo.addEventListener('click', function () {
        inputField.showPicker(); // This opens the date picker on supported browsers
    });

    // Update the placeholder text when a date is selected
    inputField.addEventListener('change', function () {
        placeholder.textContent = this.value; // Set the p tag text to the selected date
    });
});
