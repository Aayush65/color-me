document.querySelector('.color-me').addEventListener('click', handleColors);
document.querySelector('.reset').addEventListener('click', reset);
const colored = [];

function handleColors() {
    const color = document.querySelector('.color').value;
    if (color > 9 || color < 1) {
        alert('Please enter a number between 1 and 9, inclusive.');
		return;
    }
    if (colored.length != 0)
        colored.pop();
    colored.push(color);
    coloring(colored);
}

function coloring(arr) {
    for (let i = 1; i <= 9; i++) {
        const cell = document.querySelector(`#c${i}`);
        if (cell.classList[1] == "colored")
            document.querySelector(`#c${i}`).classList.remove('colored');
    }
    for (let i = 0; i < arr.length; i++) 
        document.querySelector(`#c${arr[i]}`).classList.add('colored');
}

function reset() {
    colored.length = 0;
    document.querySelector('.color').value = 0;
    coloring(colored);
}