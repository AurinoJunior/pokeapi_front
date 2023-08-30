import "./Button.styles.scss";

interface IButtonProps {
  children: React.ReactNode | string;
}

export function Button({ children }: IButtonProps) {
  return (
    <button className="button" type="submit">
      {children}
    </button>
  );
}
