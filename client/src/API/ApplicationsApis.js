const myApplicationsPromise = async (email) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/applications?email=${email}`,
  );
  return await res.json();
};

export { myApplicationsPromise };
