import axios from "../config/axios";

export const createLike = (postId) => axios.post(`/post/${postId}/like`);
export const deleteLike = (postId) => axios.delete(`/post/${postId}/like`);
