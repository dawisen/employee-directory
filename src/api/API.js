import axios from "axios";

const getEmployees = function () {
   return axios.get("https://randomuser.me/api/?results=20");
  // return $.ajax({
  //   url: "https://randomuser.me/api/?results=20",
  //   method: "GET",
  //   dataType: "json",
  // });
}

export default getEmployees;
