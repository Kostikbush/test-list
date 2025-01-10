import Image from "next/image";
import { FC } from "react";

interface CardPropsType {
  flag_url: string;
  name_ru: string;
  id: string;
  deleteCountry: (id: string) => void;
}

export const Card: FC<CardPropsType> = ({
  flag_url,
  name_ru,
  id,
  deleteCountry,
}) => {
  return (
    <div className="flex justify-between items-center bg-slate-100 shadow-md">
      <article className="flex gap-4">
        <span>{name_ru}</span>
        {flag_url && (
          <Image
            width={22}
            height={22}
            alt={"страна"}
            src={`https:${flag_url}`}
          />
        )}
      </article>

      <button
        onClick={() => {
          console.log("WsdkCVLM");
          deleteCountry(id);
        }}
        className="bg-gray-600 text-white p-1 rounded-sm text-xs"
      >
        удалить
      </button>
    </div>
  );
};
