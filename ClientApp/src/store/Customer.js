import api from "../services/api";

const requestAllCustomers = "REQUEST_ALL_CUSTOMERS";
const receiveAllCustomers = "RECEIVE_ALL_CUSTOMERS";
const addCustomer = "ADD_CUSTOMER";
const deleteCustomer = "DELETE_CUSTOMER";
const editCustomer = "EDIT_CUSTOMER";
const updateCustomer = "UPDATE_CUSTOMER";

const initialState = { customers: [], isLoading: false };

export const actionCreators = {
  requestCustomers: () => async (dispatch, getState) => {
    dispatch({ type: requestAllCustomers });
    const url = `/Customer/GetCustomer`;
    const response = await api.get(url);
    const { data } = response;
    if (response.status === 200) dispatch({ type: receiveAllCustomers, data });
    else console.error(response.statusText);    
  },
  addCustomer: obj => async (dispatch, getState) => {
    const url = `/Customer/AddCustomer`;
    const response = await api.post(url, obj);
    const { data } = response;
    if (response.status === 201) dispatch({ type: addCustomer, data });
    else console.error(response.statusText);
  },
  editCustomer: id => (dispatch, getState) => {
    dispatch({ type: editCustomer, id });
  },
  updateCustomer: obj => async (dispatch, getState) => {
    const url = `/Customer/UpdateCustomer`;
    const response = await api.put(url, obj);
    const { data } = response;
    if (response.status === 200) dispatch({ type: updateCustomer, data });
    else console.error(response.statusText);
  },
  deleteCustomer: id => async (dispatch, getState) => {
    const url = `/Customer/DeleteCustomer/${id}`;
    const response = await api.delete(url);
    if (response.status === 200) dispatch({ type: deleteCustomer, id });
    else console.error(response.statusText);   
  }
};

export const reducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case requestAllCustomers:
      return {
        ...state,
        isLoading: true
      };
    case receiveAllCustomers:
      return {
        ...state,
        customers: action.data,
        isLoading: false
      };
    case addCustomer:
      return {
        ...state,
        customers: state.customers.concat([action.data])
      };
    case editCustomer:
      return {
        ...state,
        customers: state.customers.map(customer =>
          customer.customerID === action.id
            ? { ...customer, editing: !customer.editing }
            : customer
        )
      };
    case updateCustomer:
      return {
        ...state,
        customers: state.customers.map(customer =>
          customer.customerID === action.data.customerID
            ? action.data
            : customer
        )
      };
      case deleteCustomer:
        return {
          ...state,
          customers: state.customers.filter(customer => customer.customerID !== action.id)
        };

    default:
      return state;
  }
};
