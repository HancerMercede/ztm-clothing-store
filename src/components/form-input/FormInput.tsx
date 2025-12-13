import type { FormInputProps } from "../../types";
import "./FormInput.styles.scss";

const FormInput = ({ label, ...otherProps }: FormInputProps) => {
  const valueLength = otherProps.value;

  const shouldShrink =
    valueLength && typeof valueLength === "string" && valueLength.length > 0;

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
