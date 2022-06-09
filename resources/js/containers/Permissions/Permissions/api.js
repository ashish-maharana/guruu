/**
 *
 * API for HackerNewsArticles
 *
 */

 import request from "../../../utils/request";

export const getPermissions = async () => {
    const getPermissions = `/api/permissions`;
    return await request.get(getPermissions);
};

export const savePermissions = async (payload) => {
    const savePermissions = `/api/permissions/store`;
    return await request.post(savePermissions, payload);
};

export const findOnePermission = async (id) => {
    const findOnePermission = `/api/permissions/show/${id}`;
    return await request.get(findOnePermission);
};

export const updatePermission = async (payload) => {
    const updatePermission = `/api/permissions/update`;
    return await request.post(updatePermission, payload);
};



export const deletePermissions = async (id) => {
    const deletePermissions = `/api/permissions/delete/${id}`;
    return await request.get(deletePermissions);
};
