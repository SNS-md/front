import axios from 'axios';

class ResponseError extends Error {
    constructor(status,message) {
        super(message);
        this.name = 'ResponseError';
        this.status = status;
    }
}

const createAxiosRequest = method => async (...params) => {
    try {
        const response = await axios[method](...params);
        return response.data;
    } catch (error) {
        if (error.response)
            throw new ResponseError(error.response.status,error.response.data.message);
        throw new Error(error.message);
    }
};

const [ get, post, put, del ] = ['get','post','put','delete'].map(createAxiosRequest);

export const getPostList = async (page,sortBy)=> get(`/api/v1/posts?page=${page}&sortBy=${sortBy}`);
export const getPost = async (id)=> get(`/api/v1/posts/${id}`);
export const writePost = async (data)=> post('/api/v1/posts',{contents:data});
export const editPost = async (id,data)=> put(`/api/v1/posts/${id}`,data);
export const removePost = async (id)=> del(`/api/v1/posts/${id}`);

export const writeComment = async (id,data)=> post(`/api/v1/posts/${id}/comments`,{contents:data});
export const addLike = async (id)=> put(`/api/v1/posts/${id}/like`);