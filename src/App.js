import "./styles.css";
import { useState } from "react";

export default function App() {
  const [inputs, setinputs] = useState({
    phone: "",
    email: "",
    username: "",
    password: "",
    PrimaryAddress: {
      permaddress: "",
      tempaddress: "",
      address: ""
    },
    SecoundaryAddress: {
      firstLine: "",
      secoundLine: "",
      thirdLine: ""
    }
  });
  function handelChanges(e) {
    console.log(e.target.name);
    setinputs((prev) => {
      return { ...prev, [e.target.phone]: e.target.value };
    });
  }
  console.log(inputs);
  return (
    <div className="App">
      <from methord={"post"}>
        <input
          name={"email"}
          type={"text"}
          placeholder={"email"}
          onChange={handelChanges}
        />
        <input
          name={"username"}
          type={"text"}
          placeholder={"username"}
          onChange={handelChanges}
        />
        <input
          name={"password"}
          type={"text"}
          placeholder={"password"}
          onChange={handelChanges}
        />
        <input
          name={"phone"}
          type={"text"}
          placeholder={"phone"}
          onChange={handelChanges}
        />
        <input
          name={"PrimaryAddress"}
          type={"text"}
          placeholder={"address"}
          onChange={handelChanges}
        />
        <input
          name={"tempaddress"}
          type={"text"}
          placeholder={"tempaddress"}
          onChange={handelChanges}
        />
        <input
          name={"PrimaryAddress"}
          type={"text"}
          placeholder={"permaddress"}
          onChange={handelChanges}
        />
        <input
          name={"firstLine"}
          type={"text"}
          placeholder={"firstLine"}
          onChange={handelChanges}
        />
        <input
          name={"secoundLine"}
          type={"text"}
          placeholder={"secoundLine"}
          onChange={handelChanges}
        />
        <input
          name={"thirdLine"}
          type={"text"}
          placeholder={"thirdLine"}
          onChange={handelChanges}
        />
        <button>Submmit</button>
      </from>
    </div>
  );
}
