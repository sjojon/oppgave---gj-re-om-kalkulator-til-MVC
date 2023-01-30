//model
var resultBox = '';

//view
updateView()
function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
    <p id="resultBox" class="resultBox">${resultBox}</p>

    <p class="firstInRow" onclick="addCharacter(7)">7</p>
    <p onclick="addCharacter(8)">8</p>
    <p onclick="addCharacter(9)">9</p>
    <p onclick="addCharacter('÷')">÷</p>

    <p class="firstInRow" onclick="addCharacter(4)">4</p>
    <p onclick="addCharacter(5)">5</p>
    <p onclick="addCharacter(6)">6</p>
    <p onclick="addCharacter('x')">x</p>

    <p class="firstInRow" onclick="addCharacter(1)">1</p>
    <p onclick="addCharacter(2)">2</p>
    <p onclick="addCharacter(3)">3</p>
    <p onclick="addCharacter('-')">-</p>

    <p class="firstInRow" onclick="addCharacter(0)">0</p>
    <p onclick="clearResult();">C</p>
    <p onclick="calculate()">=</p>
    <p onclick="addCharacter('+')">+</p>
    `;
}




//controller
function addCharacter(x) {
    resultBox += x;
    updateView();
}

function calculate() {
    var calculation = resultBox
        .replace('x', '*')
        .replace('÷', '/');
    resultBox = eval(calculation);
    updateView();
}
function clearResult() {
    resultBox = '';
    updateView();
}