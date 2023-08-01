let num= prompt("enter your number");
num=Number.parseInt(num);
// let num=5;
console.log(num);
for(let i=1;i<=num;i++){
    for(let j=1;j<=i;j++){
        if(i%2===0){
            document.write(j);
        }else{
        document.write("*");
    }
       
    }
    document.write("<br>");
}