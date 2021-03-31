import axios from "axios";

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
