type User = {
  id: number;
};

export type Puppy = {
  id: number;
  name: string;
  trait: string;
  imageUrl: string;
  likedBy: User["id"][];
};
