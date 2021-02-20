export default async function handler(req, res) {
  const resp = await fetch("http://localhost:3001/users");
  const data = await resp.json();
  res.status(200).json(data);
}
