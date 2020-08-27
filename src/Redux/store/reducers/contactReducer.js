const initState = {
  contacts: [
    {
      id: 1,
      firstName: "Damilare",
      surname: "Segun",
      email: "damilare@enyata.com",
      phone_no: "08123456789"
    },
    {
      id: 2,
      firstName: "Oluwakemi",
      surname: "Raimi",
      email: "oluwakemi@enyata.com",
      phone_no: "08167489194"
    },
    {
      id: 3,
      firstName: "Motunrayo",
      surname: "Akinrimisi",
      email: "motunrayo@enyata.com",
      phone_no: "08123782789"
    },
    {
      id: 4,
      firstName: "Obafemi",
      surname: "Taiwo",
      email: "obafemi@enyata.com",
      phone_no: "08043456789"
    },
    {
      id: 5,
      firstName: "Taiwo",
      surname: "Matthew",
      email: "taiwo@enyata.com",
      phone_no: "08065772847"
    },
    {
      id: 6,
      firstName: "Motunrayo",
      surname: "Akinrimisi",
      email: "motunrayo@enyata.com",
      phone_no: "08123782789"
    },
    {
      id: 7,
      firstName: "Obafemi",
      surname: "Taiwo",
      email: "obafemi@enyata.com",
      phone_no: "08043456789"
    },
    {
      id: 8,
      firstName: "Taiwo",
      surname: "Matthew",
      email: "taiwo@enyata.com",
      phone_no: "08065772847"
    }
  ]
};

const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case "SAVE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.concat(action.payload)
      };
      case "DELETE_CONTACT":
        return {
          ...state,
          contacts: state.contacts.filter(contact => {
              return contact.id !== action.id;
          })
        };
    default:
      return state;
  }
};

export default contactReducer;
