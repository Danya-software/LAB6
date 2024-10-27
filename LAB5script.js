// Завдання 1: Замінити друге число нулем, якщо воно більше першого
function task1() {
    let num1 = parseFloat(prompt("Введіть перше число:"));
    let num2 = parseFloat(prompt("Введіть друге число:"));

    if (num2 > num1) {
        num2 = 0;
    }
    alert("Друге число: " + num2);
}

// Завдання 2: Знайти найменше та найбільше з трьох чисел
function task2() {
    let a = parseFloat(prompt("Введіть перше число:"));
    let b = parseFloat(prompt("Введіть друге число:"));
    let c = parseFloat(prompt("Введіть третє число:"));

    let min = Math.min(a, b, c);
    let max = Math.max(a, b, c);

    alert("Найменше число: " + min);
    alert("Найбільше число: " + max);
}

// Завдання 3: Піднести до квадрата всі додатні числа, від'ємні залишити без зміни
function task3() {
    let num1 = parseFloat(prompt("Введіть перше число:"));
    let num2 = parseFloat(prompt("Введіть друге число:"));
    let num3 = parseFloat(prompt("Введіть третє число:"));

    if (num1 >= 0) num1 = num1 ** 2;
    if (num2 >= 0) num2 = num2 ** 2;
    if (num3 >= 0) num3 = num3 ** 2;

    alert("Перше число: " + num1);
    alert("Друге число: " + num2);
    alert("Третє число: " + num3);
}

// Завдання 4: Визначити корені квадратного рівняння
function task4() {
    let a = parseFloat(prompt("Введіть значення a:"));
    let b = parseFloat(prompt("Введіть значення b:"));
    let c = parseFloat(prompt("Введіть значення c:"));

    let discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        let x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        alert("Корені рівняння: x1 = " + x1 + ", x2 = " + x2);
    } else if (discriminant === 0) {
        let x = -b / (2 * a);
        alert("Корінь рівняння: x = " + x);
    } else {
        alert("Рівняння не має дійсних коренів.");
    }
}

// Завдання 5: Авторизація
function task5() {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    if ((login === "Ivan" && password === "334455") ||
        (login === "Danya" && password === "2323") ||
        (login === "Petro" && password === "b5678")) {
        alert("Ласкаво просимо!");
    } else {
        alert("Помилка введення");
    }
}
