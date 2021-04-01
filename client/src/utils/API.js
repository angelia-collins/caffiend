import axios from "axios";

<<<<<<< HEAD
export default axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});
=======
export default {
  // Gets inventory
  getInventory: function() {
    return axios.get("/api/inventory");
  },
  // Saves coffee info to the database
  saveCoffee: function(coffeeData) {
    return axios.post("/api/inventory", coffeeData);
  }

};
>>>>>>> 73138e27dc23ab06e4802f41fededdf43f8a9f04
