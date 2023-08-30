import "./Button.styles.scss";

interface IButtonProps {
  children: React.ReactNode | string;
  isLoading?: boolean;
}

export function Button({ children, isLoading = false }: IButtonProps) {
  return (
    <button className="button" type="submit" disabled={isLoading}>
      {children}
    </button>
  );
}
