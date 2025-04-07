import { Dispatch, SetStateAction, useState } from "react";
import { Heart, LoaderCircle } from "lucide-react";
import { Puppy } from "../types";
import { toggleLikedStatus } from "../queries";

export function LikeToggle({
  puppy,
  setPuppies,
}: {
  puppy: Puppy;
  setPuppies: Dispatch<SetStateAction<Puppy[]>>;
}) {
  const [pending, setPending] = useState(false);
  return (
    <button
      className="group"
      onClick={async () => {
        setPending(true);
        const updatedPuppy = await toggleLikedStatus(puppy.id);
        setPuppies((prevPups) => {
          return prevPups.map((puppy) =>
            puppy.id === updatedPuppy.id ? updatedPuppy : puppy,
          );
        });
        setPending(false);
      }}
    >
      {pending ? (
        <LoaderCircle className="animate-spin stroke-slate-300" />
      ) : (
        <Heart
          className={
            puppy.likedBy.includes(1)
              ? "fill-pink-500 stroke-none"
              : "stroke-slate-200 group-hover:stroke-slate-300"
          }
        />
      )}
    </button>
  );
}
