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

export const getPostList = async (page,sortBy)=> get(`/api/posts?page=${page}&sortby=${sortBy}`);
export const getPost = async (id)=> get(`/api/posts/${id}`);
export const writePost = async (data)=> post('/api/posts',data);
export const editPost = async (id,data)=> put(`/api/posts/${id}`,data);
export const removePost = async (id)=> del(`/api/posts/${id}`);

export const writeComment = async (id,data)=> post(`/api/posts/${id}/comments`,data);
export const addLike = async (id)=> post(`/api/posts/${id}/like`);