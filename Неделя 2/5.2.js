var n = prompt("Введите n ");
var m = prompt("Введите m ");
var f = 0;
var a = new Array();
for( var i = 0; i < n; i++)
{
  a[i] = new Array();
  for( var j = 0; j < m; j++)
    {
        a[i][j] = 2;
    }
}
for( var i = 0; i < n; i++)
{
  for( var j = 0; j < m; j++)
  {
    f += a[i][j];
  }
  alert(f);
  f = 0;
}
