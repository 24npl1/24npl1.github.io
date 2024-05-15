import axios from "axios";

function generateToken(clientId, clientSecret, code) {
  axios
    .post("https://www.strava.com/oauth/token", {
      client_id: clientId,
      client_secret: clientSecret,
      code: code,
      grant_type: "authorization_code",
    })
    .then((response) => {
      const stravaTokens = response.data;
      // Save tokens to local storage or state
      localStorage.setItem("stravaTokens", JSON.stringify(stravaTokens));
    })
    .catch((error) => {
      console.error("Error generating token:", error);
    });
}
