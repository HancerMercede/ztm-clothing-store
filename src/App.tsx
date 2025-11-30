import categories from "../src/utils/Categories.json";
import { CategoriesList } from "./components/categories/CategoriesList";

function App() {
  return (
    <>
      <CategoriesList categories={categories} />
    </>
  );
}

export default App;
