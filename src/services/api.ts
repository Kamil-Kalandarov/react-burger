/* export const checkResponse = <T>(response: Response): Promise<T> => {
  if (response.ok) {
    return response.json()
  } else {
    return response.json().then((err) => Promise.reject(err)) 
  };
}; */

export const checkResponse = (res: Response) => {
  return res.ok ? res.json() : res.json().then((err) => Promise.reject(err));
};