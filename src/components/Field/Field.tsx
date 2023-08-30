import React from "react";
import "./Field.styles.scss";

interface IFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}

export function Field({
  label,
  name,
  placeholder,
  value,
  onChange,
}: IFieldProps) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input
        value={value}
        onChange={(evt) => onChange(evt.target.value)}
        id={name}
        name={name}
        placeholder={placeholder}
        required
      />
    </div>
  );
}
