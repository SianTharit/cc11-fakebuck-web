import axios from "../config/axios";

export const createComment = (title, postId) =>
    axios.post(`/post/${postId}/comment`, { title });

export const deleteComment = (postId, commentId) =>
    axios.delete(`/post/${postId}/comment/${commentId}`);
