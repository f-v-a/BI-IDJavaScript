function first(x1,y1,x2,y2,x3,y3,x4,y4,f)
{
var a,b,c;

a = y2-y1;
b = x1-x2;
c = x1*(y1-y2)+y1*(x2-x1);

var f =(a*x3+b*y3+c)*(a*x4+b*y4+c)>0
Boolean(f);
}
var x1,y1,x2,y2,x3,y3,x4,y4,x5,y5,x6,y6,s,s1,s2;
    f1 = true;
    f2 = true;
    f3 = true;
{
alert("Введите координаты вершин первого треугольника");
x1 = prompt("Введите x1 : ");
y1 = prompt("Введите y1 : ");
x2 = prompt("Введите x2 : ");
y2 = prompt("Введите y2 : ");
x3 = prompt("Введите x3 : ");
y3 = prompt("Введите y3 : ");
alert("Введите координаты вершин второго треугольника");
x4 = prompt("Введите x4 : ");
y4 = prompt("Введите y4 : ");
x5 = prompt("Введите x5 : ");
y5 = prompt("Введите y5 : ");
x6 = prompt("Введите x6 : ");
y6 = prompt("Введите y6 : ");
first(x4,y4,x5,y5,x1,y1,x2,y2,f1);
first(x5,y5,x6,y6,x2,y2,x3,y3,f2);
first(x6,y6,x4,y4,x3,y3,x1,y1,f3);
if (f1 && f2 && f3)
{
  alert("Первый треугольник принадлежит второму");
  s1 = Math.abs((x1-x3)*(y2-y3)-(x2-x3)*(y1-y3))/2;
  s2 = Math.abs((x4-x6)*(y5-y6)-(x5-x6)*(y4-y6))/2;
  s = s2-s1;
  alert("Площадь внешней части = " + s)
 }
else 
{
  alert("Первый треугольник не принадлежит второму");
  }
}