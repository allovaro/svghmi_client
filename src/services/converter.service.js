import { postResource, postSimpleResource } from './handleFetch.service';

export const optimize = async (clientId, config, user) => await postResource(`converter/optimize/${clientId}`, { ...config, user });

export const uploadFiles = async (id, files) => {
  const data = new FormData();
  files.forEach((file, i) => {
    data.append(`files-${i}`, file, file.name);
  });
  return await postSimpleResource(`converter/upload-files/${id}`, data);
};
