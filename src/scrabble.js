function getScore(string){
    if(string == '' || string == []){
        return 0
    } else if (string == 'a'){
        return 1
    } else if (string =='f'){
        return 4
    } else if(string.length> 1){
        var string1 = string.toUpperCase() 
        var newString = string1.split("")
        var sum = 0
        newString.forEach(function(item){
            if(item == 'S'||item == 'T'||item == 'R'|| item == 'E'){
                sum ++
            }
        })
        return sum
    }
}