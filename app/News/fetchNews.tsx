import axios from "axios";

export default async function fetchNews() {
  try {
    const response = await axios.get("api/news");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function postEvents() {
  try {
    const response = await axios.post("api/events/");
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(response.statusText);
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
}
