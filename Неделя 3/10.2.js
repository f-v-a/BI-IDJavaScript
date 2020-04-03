  let a = [];
  let i, n, x, s;
  {
  n = prompt('n: ');
  for(let i = 0; i < n; i++)
  {
    a[i] = prompt('');;
  }
    x = prompt('x: ');
    s = 0;
  for (let i = 1; i < n; i++)
  {
    s = s+a[i]*Math.exp(Math.log(x)*(i-1));
    alert(s);  
  }
  }