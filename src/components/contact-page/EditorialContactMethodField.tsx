type Method = "email" | "phone";

export function EditorialContactMethodField({
  idPrefix,
  method,
  onMethodChange,
  value,
  onValueChange,
}: {
  idPrefix: string;
  method: Method;
  onMethodChange: (method: Method) => void;
  value: string;
  onValueChange: (value: string) => void;
}) {
  return (
    <fieldset className="method field wide">
      <legend>How Should We Contact You?</legend>
      <div className="contact-method">
        <label className="method-option">
          <input
            type="radio"
            name={`${idPrefix}-contactMethod`}
            value="email"
            checked={method === "email"}
            onChange={() => onMethodChange("email")}
          />
          <span>Email</span>
        </label>
        <label className="method-option">
          <input
            type="radio"
            name={`${idPrefix}-contactMethod`}
            value="phone"
            checked={method === "phone"}
            onChange={() => onMethodChange("phone")}
          />
          <span>Phone</span>
        </label>
      </div>
      <label htmlFor={`${idPrefix}-contact-value`} className="method-caption">
        {method === "email" ? "Email address *" : "Phone number *"}
      </label>
      <input
        id={`${idPrefix}-contact-value`}
        name="contactValue"
        type={method === "email" ? "email" : "tel"}
        required
        autoComplete={method === "email" ? "email" : "tel"}
        placeholder={method === "email" ? "you@example.com" : "(555) 123-4567"}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </fieldset>
  );
}
