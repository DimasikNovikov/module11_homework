function main() {
    let a = prompt('Введите значение:');
    console.log(typeof(a) + " " + a);
    a++;
    a--;
    console.log(typeof(a) + " " + a);
    if (isNaN(a)) {
        console.log("Значение - NaN");
        return;
    }
    if (typeof (a) === "number") {
        if (a % 2 === 0)
            console.log("Значение - Чётное число");
        else
            console.log("Значение - Нечётное число");
    }
    else
        console.log("Упс, кажется, вы ошиблись");
}

main();