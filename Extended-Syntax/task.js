/*Первое задание:
a, b,c - коэффициенты квадратного уравнения 2x^2+4x-3=0*/

"use strict";

function getResult( a, b, c) {
  let x;
  if (b**2 - 4*a*c < 0) {
    console.log("Нет корней");
  } else if (b**2 - 4*a*c === 0) {
    x = - b / (2*a);
    console.log("Дискриминант равен нулю, значение: " + x);
  } else if (b**2 - 4*a*c > 0) {
    x = [(-b + Math.sqrt((b**2 - 4*a*c)))/(2*a) ,(- b - Math.sqrt((b**2 - 4*a*c)))/(2*a) ];
    console.log("Дискриминант больше нуля, значение: " + x);
  }
  return x;  
}

getResult(2,4,-3);
// getResult(1,2,1);
// getResult(1,1,1);