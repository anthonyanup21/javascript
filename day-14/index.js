const users=[{firstName:"Anup",lastName:"abc",age:21},{firstName:"Anthony",lastName:"dfg",age:23},{firstName:"Rahul",lastName:"mnop",age:29}]

//tricky question of reduce
const ages=users.reduce((acc,curr)=>{
   
    if(!acc[curr.age]){
        acc[curr.age]=0
    }
    acc[curr.age]+=1
    return acc

},{})
console.log(ages)


//filter examples
// in this example we have chained both filter and map

const names=users.filter((user)=>user.age<30).map((user)=>user.firstName)
const output=names
console.log(output)

//same we can do using reduce

const outputNames=users.reduce((acc,curr)=>{
    if (curr.age<30){
        acc.push(curr.firstName)
    }
    return acc
},[])

console.log(outputNames)