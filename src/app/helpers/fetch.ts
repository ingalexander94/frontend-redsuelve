import { environment } from 'src/environments/environment.prod';

export const sendRequest = async (
  endpoint: string,
  method: string = 'GET',
  payload?: any
): Promise<any> => {
  if (method === 'GET') {
    return await fetch(`${environment.urlBackend}/${endpoint}`);
  }
  return await fetch(`${environment.urlBackend}/${endpoint}`, {
    method,
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};
