export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const body = req.body;
    console.log({body})
    res.status(200).json({ body });
  } else {
    // Handle any other HTTP method
    res.status(400).json({ message: "only post is supported" });
  }
}
