import React from "react";

export async function getStaticPaths() {
  const resp = await fetch("http://localhost:3000/api/users");
  const data = await resp.json();
  const users = data.users.map((user) => ({ params: { id: user.id } }));

  return { paths: users, fallback: false };
}
export const getStaticProps = async (context) => {
  const resp = await fetch(
    `http://localhost:3000/api/users/${context.params.id}`
  );
  const data = await resp.json();
  console.log(data);
  return {
    props: { data },
  };
};
function User(props) {
  const { name, lastName, age, id } = props.data[0];
  return (
    <div>
      <h1>User Info</h1>
      <h2>
        {name} {lastName} {age} years old.
      </h2>
    </div>
  );
}

export default User;
