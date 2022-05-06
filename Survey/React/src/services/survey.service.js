import axios from "axios";

const API_URL = "http://localhost:8080/api/survey/";

class SurveyService {
  vote(satisfaction, cafeteria, quality, food, retail) {
    return axios
      .post(API_URL, {
        satisfaction,
        cafeteria,
        quality,
        food,
        retail
      })
      .then(response => {
        return response.data;
      });
  }
}

export default new SurveyService();
