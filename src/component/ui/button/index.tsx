interface buttonProps {
  title?: string;
  className?: string;
}
export const Button: React.FC<buttonProps> = ({
  title,
  className,
}: buttonProps) => {
  return <button className={className}>{title}</button>;
};
