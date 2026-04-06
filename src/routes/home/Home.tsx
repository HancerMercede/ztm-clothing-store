import { CategoriesList } from "../../components/categories/CategoriesList";
import categories from "../../utils/Categories.json";

const Home = () => {
  return (
    <>
      <CategoriesList categories={categories} />
    </>
  );
};

export default Home;
