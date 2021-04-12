import axios from "axios";

const URL = "https://randomuser.me/api/?results=100&nat=au";

export default {
  search: function() {
    return axios.get(URL);
  }
};
