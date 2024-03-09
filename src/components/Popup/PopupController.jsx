import { useEffect, useState } from "react";
import PopupView from "./PopupView";
import PopupModel from "./PopupModel";

const PopupController = ({ user, close }) => {
  // gönderileri view a gönderebilmek için statede tuttuk
  const [userPosts, setUserPosts] = useState([]);

  // model den bir örnek olusturduk
  const model = new PopupModel();

  // pencere acıldıgında kullanıcının gönderilerini alır
  useEffect(() => {
    model.getUserPosts(user).then((data) => setUserPosts(data));
  }, []);

  return <PopupView userPosts={userPosts} user={user} close={close} />;
};

export default PopupController;
