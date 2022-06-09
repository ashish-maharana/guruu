/**
 *
 * API for HackerNewsArticles
 *
 */

import request from "../../../utils/request";


export const getTrackTypes = async () => {
    const getTrackTypes = `/api/tracktypes`;
    return await request.get(getTrackTypes);
};

export const saveTrackTypes = async (payload) => {
    const saveTrackTypes = `/api/tracktypes/store`;
    return await request.post(saveTrackTypes, payload);
};

export const findOneTrackType = async (id) => {
    const findOneTrackType = `/api/tracktypes/show/${id}`;
    return await request.get(findOneTrackType);
};

export const updateTrackType = async (payload) => {
    const updateTrackType = `/api/tracktypes/update`;
    return await request.post(updateTrackType, payload);
};

export const deleteTrackTypes = async (id) => {
    const deleteTrackTypes = `/api/tracktypes/delete/${id}`;
    return await request.get(deleteTrackTypes);
};
