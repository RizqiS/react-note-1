import { PropsButton } from "../model/data-button";

export default function Button(props: PropsButton) {
  return (
    <button
      {...props}
      className={`px-4 py-2 text-xs md:text-sm rounded-md bg-stone-700 hover:bg-stone-600 hover:text-stone-100`}>
      {props.children}
    </button>
  );
}
