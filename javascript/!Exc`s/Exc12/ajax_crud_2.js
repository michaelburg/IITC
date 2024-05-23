const url = "http://localhost:8001/users";

const generateRandomUser = async (id) => {
  try {
    const response = await axios.get("https://randomuser.me/api/");
    const user = response.data.results[0];
    return {
      id: id.toString(),
      firstName: user.name.first,
      lastName: user.name.last,
    };
  } catch (error) {
    console.error(`Error fetching user data for ID ${id}:`, error);
    return null;
  }
};

const generateUsers = async (count) => {
  const users = [];
  for (let i = 1; i <= count; i++) {
    console.log(`Generating user ${i}`);
    const user = await generateRandomUser(i);
    if (user) users.push(user);
  }
  return { users };
};

const postJSONData = async (data, url) => {
  try {
    const response = await axios.post(url, data);
    console.log(`Data posted to ${url}:`, response.data);
  } catch (error) {
    console.error(`Error posting data to ${url}:`, error);
  }
};

const main = async () => {
  const userData = await generateUsers(500);
  await postJSONData(userData, url);
};

main();
