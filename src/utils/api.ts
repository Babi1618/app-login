export const fetchData = async (url: string) => {
  const res = await fetch(`${url}`).then((res) => res.json());
  return res;
};
