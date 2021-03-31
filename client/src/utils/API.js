import axios from "axios";

export default {
  // Gets inventory
  getInventory: function() {
    return axios.get("http://localhost:8080/api/inventory");
  },
  // Saves coffee info to the database
  saveInventory: function(coffeeData) {
    return axios.post("http://localhost:8080/api/inventory", coffeeData);
  }

};