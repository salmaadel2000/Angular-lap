export class Student {
    
    constructor(public _id:number|any,public name:string, public department:number,public image:string){
  
    }
   
}
export class Department {
    
    constructor(public _id:number,public name:string,public location:string){}
}
export class Auth {
    
    constructor(public name:string,public token: string ,public data:any){
    }

}