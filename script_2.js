function fact(n){
        var i=1
        var enter=n;
        while(i<enter-1){
            n= n+n*i;
            i=i+1;
        }
        console.log(n);
    
}     
let n = Number (prompt("Donne moi un nombre entier"));
fact(n);