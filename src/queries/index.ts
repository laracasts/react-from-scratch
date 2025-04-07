export async function getPuppies() {
  try {
    const response = await fetch("http://react-backend.test/api/puppies", {
      headers: {
        accept: "application/json",
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw errorData;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
