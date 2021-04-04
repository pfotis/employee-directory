import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=5";
const APIKEY = "";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function() {
    return axios.get(BASEURL);
  }
};
