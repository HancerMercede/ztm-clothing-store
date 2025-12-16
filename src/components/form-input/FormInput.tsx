import type { FormInputProps } from "../../types";
import "./FormInput.styles.scss";

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
  const value = otherProps.value;

  const shouldShrink = value && typeof value === "string" && value.length > 0;

  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label className={`${shouldShrink ? "shrink" : ""} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
