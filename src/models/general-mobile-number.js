module.exports = function makeGeneralMobileNumber({ mobileNumber }) {
  if (!mobileNumber) {
    throw new Error(
      "شماره سیمکارت را وارد کنید",
      "makeGeneralMobileNumber must have mobileNumber"
    );
  }

  return Object.freeze({
    getStandardMobileNumber: () => mobileNumber,
  });
};
