let str = "hello";
console.log(str);

let x:number = 5;
x=4;

const cons = "constant";

interface food{
    name:string;
    calor:number;
};

// let f:food;
// f.name = "pitza";
// f.calor = 123;
let f:food={name:"pitzz",calor:123};
console.log(f.name);


function rest(... parms){}
rest(1,2,3);

interface student{
    name:string;
    age : number;
    marks: number[];
    total:number;
}


let std1:student = {name:"aa",age:123,marks:[40,50,60],total:0};
let std2:student = {name:"bb",age:456,marks:[60,70,80],total:0};
let std3:student = {name:"cc",age:789,marks:[20,30,40],total:0};


console.log("Student 1 Total Mark: "+calcMarks(std1).total);
console.log("Student 2 Total Mark: "+calcMarks(std2).total);
console.log("Student 3 Total Mark: "+calcMarks(std3).total);


function calcMarks(std:student)
{
    let sum = 0;
    for(const mark of std.marks)
{
    sum+=mark;
}
std.total=sum/ std.marks.length;
return std ;
}


class car{
    model:string;
    color:string;
    year:number;

    constructor(model,color,year)
    {        
        this.model= model;
        this.color = color;
        this.year = year;
    }

    PrintData(){
    console.log(`Model: ${this.model} color: ${this.color} year: ${this.year}`);
   }
}

let c = new car("BMW","red","2014");
c.PrintData();