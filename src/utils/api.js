import axios from 'axios';
const API_BASE_URL = 'http://13.125.92.33:5001/api/v1';
class ResponseError extends Error {
    constructor(status,message) {
        super(message);
        this.name = 'ResponseError';
        this.status = status;
    }
}

const createAxiosRequest = method => async (...params) => {
    try {
        const response = await axios[method](API_BASE_URL + params[0],params[1]);
        return response.data;
    } catch (error) {
        if (error.response)
            throw new ResponseError(error.response.status,error.response.data.message);
        throw new Error(error.message);
    }
};

const [ get, post, put, del ] = ['get','post','put','delete'].map(createAxiosRequest);

export const getPostList = async (page,sortBy)=> get(`/posts?page=${page}&sortBy=${sortBy}`);
export const getPost = async (id)=> get(`/posts/${id}`);
export const writePost = async (data)=> post('/posts',{contents:data});
export const editPost = async (id,data)=> put(`/posts/${id}`,data);
export const removePost = async (id)=> del(`/posts/${id}`);

export const writeComment = async (id,data)=> post(`/posts/${id}/comments`,{contents:data});
export const addLike = async (id)=> put(`/posts/${id}/like`);