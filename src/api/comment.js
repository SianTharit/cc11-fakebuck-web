import axios from "../config/axios";

export const createComment = (title, postId) =>
    axios.post(`/post/${postId}/comment`, { title });
