import { Card } from "../card";
import { Button } from "../button";

export const CardOnShelf = () => {
  return (
    <div className="flex flex-wrap">
      <Card image="sdsf" title="rrrr" author="ssdsdas" />
      <>
        <div className="flex flex-col gap-2">
          <h4>Borrowed on </h4>
          <span>Date</span>
        </div>
        <div className="flex flex-col gap-2">
          <h4>Borrowed on </h4>
          <span>Date</span>
        </div>
        <Button title="Borrowed" className="" />
        <Button title="Return" className="" />
      </>
    </div>
  );
};
