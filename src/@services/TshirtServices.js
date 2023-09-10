import Api from "./Api";

export default {
  getAllTshirts() {
    return Api().get("clothes/tshirts/all");
  },
};
