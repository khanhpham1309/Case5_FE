// import customAxios from "./api";

// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOjIsInVzZXJuYW1lIjoibG9uZzEyMyIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjgwNTQ2ODIxLCJleHAiOjE2ODA5MDY4MjF9.QR3uaxv9LWNg3NdefKgTdXk0mS4LDpl01ZHpSwhE4nk";

// customAxios.interceptors.request.use(
//   (config) => {
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export const getAll = async () => {
//   const res = await customAxios.get("albums");
//   return res.data;
// };

// export const createAlbum = async (data) => {
//   const res = await customAxios.post("albums", { ...data, idUser: 2 });
//   return res.data;
// };

// export const removeAlbum = async (id) => {
//   const res = await customAxios.delete(`albums/${id}`);
//   return res.data;
// };

// export const editAlbum = async (id, data) => {
//   const res = await customAxios.put("albums/" + id, data);
//   return res.data;
// };

// export const getOne = async (id) => {
//   const res = await customAxios.get("albums/detail/" + id);
//   return res.data;
// };

import customAxios from "./api";

const getToken = () => {
  return localStorage.getItem("token");
};

const getIdUser = () => {
  return localStorage.getItem("idUser");
};

customAxios.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      const idUser = getIdUser();
      if (idUser) {
        config.headers.idUser = idUser;
      }
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
  const res = await customAxios.post("albums", {
    ...data,
    idUser: getIdUser(),
  });
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
