export const sendMessage = async ({ message, options }) => {
  try {
    const response = await fetch(`/api/messages`, {
      method: "post",
      headers: {
        authorization: options.authorization,
      },
      body: JSON.stringify(message),
    });
    console.debug({ message: await response.json() });
  } catch (err) {
    console.error(err);
  }
};
