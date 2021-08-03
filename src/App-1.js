import React from "react";
import CustomHooksUsingArrayFormat from "./hooks/inputHooks";
import "./App.css";

function App() {
  const [
    firstName,
    firstNameOnChange,
    clearFirstNameInput,
    greetUserUsingFirstName,
  ] = CustomHooksUsingArrayFormat("");

  const [lastName, lastNameOnChange, clearLastNameInput] =
    CustomHooksUsingArrayFormat("");

  const [email, emailOnChange, clearEmailInput, , showEmailValue] =
    CustomHooksUsingArrayFormat("");

  const [telephone, telephoneOnChange, clearTelephoneInput] =
    CustomHooksUsingArrayFormat("");

  function handleOnSubmit(e) {
    e.preventDefault();

    //greetUserUsingFirstName();
    showEmailValue();
    clearEmailInput();
    clearFirstNameInput();
    clearLastNameInput();
    clearTelephoneInput();
  }

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="first name"
          value={firstName}
          onChange={(e) => firstNameOnChange(e)}
          //onChange={firstNameOnChange}
        />
        <br />
        <input
          type="text"
          placeholder="last name"
          value={lastName}
          onChange={(e) => lastNameOnChange(e)}
        />
        <br />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => emailOnChange(e)}
        />
        <br />
        <input
          type="tel"
          placeholder="enter contact number"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          value={telephone}
          onChange={(e) => telephoneOnChange(e)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// function App() {
//   const [firstName, setFirstName] = useState();
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//   function handleOnSubmit(e) {
//     e.preventDefault();

//     console.log(firstName);
//     console.log(lastName);
//     console.log(email);
//     console.log(phone);
//     setPhone("");
//   }

//   return (
//     <div className="App">
//       <form onSubmit={handleOnSubmit}>
//         <input
//           type="text"
//           placeholder="first name"
//           value={firstName}
//           onChange={(e) => setFirstName(e.target.value)}
//         />
//         <br />
//         <input
//           type="text"
//           placeholder="last name"
//           value={lastName}
//           onChange={(e) => setLastName(e.target.value)}
//         />
//         <br />
//         <input
//           type="email"
//           placeholder="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br />
//         <input
//           type="tel"
//           placeholder="enter contact number"
//           pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//           value={phone}
//           onChange={(e) => setPhone(e.target.value)}
//         />
//         <br />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

export default App;
