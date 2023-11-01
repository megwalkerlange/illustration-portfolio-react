import "../../../App";
import { useState } from "react";

const PUBLIC_KEY = "aMGndRTFUYhoYfcbl";
const TEMPLATE_ID = "";

function contact() {
  const [formData, setformData] = useState({
    email: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { email, message, value } = event.taget;

    setformData({
      ...formData,
      [email]: value,
      [message]: value,
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();

    alert("Thank you for your message. I will reply as soon as possible.");

    setformData({
      email: "",
      message: "",
    });
  };

  return (
    <>
      <section>
        <p>
          If you would like to work togehter on a project or just want to get in
          touch to say hi then please fill out the contact form below.
        </p>
      </section>
      <form>
        <div className="form-group">
          <label
            htmlFor="exampleInputEmail1"
            value={formData.name}
            onChange={handleInputChange}
          >
            Name
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter name"
          ></input>
          <label
            htmlFor="exampleInputEmail1"
            value={formData.email}
            onChange={handleInputChange}
          >
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          ></input>
        </div>
        <div className="form-group">
          <label
            htmlFor="exampleFormControlTextarea1"
            value={formData.message}
            onChange={handleInputChange}
          >
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleFormSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
}
export default contact;
