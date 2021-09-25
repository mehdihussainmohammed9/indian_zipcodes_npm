const fetch = require("node-fetch");

module.exports = function zipcode(Zipcode) {
  console.log("This is a message from the demo package", Zipcode);
  var k = fetch("https://api.postalpincode.in/pincode/" + Zipcode)
    .then((res) => res.json())
    .then((res) => {
      console.log(res[0].PostOffice);
    });
};
