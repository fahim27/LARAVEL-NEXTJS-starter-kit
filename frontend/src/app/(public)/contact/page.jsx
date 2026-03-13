import React from "react";

export default function Contact() {
  return (
    <div className="container py-5">
      <div className="row g-5">
        {/* Left Side — Contact Info */}
        <div className="col-md-5">
          <h2 className="mb-4">Get in Touch</h2>

          <p>
            Have questions about this starter kit, need support, or want to
            collaborate? Feel free to reach out using the contact form or the
            information below.
          </p>

          <div className="mt-4">
            <p className="mb-2">
              <strong>Email:</strong>
            </p>
            <a href="mailto:your@email.com" className="d-block mb-3">
              your@email.com
            </a>

            <p className="mb-2">
              <strong>LinkedIn:</strong>
            </p>
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/yourprofile
            </a>
          </div>

          <div className="mt-4 text-muted">
            <small>We usually respond within 24 hours.</small>
          </div>
        </div>

        {/* Right Side — Form */}
        <div className="col-md-7">
          <h2 className="mb-4">Send a Message</h2>

          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                rows="5"
                className="form-control"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
