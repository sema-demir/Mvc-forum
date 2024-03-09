import axios from "axios";
import { toast } from "react-toastify";

export default class PopupModel {
  // parametre olarak aldıgı kullanıcının gönderilerini apidan alır
  async getUserPosts(username) {
    try {
      const res = await axios.get(
        `http://localhost:3000/posts?user=${username}`
      );

      return res.data;
    } catch (err) {
      toast.err("Gönderilere erişilemedi..");
      console.log(err);
    }
  }
}
