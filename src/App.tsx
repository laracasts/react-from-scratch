import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shortlist";
import { PuppiesList } from "./components/PuppiesList";
import { NewPuppyForm } from "./components/NewPuppyForm";

import { puppies as puppiesData } from "./data/puppies";
import { useState } from "react";
import { Puppy } from "./types";

export function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <Main />
      </Container>
    </PageWrapper>
  );
}

function Main() {
  const [liked, setLiked] = useState<Puppy["id"][]>([1, 3]);
  const [searchQuery, setSearchQuery] = useState("");
  const [puppies, setPuppies] = useState<Puppy[]>(puppiesData);

  return (
    <main>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <Shortlist puppies={puppies} liked={liked} setLiked={setLiked} />
      </div>
      <PuppiesList
        puppies={puppies}
        liked={liked}
        setLiked={setLiked}
        searchQuery={searchQuery}
      />
      <NewPuppyForm puppies={puppies} setPuppies={setPuppies} />
    </main>
  );
}
