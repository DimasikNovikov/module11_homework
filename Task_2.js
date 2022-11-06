// Напишите функцию, которая принимает на входе любое число (но не больше 1 000),
//  определяет, является ли оно простым, и выводит, простое число или нет. 
// Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.

function primeNumber(number) {
    if(number < 1 || number > 1000) {
        console.log("Данные неверны");
        return;
    }

    let numberOfDivisors = 0; 
    for (let i = 2; i <= number; i++)
        if(number % i === 0)
            numberOfDivisors++;
        
    if (numberOfDivisors === 1)
        console.log("Число Простое!!!");
    else
        console.log("Число Не Простое!!!");
    
}

primeNumber(4);
