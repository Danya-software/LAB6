// Завдання 16: Сума та добуток N перших натуральних чисел
function calculate() {
    let N = parseInt(document.getElementById('num').value);
    let sum = 0;
    let product = 1;

    // Перевірка на коректність введеного значення
    if (N < 1) {
        document.getElementById('result').innerHTML = 'Будь ласка, введіть натуральне число (N ≥ 1).';
        return;
    }

    for (let i = 1; i <= N; i++) {
        sum += i;
        product *= i;
    }

    document.getElementById('result').innerHTML = `Сума: ${sum}, Добуток: ${product}`;
}

// Завдання 17: Непарні числа від 1 до 99
function showOddNumbers() {
    let result = '';
    for (let i = 1; i <= 99; i += 2) {
        result += i + ' ';
    }
    document.getElementById('oddNumbers').innerHTML = result;
}

// Завдання 18: Обчислення факторіала
function calculateFactorial() {
    let N = parseInt(document.getElementById('factorialNum').value);
    let factorial = 1;

    for (let i = 2; i <= N; i++) {
        factorial *= i;
    }

    document.getElementById('factorialResult').innerHTML = `Факторіал: ${factorial}`;
}

// Завдання 19: Таблиця множення
function showMultiplicationTable() {
    let table = '<tr><th>*</th>';
    
    for (let i = 1; i <= 10; i++) {
        table += `<th>${i}</th>`;
    }
    
    table += '</tr>';
    
    for (let i = 1; i <= 10; i++) {
        table += `<tr><th>${i}</th>`;
        for (let j = 1; j <= 10; j++) {
            table += `<td>${i * j}</td>`;
        }
        table += '</tr>';
    }

    document.getElementById('multiplicationTable').innerHTML = table;
}
