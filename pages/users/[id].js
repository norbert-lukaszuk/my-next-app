import React from "react";

export async function getStaticPaths() {
  const resp = await fetch("http://localhost:3001/users");
  const data = await resp.json();
  const users = data.users.map((user) => ({ params: { id: user.id } }));

  return { paths: users, fallback: false };
}
export const getStaticProps = async () => {
  const resp = await fetch("http://localhost:3001/users");
  const data = await resp.json();
  console.log(data);
  return {
    props: { data },
  };
};
function User() {
  return (
    <div>
      <h1>User Info</h1>
    </div>
  );
}

export default User;
