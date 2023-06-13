export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    res
      .status(200)
      .json({ message: "received" });
    
  } else {
    // Handle any other HTTP method
    res.status(400).json({ message: "only post is supported" });
  }
}
