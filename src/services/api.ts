export const checkResponse = <T>(response: Response): Promise<T> => {
  if (response.ok) {
    console.log(response);
    return response.json()
  } else {
    return response.json().then((err) => Promise.reject(err)) 
  };
};

