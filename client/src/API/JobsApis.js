const jobsCreatedByPromise = async (email) => {
  const res = await fetch(
    `${import.meta.env.VITE_API_URL}/jobs?email=${email}`,
  );
  return await res.json();
};

export { jobsCreatedByPromise };
