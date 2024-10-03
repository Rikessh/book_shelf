import { Card } from "../card";
export interface BookCategoryProps {
  title: string;
  length: number;
}
export const BookCategory: React.FC<BookCategoryProps> = ({
  title,
  length,
}: BookCategoryProps) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-lg font-bold">{title}</h2>
      {Array.from({ length: length }).map((_, index) => (
        <div key={index} className="flex">
          <Card image="sdsf" title="rrrr" author="ssdsdas" />
        </div>
      ))}
    </div>
  );
};
