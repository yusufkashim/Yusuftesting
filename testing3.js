var marks = Array(6)
var marks = new Array(20,49,35,23,37,100)
// THE ARRAY IS CALLED MARKS 

var marks = [20,49,35,23,37,100]
console.log(marks.slice(2,5))// gives you the result from that section of the array - so in this scenario it would be [35,23,37]
subMarks=marks.slice(2,5)
console.log(marks[0]) //index start from 0, so this output will log 20 , {e.g. 0,1,2,3 is how it counts} 
marks[3] = 14 // this would be to change the 3rd index to 14, so in this case the number 23 would change to 14 
console.log(marks)
console.log(marks.length)// this is how many "elements" there are, in this case there are 6.  extected result = 6
marks.push(65) //this is "pushing"/ adding another number to "marks" and "marks" we have said it is equal to [20,49,35,23,37,100]
console.log(marks) //  [20,49,35,23,37,100,25,65] - this is the expected result 
marks.pop() // this deletes the index at the end of the array
marks.unshift(9) // this adds an index at the start of an array
console.log(marks)
marks.indexOf(37)
console.log(marks.indexOf(37))// this shows the lenth identifier of the number input. 37 is the 5th number in the array, so expected result is 5
console.log(marks.includes(120)) // this will check if something is included in the array - in this case it should result to false 
//console.log(subMarks)// weve called the array submarks and submarks is equal to the array marks being sliced and from 2-5 so only them results will show 
var sum =0  //this is a new array called sum and its value is 0 
for(let i = 0;i<marks.length; i++)// starts from the 0 index and prints eveything individually - step by step
{
   // console.log(marks[i]) 
   sum = sum + marks[i]
}

console.log(sum)
let total = marks.reduce((sum,mark)=>sum+mark,0)// this is another way to add eveyrthing up - (mark is a new array,)
console.log(total)