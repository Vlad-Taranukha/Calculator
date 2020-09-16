/*Получаем оба числа*/
let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');

/*Запрещаем вводить всё, кроме цифр и точки для первого числа*/
firstNumber.addEventListener('keypress', function (event) {
    if(( event.keyCode < 48 || event.keyCode > 57) && event.key != '.'){
        event.preventDefault();
    }
});

/*Запрещаем вводить всё, кроме цифр и точки для второго числа*/
secondNumber.addEventListener('keypress', function (event) {
    if(event.keyCode < 48 || event.keyCode > 57 && event.key != '.'){
        event.preventDefault();
    }
});

/*Изменяем знак числа по кнопке слева возле поля ввода каждого из чисел*/
let changeSignBtns = document.getElementsByClassName('changeSign');
for (let i = 0; i < changeSignBtns.length; i++){
    changeSignBtns[i].addEventListener('click', function () {
        if(this.nextElementSibling.value != ""){
            this.nextElementSibling.value = -this.nextElementSibling.value;
        }
    });
}

/*Определяем, какая операция будет происходить с числами*/
let signBtns = document.getElementsByClassName('operationBtn');
let operator = "";
for (let i = 0; i < signBtns.length; i++){
    signBtns[i].addEventListener('click', function () {
        operator = this.value;
        this.style.backgroundColor = 'green';
    });
}

/*Формируем результат по нажатию кнопки "="*/
document.getElementById('resBtn').addEventListener('click', function () {
    if (firstNumber.value != "" && secondNumber.value != ""){
        let res = eval(Number(firstNumber.value) +""+operator+""+Number(secondNumber.value));
        document.getElementById('resultNumber1').innerText = "(" +  firstNumber.value + ")";
        document.getElementById('resultNumber2').innerText = "(" + secondNumber.value + ")";
        document.getElementById('operation').innerText = operator;
        document.getElementById('result').innerText = res;
        document.getElementById('finalResult').style.display = 'block';
        for (let i = 0; i < signBtns.length; i++){
            signBtns[i].removeAttribute('style');
        }
    }
});