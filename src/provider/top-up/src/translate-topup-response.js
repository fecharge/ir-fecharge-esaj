module.exports = async function translateTopupResponse({ response }) {
  if (!response) {
    throw new Error("translateTopupResponse must have response.");
  } else if (!response.headers) {
    throw new Error("translateTopupResponse response must have headers.");
  }

  const contentType = response.headers.get("content-type");

  if (contentType.includes("application/json")) {
    try {
      const jsonResponse = await response.json();

      return jsonResponse;
    } catch (error) {
      throw error;
    }
  } else if (contentType.includes("text")) {
    try {
      const textResponse = await response.text();

      throw new Error(
        `translateGetProductListByOperatorResponse Error | ${contentType} response | ${textResponse}`
      );
    } catch (error) {
      throw error;
    }
  } else {
    throw new Error(
      `translateGetProductListByOperatorResponse Unknown Contnet Type  | ${contentType} `
    );
  }
};
