import api from "../services/api";

const requestAllCars = "REQUEST_ALL_CARS";
const receiveAllCars = "RECEIVE_ALL_CARS";
const addCar = "ADD_CAR";
const deleteCar = "DELETE_CAR";
const editCar = "EDIT_CAR";
const updateCar = "UPDATE_CAR";

const initialState = { cars: [], isLoading: false };

export const actionCreators = {
  requestCars: () => async (dispatch, getState) => {
    dispatch({ type: requestAllCars });

    const url = `/Car/GetAvailableCars`;
    const response = await api.get(url);
    const { data } = response;
    if (response.status === 200) dispatch({ type: receiveAllCars, data });
    else console.error(response.statusText);    
  },
  requestRentalCars: () => async (dispatch, getState) => {
    dispatch({ type: requestAllCars });

    const url = `/Car/GetRentalCars`;
    const response = await api.get(url);
    const { data } = response;
    if (response.status === 200) dispatch({ type: receiveAllCars, data });
    else console.error(response.statusText);    
  },
  addCar: obj => async (dispatch, getState) => {
    const url = `/Car/AddCar`;
    const response = await api.post(url, obj);
    const { data } = response;
    if (response.status === 201) dispatch({ type: addCar, data });
    else console.error(response.statusText);
  },
  editCar: id => (dispatch, getState) => {
    dispatch({ type: editCar, id });
  },
  updateCar: obj => async (dispatch, getState) => {
    const url = `/Car/UpdateCar`;
    const response = await api.put(url, obj);
    console.log(response);
    const { data } = response;
    if (response.status === 200) dispatch({ type: updateCar, data });
    else console.error(response.statusText);
  },
  deleteCar: id => async (dispatch, getState) => {
    const url = `/Car/DeleteCar/${id}`;
    const response = await api.delete(url);
    if (response.status === 200) dispatch({ type: deleteCar, id });
    else console.error(response.statusText);   
  }
};

export const reducer = (state, action) => {
  state = state || initialState;
  switch (action.type) {
    case requestAllCars:
      return {
        ...state,
        isLoading: true
      };
    case receiveAllCars:
      return {
        ...state,
        cars: action.data,
        isLoading: false
      };
    case addCar:
      return {
        ...state,
        cars: state.cars.concat([action.data])
      };
    case editCar:
      return {
        ...state,
        cars: state.cars.map(car =>
          car.carID === action.id
            ? { ...car, editing: !car.editing }
            : car
        )
      };
    case updateCar:
      return {
        ...state,
        cars: state.cars.map(car =>
          car.carID === action.data.carID
            ? action.data
            : car
        )
      };
      case deleteCar:
        return {
          ...state,
          cars: state.cars.filter(car => car.carID !== action.id)
        };

    default:
      return state;
  }
};
