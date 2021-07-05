import React, { useState } from "react";

function AppChild() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  return (
    <>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <br />
      <br />
      <br />
      <label>Your first name is: {name.firstName}</label>
      <br />
      <label>Your last name is: {name.lastName}</label>
      <p>{JSON.stringify(name)}</p>
    </>
  );
}

export default AppChild;
