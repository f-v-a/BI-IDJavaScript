let
    n = parseInt(prompt("Введите год: ")),
    f = new Array(12);

    for(let i = 0; i < 12;i++){
        f[i] = '';
    }

if(n%4==0){
    for(let i = 25; i <=31; i++){
        if(Math.floor(wday(n, 1, i))==4){
            f[0] = i + '-01-' + n;
        }
    }

    for(let i = 23; i <=29; i++){
        if(Math.floor(wday(n, 2, i))==4){
            f[1] = i + '-02-' + n;
        }
    }

    for(let i = 25; i <=31; i++){
        if(Math.floor(wday(n, 3, i))==4){
            f[2] = i + '-03-' + n;
        }
    }

    for(let i = 24; i <=30; i++){
        if(Math.floor(wday(n, 4, i))==4){
            f[3] = i + '-04-' + n;
        }
    }

    for(let i = 25; i <=31; i++){
        if(Math.floor(wday(n, 5, i))==4){
            f[4] = i + '-05-' + n;
        }
    }

    for(let i = 24; i <=30; i++){
        if(Math.floor(wday(n, 6, i))==4){
            f[5] = i + '-06-' + n;
        }
    }

    for(let i = 25; i <=31; i++){
        if(Math.floor(wday(n, 7, i))==4){
            f[6] = i + '-07-' + n;
        }
    }

    for(let i = 25; i <=31; i++){
        if(Math.floor(wday(n, 8, i))==4){
            f[7] = i + '-08-' + n;
        }
    }

    for(let i = 24; i <=30; i++){
        if(Math.floor(wday(n, 9, i))==4){
            f[8] = i + '-09-' + n;
        }
    }

    for(let i = 25; i <=31; i++){
        if(Math.floor(wday(n, 10, i))==4){
            f[9] = i + '-10-' + n;
        }
    }

    for(let i = 24; i <=30; i++){
        if(Math.floor(wday(n, 11, i))==4){
            f[10] = i + '-11-' + n;
        }
    }

    for(let i = 25; i <=31; i++){
        if(Math.floor(wday(n, 12, i))==4){
            f[11] = i + '-12-' + n;
        }
    }
}else{
    for(let i = 25; i <=31; i++){
        if(Math.floor(wday(n, 1, i))==4){
            f[0] = i + '-01-' + n;
        }
    }

    for(let i = 22; i <=28; i++){
        if(Math.floor(wday(n, 2, i))==4){
            f[1] = i + '-02-' + n;
        }
    }

    for(let i = 25; i <=31; i++){
        if(Math.floor(wday(n, 3, i))==4){
            f[2] = i + '-03-' + n;
        }
    }

    for(let i = 24; i <=30; i++){
        if(Math.floor(wday(n, 4, i))==4){
            f[3] = i + '-04-' + n;
        }
    }

    for(let i = 25; i <=31; i++){
        if(Math.floor(wday(n, 5, i))==4){
            f[4] = i + '-05-' + n;
        }
    }

    for(let i = 24; i <=30; i++){
        if(Math.floor(wday(n, 6, i))==4){
            f[5] = i + '-06-' + n;
        }
    }

    for(let i = 25; i <=31; i++){
        if(Math.floor(wday(n, 7, i))==4){
            f[6] = i + '-07-' + n;
        }
    }

    for(let i = 25; i <=31; i++){
        if(Math.floor(wday(n, 8, i))==4){
            f[7] = i + '-08-' + n;
        }
    }

    for(let i = 24; i <=30; i++){
        if(Math.floor(wday(n, 9, i))==4){
            f[8] = i + '-09-' + n;
        }
    }

    for(let i = 25; i <=31; i++){
        if(Math.floor(wday(n, 10, i))==4){
            f[9] = i + '-10-' + n;
        }
    }

    for(let i = 24; i <=30; i++){
        if(Math.floor(wday(n, 11, i))==4){
            f[10] = i + '-11-' + n;
        }
    }

    for(let i = 25; i <=31; i++){
        if(Math.floor(wday(n, 12, i))==4){
            f[11] = i + '-12-' + n;
        }
    }
}

f.forEach(element => {
    alert(element);
});

 function wday(year, month, day) {
    year = parseInt(year, 10);
    month = parseInt(month, 10);
    day = parseInt(day, 10);
        if (month < 3) {
            --year;
            month += 10;
        } else
            month -= 2;
        return (day + 31 * month / 12 + year + year / 4 - year / 100 + year / 400) % 7;
}