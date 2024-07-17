const initialState = [
    {id: 101, name: 'anu',sal: 5000},
    {id: 102, name: 'arati',sal: 7000}
];

function employeesReducer(state = initialState,action: any){
    switch(action.type){
        case 'ADD_EMPLOYEE':
            return [...state,action.payload];
        case 'DELETE_EMPLOYEE':
            return state.filter(emp =>{
                return emp.id !== action.payload.id;
            });
        default:
            return state;
    }
}

export const rootReducer = {
    employeesReducer
}