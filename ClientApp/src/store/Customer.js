import api from "../services/api";

const requestAllCustomers = "REQUEST_ALL_CUSTOMERS";
const receiveAllCustomers = "RECEIVE_ALL_CUSTOMERS";
const addCustomer = "ADD_CUSTOMER";
const deleteCustomer = "DELETE_CUSTOMER";
const updateCustomer = "UPDATE_CUSTOMER";

const initialState = { customers: [], isLoading: false };

export const actionCreators = {
  requestCustomers: () => async (dispatch, getState) => {
    dispatch({ type: requestAllCustomers });

    const url = `/Customer/GetCustomer`;
    const response = await api.get(url);
    const { data } = response;
    if (response.status == 200) dispatch({ type: receiveAllCustomers, data });
    else alert(`erro`);
  },
  addCustomer: obj => async (dispatch, getState) => {
    debugger;
    const url = `/Customer/AddCustomer`;
    const response = await api.post(url, obj);
    const { data } = response;
    if (response.status == 201) dispatch({ type: addCustomer, data });
    else alert(`erro`);
  }
};

export const reducer = (state, action) => {
  state = state || initialState;

  if (action.type === requestAllCustomers) {
    return {
      ...state,
      isLoading: true
    };
  }

  if (action.type === receiveAllCustomers) {
    return {
      ...state,
      customers: action.data,
      isLoading: false
    };
  }

  if (action.type == addCustomer) {
    debugger;
    return {
      ...state,
      customers: state.customers.concat([action.data])
    };
  }

  return state;
};
