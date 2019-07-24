import axios from "axios";

export default class Advices {
  async getAdvices(subject) {
    const url = `http://hn.algolia.com/api/v1/search?query=${subject}`;
    const result = await axios(url);
    console.log("im in get Advices method", subject, result.data.hits);
    return result.data.hits;
  }

  async getReduxAdvices() {
    return this.getAdvices("redux");
  }

  async getReactAdvices() {
    return this.getAdvices("react");
  }

  async postAdvices(data) {
    const url = `http://hn.algolia.com/api/v1/search?query=${subject}`;
    const result = await axios.post(url, data, {
      headers: {
        'api-token': 'xyz',
      }
   });
    return result.data.hits;
  }
}
