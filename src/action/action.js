export const saveContact = payload => {
    return {
        type: "SAVE_CONTACT",
        payload
    };
};

export const deleteContact = id => {
    return {
        type: "DELETE_CONTACT",
        id
    };
};