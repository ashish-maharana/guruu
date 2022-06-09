/**
 *
 * API for HackerNewsArticles
 *
 */

 import request from "../../../utils/request";

export const getRoles = async () => {
    const getRoles = `/api/roles`;
    return await request.get(getRoles);
};

export const saveRoles = async (payload) => {
    const saveRoles = `/api/roles/store`;
    return await request.post(saveRoles, payload);
};

export const findOneRole = async (id) => {
    const findOneRole = `/api/roles/show/${id}`;
    return await request.get(findOneRole);
};

export const updateRole = async (payload) => {
    const updateRole = `/api/roles/update`;
    return await request.post(updateRole, payload);
};



export const deleteRoles = async (id) => {
    const deleteRoles = `/api/roles/delete/${id}`;
    return await request.get(deleteRoles);
};
