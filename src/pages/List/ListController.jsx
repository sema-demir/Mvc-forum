import { useEffect } from "react";
import ListModel from "./ListModel";
import ListView from "./ListView";

const ListController = () => {
  //kullanıcı etkileşimini useEffect ile izlediğimiz için bu dosyada tanımladık
  useEffect(() => {}, []);

  //kullanıcı etkileşimiyle tetiklenecek olan fonksiyon
  const handleClick = () => {
    alert("selam");
  };
  return <ListView handleClick={handleClick} />;
};

export default ListController;
