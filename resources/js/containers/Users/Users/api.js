/**
 *
 * API for HackerNewsArticles
 *
 */

import request from "../../../utils/request";

export const getUsers = async () => {
    const getUsers = `/api/users`;
    return await request.get(getUsers);
};

export const saveUsers = async (payload) => {
    const saveUsers = `/api/users/store`;
    return await request.post(saveUsers, payload);
};

export const findOneUser = async (id) => {
    const findOneUser = `/api/users/show/${id}`;
    return await request.get(findOneUser);
};

export const updateUser = async (payload) => {
    const updateUser = `/api/users/update`;
    return await request.post(updateUser, payload);
};

export const deleteUsers = async (id) => {
    const deleteUsers = `/api/users/delete/${id}`;
    return await request.get(deleteUsers);
};


