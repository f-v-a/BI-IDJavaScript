var p, q = 0,;
p = prompt("Введите p ");
q = prompt("Введите q ");  
        for (let i = 1; i <= q; i++) 
        { 
            if((q % i) == 0) 
            {
                if (ser(i, p) == 1)
                alert(i + " ");
            }
        }
    
    function ser(x, y) {
            return (y != 0) ? ser(y, x % y) : x;
    }
