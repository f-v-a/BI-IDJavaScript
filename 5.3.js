let
    nomagic_array = [[1,2,3,4,5],
                    [6,7,8,9,10],
                    [11,12,13,14,15],
                    [16,17,18,19,20],
                    [21,22,23,24,25]];
                  
                                      /*[[17,24,1,8,15],
                                      [23,5,7,14,16],
 //магический квадрат                 [4,6,13,20,22],
                                      [10,12,19,21,3],
                                      [11,18,25,2,9]];*/
array(nomagic_array);

function array(num){
    let
        sum = [0,0,0,0,0,0,0,0,0,0,0,0];

    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            sum[j] += num[i][j];
        }
    }

    for(let i = 0; i < 5; i++){
        for(let j = 0; j < 5; j++){
            sum[j+5] += num[j][i];
        }
    }

    for(let i = 0; i < 5; i++){
        sum[10] += num[i][i];
    }

    for(let i = 0, j = 4; i < 5, j >= 0 ; i++, j--){
        sum[11] += num[i][j];
    }

    for(let i = 1; i < 12; i++){
        if(sum[0]!=sum[i]){
            alert("Не является магическим квадратом");
            return;      
        }
    }
    alert("Является магическим квадратом"); 
}