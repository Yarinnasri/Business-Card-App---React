import axios from "axios";

const apiUrl =
  process.env.REACT_APP_API_URL ||
  "https://monkfish-app-z9uza.ondigitalocean.app/bcard2";
export const getCards = async () => {
  try {
    const response = await axios.get(`${apiUrl}/cards`);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getCard = async (id) => {
  try {
    const response = await axios.get(`${apiUrl}/cards/${id}`);
    return response.data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const getMyCards = async () => {
  try {
    const { data } = await axios.get(`${apiUrl}/cards/my-cards`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const deleteCard = async (id) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/cards/${id}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const createCard = async (card) => {
  try {
    const { data } = await axios.post(`${apiUrl}/cards`, card);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const updateCard = async (cardId, card) => {
  try {
    const { data } = await axios.put(`${apiUrl}/cards/${cardId}`, card);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};

export const changeLikeStatus = async (cardId) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/cards/${cardId}`);
    return data;
  } catch (error) {
    return Promise.reject(error.message);
  }
};
