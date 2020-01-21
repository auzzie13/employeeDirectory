import axios from "axios";

export default {
    search: function() {
        return axios.get("http://dummy.restapiexample.com/api/v1/employees");
    }
};