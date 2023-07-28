import axios from "axios";

export default async function fetchNews() {
  try {
    const response = await fetch("api/news");
    if (response.status === 200) {
      return response;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
