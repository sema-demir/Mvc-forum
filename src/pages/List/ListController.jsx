import { useEffect, useState } from "react";
import ListModel from "./ListModel";
import ListView from "./ListView";

const ListController = () => {
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // classtan örnek oluşturduk
  const model = new ListModel();

  //kullanıcı etkileşimini useEffect ile izlediğimiz için bu dosyada tanımladık
  useEffect(() => {
    model.getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <ListView
      selectedUser={selectedUser}
      setSelectedUser={setSelectedUser}
      posts={posts}
    />
  );
};

export default ListController;
