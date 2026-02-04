const myApplicationsPromise = (email) => {
  return fetch(
    `${import.meta.env.VITE_API_URL}/applications?email=${email}`,
  ).then((res) => res.json());
};

export { myApplicationsPromise };
