export default async function handler(req, res) {
  console.log(req.query.id);
  const resp = await fetch(`http://localhost:3001/users`);
  const data = await resp.json();
  const data_send = data.users.filter((user) => {
    return user.id === req.query.id;
  });
  res.status(200).json(data_send);
}
