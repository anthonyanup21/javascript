function add(){
    const arr=Object.values(arguments)


    return arr.reduce((acc,curr)=>{
        acc+=curr
        return acc

    },0)
}

const result=add(1,2,1000000)
console.log(result)