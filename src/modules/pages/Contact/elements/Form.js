import React from 'react';

const Form = () => {
  return (
    <form action="#">
      <div className="section-contact__form-control">
        <label className="section-contact__form-item" htmlFor="#name">
          Your Name
        </label>
        <input
          className="section-contact__form-item section-contact__form-input"
          id="name"
          type="text"
        />
      </div>
      <div className="section-contact__form-control">
        <label className="section-contact__form-item" htmlFor="#email">
          Your Email
        </label>
        <input
          className="section-contact__form-item section-contact__form-input"
          id="email"
          type="text"
        />
      </div>
      <div className="section-contact__form-control">
        <label className="section-contact__form-item" htmlFor="#subject">
          Your Subject
        </label>
        <input
          className="section-contact__form-item section-contact__form-input"
          id="subject"
          type="text"
        />
      </div>
      <div className="section-contact__form-control">
        <label className="section-contact__form-item" htmlFor="#message">
          Message
        </label>
        <textarea
          className="section-contact__form-item section-contact__form-area"
          id="message"
          cols={30}
          rows={7}
          defaultValue={''}
        />
      </div>
      <div className="section-contact__form-control">
        <div className="section-contact__form-item" />
        <div className="section-contact__form-item">
          <button className="section-contact__form-btn">Gữi</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
