import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to send as the POST request body
    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        window.location.href = "/thankyou"; // Redirect on successful submission
      } else {
        console.error("Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="form-container">
      <div className="divider bg-gray-200 h-0.5 w-20 mx-auto"></div>
      <h2 className="text-center text-inherit">Contact Me</h2>
      <form className="bg-white text-black" onSubmit={handleSubmit}>
        <div className="mb-3 form-row">
          <div className="mr-3 mb-3 form-col">
            <label htmlFor="name">Your Name:</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-col">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="name@website.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="6"
            className="w-full border border-gray"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-10">
          <button
            className="btnx border-black border p-2 hover:bg-gray-300 dark:border-white"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
