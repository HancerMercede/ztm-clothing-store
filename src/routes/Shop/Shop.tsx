import shop_data from "../../Shop-data.json";
import "./Sho.styles.scss";
export const Shop = () => {
  return (
    <div className="shop-container">
      {shop_data.map((s) => (
        <div key={s.id}>
          <h1>{s.name}</h1>
          <img src={s.imageUrl} />

          <span>{s.price}</span>
        </div>
      ))}
    </div>
  );
};
