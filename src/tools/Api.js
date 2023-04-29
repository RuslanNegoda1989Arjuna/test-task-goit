
import { axiosInstance } from "./axiosInstantce";

export const fetchAllUsers = async () => {
  try {
    const { data } = await axiosInstance.get();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const putIsFollow = async (id, isFollow, newFollowersCount) => {
  try {
    const { data } = await axiosInstance.put(`${id}`, { isFollow: isFollow, followers: newFollowersCount }); 
    return data;
  } catch (error) {
    throw new Error(error); 
  }
};