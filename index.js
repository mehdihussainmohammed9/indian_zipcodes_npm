const fetch = require("node-fetch");

function ZipcodeData(string) {
  fetch("https://api.postalpincode.in/pincode/" + string)
    .then((res) => res.json())
    .then((res) => {
      console.log(res[0].PostOffice);
      return res[0].PostOffice;
    });
}

module.exports = ZipcodeData();
