import { cardProps } from "../../../interface";

export const Card: React.FC<cardProps> = ({
  title,
  image,
  author,
}: cardProps) => {
  return (
    <div className="rounded-sm bg-white">
      <figure className="maax-w-[123px] max-h-[170px] border-b-0">
        <img src={image} alt="" />
      </figure>
      <div className="flex justify-start gap-1">
        <h2>{title}</h2>
        <p>{}</p>
        <span>{author}</span>
      </div>
    </div>
  );
};
