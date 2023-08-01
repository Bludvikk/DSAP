import axios from "axios";

export default async function fetchNews() {
  try {
    const response = await fetch("api/news", { next: { revalidate: 10 } });
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function fetchUser(id: number) {
  try {
    const response = await fetch(`api/user?id=${id}`);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
}
