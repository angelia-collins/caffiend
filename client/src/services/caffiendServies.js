import http from "../utils/API";

class CaffiendDataService {
  getAll() {
    return http.get("/budget");
  }

//   get(id) {
//     return http.get(`/tutorials/${id}`);
//   }

  create(data) {
    return http.post("/budget", data);
  }

  update(id, data) {
    return http.put(`/budget/${id}`, data);
  }

//   delete(id) {
//     return http.delete(`/tutorials/${id}`);
//   }

//   deleteAll() {
//     return http.delete(`/tutorials`);
//   }

//   findByTitle(title) {
//     return http.get(`/tutorials?title=${title}`);
//   }
}

export default new CaffiendDataService ();