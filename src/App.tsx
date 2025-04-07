import { PageWrapper } from "./components/PageWrapper";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { Shortlist } from "./components/Shortlist";
import { PuppiesList } from "./components/PuppiesList";
import { NewPuppyForm } from "./components/NewPuppyForm";

import { puppies as puppiesData } from "./data/puppies";
import { useEffect, useState } from "react";
import { Puppy } from "./types";
import { LoaderCircle } from "lucide-react";

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
      <ApiPuppies />
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

function ApiPuppies() {
  const [apiPuppies, setApiPuppies] = useState<[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    async function getPuppies() {
      setIsLoading(true);
      try {
        const response = await fetch("http://react-backend.test/api/puppies");
        if (!response.ok) {
          const errorData = await response.json();
          setError(`${errorData.message}: ${errorData.details}`);
          throw errorData;
        }
        const data = await response.json();
        setApiPuppies(data);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }

    getPuppies();
  }, []);
  return (
    <div className="mt-12 bg-white p-6 shadow ring ring-black/5">
      {isLoading && <LoaderCircle className="animate-spin stroke-slate-300" />}
      {apiPuppies.length > 0 && (
        <pre>{JSON.stringify(apiPuppies, null, 2)}</pre>
      )}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
