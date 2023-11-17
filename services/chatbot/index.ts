export const sendMessage = async (message) => {
  try {
    const res = await fetch(`/api/chatbot/send-message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("Error getting a response from the server =>", error);
  }
};
