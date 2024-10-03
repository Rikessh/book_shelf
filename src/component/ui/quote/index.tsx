export interface QuoteProps {
  className: string;
  quote: string;
  author: string;
}
export const Quote: React.FC<QuoteProps> = ({
  className,
  quote,
  author,
}: QuoteProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <h2>Today's Quote</h2>
      <p>{quote}</p>
      <p>{author}</p>
    </div>
  );
};
