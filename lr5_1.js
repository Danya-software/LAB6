document.getElementById('calc').onclick = function() {
    let flat = document.getElementById('flat').value;

flat = parseInt(flat);

if (flat>=1 && flat<=20) alert('Перший під*їзд');

else if (flat>=21 && flat <=48) alert('Другий під*їзд');

else if (flat>=49 && flat<=90) alert('Третій під*їзд');

else alert('Помилка! Введіть знову');
}
