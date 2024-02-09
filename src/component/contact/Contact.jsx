import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <div className="textContainer">
        <h1>Let's work together</h1>
        <div className="item">
          <h2>Mail</h2>
          <span>hello@gmail.com</span>
        </div>
        <div className="item">
          <h2>Address</h2>
          <span>Hello UK</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+1 655 4424</span>
        </div>
      </div>
      <div className="formContainer">
        <form>
          <input type="text" required placeholder="Name" />
          <input type="email" required placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
