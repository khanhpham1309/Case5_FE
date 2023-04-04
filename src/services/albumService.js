import customAxios from "./api";
//set cứng token, idUser trên Postman
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjIsInVzZXJuYW1lIjoibG9uZzEyMyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjgwNTcxNTc1LCJleHAiOjE2ODA5MzE1NzV9.YaEqnLWM9vNVE_VL2QIMUXeBQnw7c9MbaV_v5G6k9Jg";

customAxios.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getAll = async () => {
  const res = await customAxios.get("albums");
  return res.data;
};

export const createAlbum = async (data) => {
  const res = await customAxios.post("albums", { ...data, idUser: 2 });
  return res.data;
};

export const removeAlbum = async (id) => {
  const res = await customAxios.delete(`albums/${id}`);
  return res.data;
};

export const editAlbum = async (id, data) => {
  const res = await customAxios.put("albums/" + id, data);
  return res.data;
};

export const getOne = async (id) => {
  const res = await customAxios.get("albums/detail/" + id);
  return res.data;
};
