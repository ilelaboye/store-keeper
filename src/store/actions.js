import axios from "axios";
import Swal from "sweetalert2";

const errorHandler = (message = "Something went wrong!") => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 7000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon: "error",
    title: message,
  });
};

export default {
  handleError(context, error) {
    console.log(error.request.response);
    if (error.request.status == 422) {
      var resp = JSON.parse(error.request.response);
      errorHandler(resp.error.message);
    } else if (error.request.status == 500) {
      resp = JSON.parse(error.request.response);
      errorHandler(resp.error.message);
    } else if (error.request.status == 404) {
      resp = JSON.parse(error.request.response);
      var msg = "Request not found";
      errorHandler(msg);
    } else if (error.request.status == 400) {
      resp = JSON.parse(error.request.response);
      errorHandler(resp.message);
    } else if (error.request.status == 401) {
      var res = JSON.parse(error.request.response);
      errorHandler(resp.error.message);
      context.commit("logout");
    } else if (error.request.status == 403) {
      var res2 = JSON.parse(error.request.response);
      errorHandler(resp.error.message);
      context.commit("logout");
    } else {
      msg = "Oops! server error, Please try again";
      errorHandler(msg);
    }
  },
  // postHeader(context, data){
  //     return new Promise((resolve,reject)=>{
  //         axios.post(context.state.endpoint+data.endpoint , data.details,{
  //             'Access-Control-Request-Headers':'application/json'
  //         })
  //         .then((data)=>{
  //             resolve(data);
  //         })
  //         .catch((error)=>{
  //             context.dispatch('handleError',error);
  //             reject(error)
  //         })
  //     })
  // },
  post(context, data) {
    // console.log(data)
    return new Promise((resolve, reject) => {
      axios
        .post(context.state.endpoint + data.endpoint, data.details, {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + context.state.token,
          },
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          context.dispatch("handleError", error);
          reject(error);
        });
    });
  },
  put(context, data) {
    // console.log(data)
    return new Promise((resolve, reject) => {
      axios
        .put(context.state.endpoint + data.endpoint, data.details, {
          headers: {
            "content-type": "application/json",
            Authorization: "Bearer " + context.state.token,
          },
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          context.dispatch("handleError", error);
          reject(error);
        });
    });
  },
  get(context, endpoint) {
    return new Promise((resolve, reject) => {
      axios
        .get(context.state.endpoint + endpoint, {
          headers: {
            accept: "application/json",
            "content-type": "application/json",
            Authorization: "Bearer " + context.state.token,
            // "Abp.TenantId":context.state.user.country.tenantId,
            // 'Access-Control-Allow-Origin':'*',
          },
        })
        .then((data) => {
          resolve(data);
        })
        .catch((error) => {
          context.dispatch("handleError", error);
          reject(error);
        });
    });
  },
};
