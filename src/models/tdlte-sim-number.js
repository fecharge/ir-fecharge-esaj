module.exports = function makeTDLTESimNumber({ mobileNumber }) {
  if (!mobileNumber) {
    throw new Error(
      "شماره سیمکارت TDLTE را وارد کنید",
      "makeTDLTESimNumber must have mobileNumber"
    );
  }

  return Object.freeze({
    getStandardMobileNumber: () => mobileNumber,
  });
};
