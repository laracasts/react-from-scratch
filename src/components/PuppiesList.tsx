import { Dispatch, SetStateAction } from "react";
import { type Puppy } from "../types";
import { LikeToggle } from "./LikeToggle";

export function PuppiesList({
  searchQuery,
  puppies,
  setPuppies,
}: {
  searchQuery: string;
  puppies: Puppy[];
  setPuppies: Dispatch<SetStateAction<Puppy[]>>;
}) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {puppies
        .filter((pup) =>
          pup.trait.toLowerCase().includes(searchQuery.toLowerCase()),
        )
        .map((puppy) => (
          <PuppyCard key={puppy.id} puppy={puppy} setPuppies={setPuppies} />
        ))}
    </ul>
  );
}

type PuppyCardProps = {
  puppy: Puppy;
  setPuppies: Dispatch<SetStateAction<Puppy[]>>;
};

function PuppyCard({ puppy, setPuppies }: PuppyCardProps) {
  return (
    <li
      key={puppy.id}
      className="overflow-clip rounded-lg bg-white shadow-md ring ring-black/5 hover:-translate-y-0.5"
    >
      <img
        className="aspect-square object-cover"
        alt={puppy.name}
        src={puppy.imageUrl}
      />
      <div className="gap flex items-center justify-between p-4 text-sm">
        <div className="flex items-center gap-2">
          <p className="font-semibold">{puppy.name}</p>
          <span className="text-slate-300">·</span>
          <p className="text-slate-500">{puppy.trait}</p>
        </div>
        <LikeToggle puppy={puppy} setPuppies={setPuppies} />
      </div>
    </li>
  );
}
