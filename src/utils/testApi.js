import { newName } from './name';

const mockPostList = [
    { id: 1, name: newName(), date: new Date().toISOString(), contents: 'test1', likes: 0, comments: [{name: newName(),date: new Date().toISOString(), contents:"comment1"}] },
    { id: 2, name: newName(), date: new Date().toISOString(), contents: 'test2', likes: 0, comments: [] },
];

const delayResponse = (response) => new Promise(resolve => setTimeout(() => resolve(response), 1000));

export const getPostList = async (page, sortBy) => {
    console.log(page, sortBy);
    const response = mockPostList
        .slice((page - 1) * 10, page * 10)
        .map(e => ({ ...e, comment: e.comments[e.comments.length - 1] }))
        .map(({ comments, ...rest }) => ({ ...rest }));
    return delayResponse(response);
}

export const getPost = async (id) => {
    const response = mockPostList.find(post => post.id === id);
    return delayResponse(response);
}

export const writePost = async (data) => {
    const response = { id: mockPostList.length + 1, name: newName(), date: new Date().toISOString(), likes: 0, comments: [], ...data };
    mockPostList.push(response);
    return delayResponse(response);
}

export const editPost = async (id, data) => {
    const response = mockPostList.find(post => post.id === id);
    response.contents = data.contents;
    return delayResponse(response);
}

export const removePost = async (id) => {
    const response = mockPostList.find(post => post.id === id);
    mockPostList.splice(mockPostList.indexOf(response), 1);
    return delayResponse(response);
}

export const writeComment = async (id, contents) => {
    const comment = { name: newName(), date: new Date().toISOString(), contents};
    const post = mockPostList.find(post => post.id === id);
    post.comments.push(comment);
    return delayResponse({...post});
}

export const addLike = async (id) => {
    const response = mockPostList.find(post => post.id === id);
    response.likes++;
    return delayResponse(response);
}