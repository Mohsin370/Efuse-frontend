import { environment } from "../environments/environment";
import Axios from "axios";

export const PostStatus = (data) => {
  return Axios.post(`${environment.BaseURL}/api/posts`, { data });
};

export const GetPosts = (data) => {
  return Axios.get(`${environment.BaseURL}/api/post/${data.userId}`,
    { params: { token: data.token, uuid: data.uuid }, }
  );
};

export const UpdatePost = (data) => {
  return Axios.get(`${environment.BaseURL}/api/post/${data.postId}`,
    { params: { token: data.token, uuid: data.uuid }, }
  );
};
