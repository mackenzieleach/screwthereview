/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';

export default function Form() {
  return (
    <form name="contact" method="post">
      <input type="hidden" name="form-name" value="contact" />
      <p>
        <label htmlFor="form-text" id="form-text">Name:</label>
        {' '}
        <br />
        <input id="name" type="text" name="name" required />
      </p>
      <p>
        <label htmlFor="form-text" id="form-text">Email:</label>
        {' '}
        <br />
        <input id="name" type="email" name="email" required />
      </p>
      <p>
        <label htmlFor="form-text" id="form-text">Message:</label>
        {' '}
        <br />
        <textarea id="name" name="message" required />
      </p>
      <p>
        <button id="submit-contact" type="submit">Send</button>
      </p>
    </form>
  );
}