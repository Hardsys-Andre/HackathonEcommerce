import { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductCarousel from "../../components/carrossel/index";
import * as actions from "../../store/modules/products/actions";
import { produtos } from "../../Data";

const Catalog = () => {
  const dispatch = useDispatch();

  const frutas = produtos.filter((p) => p.category === "Fruta");
  const verduras = produtos.filter((p) => p.category === "Verdura");
  const legumes = produtos.filter((p) => p.category === "Legume");

  useEffect(() => {
    dispatch(actions.getAllProductsRequest());
  }, [dispatch]);

  return (
    <div className="flex flex-col w-full md:w-full pb-11 items-center bg-whiteNormal">
      <div className="flex flex-col w-[90%] mt-6 md:mt-10 lg:mt-15">
        <ProductCarousel title="Frutas" produtos={frutas} />
        <ProductCarousel title="Verduras" produtos={verduras} />
        <ProductCarousel title="Legumes" produtos={legumes} />
      </div>
    </div>
  );
};

export default Catalog;
