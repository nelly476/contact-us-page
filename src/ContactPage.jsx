import image from "./assets/bg-image.jpg";
import { useEffect, useState } from "react";

export default function Products() {
  const [formData, setFormData] = useState({
    fName: "",
    lName: "",
    email: "",
    number: "",
    isAccepted: false,
  });

  const [submitClicked, setSubmitClicked] = useState(false);

  function handleChange(e) {
    setFormData((prev) => {
      const { name, checked, type, value } = e.target;

      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(Object.values(formData));
    if (Object.values(formData).every((item) => item)) {
      console.log(formData);
    } else {
      setSubmitClicked(true);
    }
  }

  return (
    <div className="main-container">
      <span>
        <header>
          <h1>Contact Us</h1>
        </header>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fName">First name</label>
          <input
            type="text"
            name="fName"
            onChange={handleChange}
            value={formData.fName}
            className={submitClicked && !formData.fName ? "highlight" : ""}
          />

          <label htmlFor="lName">Last name</label>
          <input
            type="text"
            name="lName"
            onChange={handleChange}
            value={formData.lName}
            className={submitClicked && !formData.lName ? "highlight" : ""}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            className={submitClicked && !formData.email ? "highlight" : ""}
          />

          <label htmlFor="number">Phone number</label>
          <input
            type="number"
            name="number"
            onChange={handleChange}
            value={formData.number}
            className={submitClicked && !formData.number ? "highlight" : ""}
          />

          <div className="agreement--section">
            <label htmlFor="agreement">
              I agree to the terms and conditions
            </label>
            <input
              type="checkbox"
              name="isAccepted"
              className={
                submitClicked && !formData.isAccepted ? "highlight" : ""
              }
              onChange={handleChange}
              checked={formData.isAccepted}
            />
          </div>
          <div className="button--container">
            <button>Submit</button>
          </div>
        </form>
      </span>
      <img src={image} alt="" />
    </div>
  );
}
