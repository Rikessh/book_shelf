import { BookCategory } from "../../component/ui/bookCategory";
import { Quote } from "../../component/ui/quote";

export const Home = () => {
  return (
    <div>
      <div className="flex">
        <Quote className="" quote="There is hope" author="Rikesh" />
      </div>
      <BookCategory title="Recent Reading" length={4} />
      <BookCategory title="Academic Books" length={4} />
      <BookCategory title="Journals,Articles & Paper Publications" length={4} />
      <BookCategory title="News" length={4} />
    </div>
  );
};
