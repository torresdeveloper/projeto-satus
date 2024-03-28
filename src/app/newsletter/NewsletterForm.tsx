"use client";
import "./NewsletterForm.css";

export const NewsletterForm = () => {
  return (
    <div className="NewsletterForm gh-portal-logged-out-form-container">
      <section className="gh-portal-input-section">
        <div className="gh-portal-input-labelcontainer">
          <label htmlFor="input-name" className="gh-portal-input-label">
            {" "}
            Name{" "}
          </label>
        </div>
        <input
          data-test-input="input-name"
          id="input-name"
          className="gh-portal-input"
          type="text"
          name="name"
          placeholder="Jamie Larson"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize=""
          aria-label="Name"
          value=""
        />
      </section>
      <section className="gh-portal-input-section">
        <div className="gh-portal-input-labelcontainer">
          <label htmlFor="input-email" className="gh-portal-input-label">
            {" "}
            Email{" "}
          </label>
        </div>
        <input
          data-test-input="input-email"
          id="input-email"
          className="gh-portal-input"
          type="email"
          name="email"
          placeholder="jamie@example.com"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          aria-label="Email"
          value=""
        />
      </section>

      <section className="gh-portal-button-section">
        <button
          type="button"
          onClick={() => {}}
          className="btn btn-orange total-members no-access"
        >
          Cadastre-se na Newsletter
        </button>
      </section>
    </div>
  );
};
