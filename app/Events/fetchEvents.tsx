

export default async function fetchEvents() {
  try {
    const response = await fetch("api/events", { next: { revalidate: 10}});
    if (response.status === 200) {
      const data = await response.json(); // Extract and parse JSON data
      return data; // Return the parsed data, not the response object
    } else {
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }

}