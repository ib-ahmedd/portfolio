import { LabeledInputProps } from "@types";

function LabeledInput({
  label,
  type,
  inputName,
  inputs,
  handleChange,
  formSubmitted,
  max,
}: LabeledInputProps) {
  return (
    <div className="flex flex-col w-full md:w-[48%] my-2 md:my-4">
      <label htmlFor={inputName}>
        {label}
        <span className="text-red-500"> *</span>
      </label>
      <input
        id={inputName}
        name={inputName}
        type={type}
        value={inputs && inputs[inputName]}
        onChange={handleChange}
        maxLength={max}
        className={`w-full bg-transparent border ${
          formSubmitted && (inputs && inputs[inputName]) === ""
            ? "border-red-500"
            : "border-navbar-light-b dark:border-border-grey"
        } rounded p-1 px-2 focus:outline-none focus:border-site-orange-hover`}
      />
    </div>
  );
}

export default LabeledInput;
