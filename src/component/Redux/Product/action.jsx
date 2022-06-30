const handleloading = () => ({
  type: "HANDLE_LOADING",
});

const handlerror = () => ({
  type: "HANDLE_ERROR",
});

const Storedata = (payload) => ({
  type: "STORE_DATA",
  payload,
});
const getdata = () => (dispatch) => {
  dispatch(handleloading());

  fetch("http://localhost:8080/products")
    .then((res) => res.json())
    .then((res) => dispatch(Storedata(res)
    ))
    
    .catch(() => dispatch(handlerror()));
};

export { Storedata, handleloading, handlerror, getdata };
