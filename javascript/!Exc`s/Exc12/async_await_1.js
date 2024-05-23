const p = new Promise((resolve) => {
  setTimeout(() => {
    resolve("im promisse");
  }, 3000);
});
async function fetchData() {
  console.log(new Date());
  await p;
  console.log(new Date());
}
fetchData();
