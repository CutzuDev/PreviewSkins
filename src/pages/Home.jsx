import { FreePacks as list } from "../components/Lists";
import ListBuilder from "../components/ListBuilder";

function Home() {
  return (
    <main className="flex w-full flex-1 p-8">
      <ListBuilder list={list}></ListBuilder>
    </main>
  );
}

export default Home;
