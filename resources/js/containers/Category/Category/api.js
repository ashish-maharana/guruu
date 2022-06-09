/**
 *
 * API for HackerNewsArticles
 *
 */

import request from "../../../utils/request";

export const getCategory = async () => {
    const getCategory = `/api/category`;
    return await request.get(getCategory);
};

export const saveCategory = async (payload) => {
    const saveCategory = `/api/category/store`;
    return await request.post(saveCategory, payload);
};

export const findOneCategory = async (id) => {
    const findOneCategory = `/api/category/show/${id}`;
    return await request.get(findOneCategory);
};

export const updateCategory = async (payload) => {
    const updateCategory = `/api/category/update`;
    return await request.post(updateCategory, payload);
};



export const deleteCategory = async (id) => {
    const deleteCategory = `/api/category/delete/${id}`;
    return await request.get(deleteCategory);
};
