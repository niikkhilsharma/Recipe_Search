import React from "react";
import style from "./recipe.module.css";

export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className={style.recipe}>
      <h1 className="text-xl font-bold text-center p-1">{title}</h1>
      <p>{calories}</p>
      <img className={style.image} src={image} alt="" />
      <ol className="max-h-36 overflow-hidden w-full">
        {ingredients.map((ing, i) => (
          <li key={i}>{ing.text}</li>
        ))}
      </ol>
    </div>
  );
}
