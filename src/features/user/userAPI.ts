import client from "features/client";

export const loginUser = () => {
    client.get('/personalMainList')
};