
const crypto = require("crypto");

const myObj = {
  title: "6 Secure Randoms",
  randoms: []
};

const size = 24;
crypto.randomBytes(size, (error, buffer) => {
  let secureHex = buffer.toString("hex");
  myObj.randoms.push({
    length: secureHex.length,
    random: secureHex
  });
  crypto.randomBytes(size - 4, (error, buffer) => {
    let secureHex = buffer.toString("hex");
    myObj.randoms.push({
      length: secureHex.length,
      random: secureHex
    });
    crypto.randomBytes(size - 8, (error, buffer) => {
      let secureHex = buffer.toString("hex");
      myObj.randoms.push({
        length: secureHex.length,
        random: secureHex
      });
      crypto.randomBytes(size - 12, (error, buffer) => {
        let secureHex = buffer.toString("hex");
        myObj.randoms.push({
          length: secureHex.length,
          random: secureHex
        });
        crypto.randomBytes(size - 16, (error, buffer) => {
          let secureHex = buffer.toString("hex");
          myObj.randoms.push({
            length: secureHex.length,
            random: secureHex
          });
          crypto.randomBytes(size - 20, (error, buffer) => {
            let secureHex = buffer.toString("hex");
            myObj.randoms.push({
              length: secureHex.length,
              random: secureHex
            });
           // console.log(JSON.stringify(myObj, null, 4));
          });
        });
      });
    });
  });
});

const makeSecureRandom = size => {
  return new Promise((resolve, reject) => {
      crypto.randomBytes(size, (error, buffer) => {
          if (error) {
              return reject(error);
          }
          let secureHex = buffer.toString("hex");
          return resolve({
              length: secureHex.length,
              random: secureHex
          });
      });
  });
};

const getSecureRandoms = async sizeList => {
  const promises = [];
  for (let index = 0; index < sizeList.length; index++) {
      const element = makeSecureRandom(sizeList[index]);
      promises.push(element);
  }
  return await Promise.all(promises);
};

module.exports.getSecureRandoms = getSecureRandoms;



