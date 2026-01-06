import { CategoriesList } from "../../components/Categories/CategoriesList";
import categories from "../../utils/Categories.json";

const Home = () => {
  return (
    <>
      <CategoriesList categories={categories} />
    </>
  );
};

export default Home;
