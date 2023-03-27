export const Add_data = (data) => {
    return {
        type : "ADDDATA",
        payload : data
    }
}

export const Delete_data = (id) => {
    return {
        type : "DELETEDATA",
        payload : id
    }
}

export const Edit_data = (id) => {
    return {
        type : "EDITDATA",
        payload : id
    }
}

export const Update_data = (data) => {
    console.log(data);
    return {
        type : "UPDATE",
        payload : data
    }
}

