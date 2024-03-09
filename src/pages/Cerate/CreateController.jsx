import { v4 } from "uuid";
import CreateView from "./CreateView";
import { useNavigate } from "react-router-dom";
import CreateModel from "./CreateModel";
const CreateController = () => {
  // model bir örnek oluşturduk
  const model = new CreateModel();

  // navigate kurlumu
  const navigate = useNavigate();

  // form gönderilince çalışıcak olan fonksiyon
  const handleSubmit = (e) => {
    e.preventDefault();

    //inputlardaki verileri alıp bir post nesnesi oluştur
    const form = new FormData(e.target);
    const newPost = Object.fromEntries(form.entries());

    //post nesnesine id degeri ekle
    newPost.id = v4();

    //api veriyi kaydet ve anasayfa yönlendir
    model.createPost(newPost).then(() => navigate("/"));
  };
  return <CreateView handleSubmit={handleSubmit} />;
};

export default CreateController;
