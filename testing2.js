const flag = true


if (!flag)
{
console.log("condition satisfied")
}
else{
    console.log(flag)
console.log("not satisfied")
}

let i = 0
while(i>10)
{
    i++
console.log(i)
}

do
{
i++
}while(i>10);
console.log(i)
// valuables of 2 and 5
//from 1 to 10 give me common mulitple values of 2 and 5
let n=0
console.log("***********")
for (let k=1;k<=100;k++)
{
    if(k%2 == 0 || k%5 ==0)
    console.log(k)

}
// the above statement shows you the output in multiples of 2. == is comparing , just = is defining && combines || is the or operator

console.log("***********")
for (let k=1;k<=100;k++)
{
    if(k%2 == 0 || k%5 == 0)
    {
        n++
    console.log(k)
    if (n==3)
break
}

}

