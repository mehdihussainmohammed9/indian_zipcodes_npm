const fetch = require("node-fetch");

module.exports = function zipcode(Zipcode) {
  var k = fetch("https://api.postalpincode.in/pincode/" + Zipcode)
    .then((res) => res.json())
    .then((res) => {
      console.log(res[0].PostOffice);
    });
};
