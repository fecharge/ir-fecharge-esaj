module.exports = function buildGetAuthorizedHeader({ ESAJ_ACCESS_TOKEN }) {
  if (!ESAJ_ACCESS_TOKEN) {
    throw new Error("buildGetAuthorizedHeader must have ESAJ_ACCESS_TOKEN.");
  }

  return function getAuthorizedHeader() {
    const authorizationValue = `Bearer ${ESAJ_ACCESS_TOKEN}`;

    const headers = {
      Authorization: `${authorizationValue}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    return headers;
  };
};
