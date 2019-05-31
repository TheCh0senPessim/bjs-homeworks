/*Первое задание:
a, b,c - коэффициенты квадратного уравнения 2x^2+4x-3=0*/

"use strict";

function getResult( a, b, c) {
  let x;
  let D = b**2 - 4*a*c;
  if (b**2 - 4*a*c < 0) {
    console.log(`Нет корней`);
  } else if (D === 0) {
    x = - b / (2*a);
    console.log(`Дискриминант равен нулю, значение: ${x}`);
  } else if (D > 0) {
    x = [(-b + Math.sqrt(D))/(2*a) ,(- b - Math.sqrt(D))/(2*a) ];
    console.log(`Дискриминант больше нуля, значение: ${x}`);
  }
  return x;  
}

getResult(2,4,-3);
// getResult(1,2,1);
// getResult(1,1,1);

//Второе задание:

function getAverageMark(...marks) {
  let total = 0;
  for (let i = 4; i >=0; i--) {
  total = total + marks[ i ];
}
total = total/5;
return total;
}


getAverageMark(4,4,5,4,4)