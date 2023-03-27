let crud = localStorage.getItem('user');

const initialstate = {
        users : crud ? JSON.parse(crud) :  [],
        user : {}
}

const updown = (state = initialstate,action) => {
       
    switch(action.type){
        case "ADDDATA" :
            let re = [...state.users,action.payload];
            localStorage.setItem('user',JSON.stringify(re));
            return {
                
            }
        break;

        case "DELETEDATA" : 
            let drecord = state.users.filter((val)=>{
                return val.id !== action.payload
            })
            localStorage.setItem('user',drecord)
           return {
                ...state,
                users : drecord
           }
        break;

        case "EDITDATA" : 
           let urecord = state.users.find((val)=>{
                return val.id == action.payload
           });
           return {
                ...state,
                user : urecord
           }
        break;

        case "UPDATE" : 
           let all = JSON.parse(localStorage.getItem('user'));
           let r = all.map((val)=>{
                if(val.id === action.payload.id){
                    return action.payload;
                }else{
                    return val;
                }
           })
           localStorage.setItem('user',JSON.stringify(r));
           return {
                ...state,
                users : r
           }
        break;

        default : 
            return state;
    }
}

export default updown;