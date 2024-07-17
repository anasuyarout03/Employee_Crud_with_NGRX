export function addEmployee(emp: any){
   return{
    type: 'ADD_EMPLOYEE',
    payload: emp
   }
}
export function deleleEmployee(id: any){
    return{
        type:'DELETE_EMPLOYEE',
        payload:{id}
    }
}