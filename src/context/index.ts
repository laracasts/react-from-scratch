import { createContext, Dispatch, SetStateAction, use } from "react";
import { Puppy } from "../types";

export const LikedContext = createContext<{
  liked: Puppy["id"][];
  setLiked: Dispatch<SetStateAction<Puppy["id"][]>>;
} | null>(null);

export function useLiked() {
  const context = use(LikedContext);
  if (!context) {
    throw new Error(
      "The useLiked hook must be used within a LikedContext wrapper.",
    );
  }
  return context;
}
