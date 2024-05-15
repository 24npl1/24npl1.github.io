import axios from "axios";

function refreshToken(clientId, clientSecret, refreshToken) {
  axios
    .post("https://www.strava.com/api/v3/oauth/token", {
      client_id: clientId,
      client_secret: clientSecret,
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    })
    .then((response) => {
      const refreshedToken = response.data;
      // Save refreshed token to local storage or state
      localStorage.setItem("stravaTokens", JSON.stringify(refreshedToken));
    })
    .catch((error) => {
      console.error("Error refreshing token:", error);
    });
}
