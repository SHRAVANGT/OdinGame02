document.addEventListener('DOMContentLoaded', function() {
    let container = document.querySelector('.container');
    let header = document.querySelector('.header');

    let input = document.createElement('input');
    let clearButton = document.createElement('button');
    clearButton.textContent = 'Clear';
    clearButton.classList.add('clear-button');
    let controls = document.querySelector('.controls');

    let inputDiv = document.createElement('div');
    inputDiv.classList.add('input-class')

    let gridSize = document.createElement('p')

    gridSize.classList.add('gridsize')
    gridSize.textContent = 'GridSize:16*16';

    input.type = 'range';
    input.min = '0';
    input.value = '16';
    input.max = '100';
    input.classList.add('slider');
    inputDiv.appendChild(input);
    inputDiv.appendChild(gridSize)
    controls.appendChild(clearButton);
    controls.appendChild(inputDiv);


    let mouseDown = false;
    document.body.onmousedown = () => (
        mouseDown = true)
    document.body.onmouseup = () => (
        mouseDown = false)
    input.oninput = function() {
        let n = parseInt(input.value);
        createGrid(n);
    }

    // Create a 16x16 grid of square divs
    function createGrid(n) {
        container.innerHTML = '';
        gridSize.textContent = `GridSize:${n}*${n}`;

        for (let i = 0; i < n * n; i++) {
            let squareDivs = document.createElement('div');
            squareDivs.classList.add(`squareDivs${i}`);
            squareDivs.style.width = `${16/n}rem`;
            squareDivs.style.height = `${16/n}rem`;
            container.appendChild(squareDivs);

            // Add event listener to each square div
            squareDivs.addEventListener('mousedown', colorPicker)
            squareDivs.addEventListener('mouseover', colorPicker)
                // To clear the grid of square divs
            clearButton.addEventListener('click', () => {
                if (squareDivs.classList.contains('hovered'))
                    squareDivs.classList.remove('hovered')
            })


        }
    }

    function colorPicker(e) {
        if (e.type === 'mouseover' && !mouseDown) return;
        e.target.classList.add('hovered');

    }


})