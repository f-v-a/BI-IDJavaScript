let L = [];
let sum = 0;
d0 = 5;
d1 = 2;
let a = prompt("введите a");
for(let i = 2; i < 9; i++)
{
  let k = prompt("Введите Lk(x) k = 2,3...");
  let d = prompt("Введите числа d"+[i]);
  L[0] = 1;
  L[1] = 1;
  L[k] = L[k-1] - (Math.pow(k-1, 2) * L[k-2])/((2*k-3)*(2*k-1));
  sum += (d * 1)*L[k] * a;
  alert(L[k]);
}
let end = d0 + (d1*L[1] * a) + sum;
alert("d0 + d1L1(a) + .... +d8L8(a) =  " + end);