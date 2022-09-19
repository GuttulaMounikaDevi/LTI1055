class Employee
{
    empName:string="";
    empSalary:Number=0;
    gross:any;


    constructor(Name:string,Salary:Number)
    {
        this.empName=Name;
        this.empSalary=Salary;
    }
    Display(): void
    {
console.log(this.empName+" "+this.empSalary);
    }
}

var emp=new Employee("Bill",20000);
emp.gross=Number(emp.empSalary)+500;
emp.Display();
console.log("Gross salary of Employee is :"+emp.gross)