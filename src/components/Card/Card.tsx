import Image from "next/image";
import * as motion from "motion/react-client";
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
  const deleteItem = () => deleteCountry(id);

  return (
    <motion.div
      layout
      layoutId={id}
      initial={{ transform: "translateX(0)" }}
      animate={{ transform: "translateX(0)" }}
      exit={{
        opacity: 0,
        transform: "translateX(330px)",
      }}
      className="flex justify-between items-center bg-slate-100 shadow-md h-8"
      key="box"
    >
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
        onClick={deleteItem}
        className="bg-gray-600 text-white p-1 rounded-sm text-xs"
      >
        удалить
      </button>
    </motion.div>
  );
};
