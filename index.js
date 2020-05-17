console.log('Before');

/*
  * Promise approach
getUser(11)
  .then(usr => getRepositories(usr.gitHubUserName))
  .then(repos => console.log(`Repos - ${repos}`))
  .catch(err => console.log('Error', err.message));
*/

// * Async & Await approach
async function displayRepos() {
  try {
    const usr = await getUser(11);
    const repos = await getRepositories(usr.gitHubUserName);
    console.log(`Repos - ${repos}`);
  } catch (error) {
    console.log('Error', error.message)
  }
}
displayRepos();


console.log('After');

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, gitHubUserName: 'PR'});
      reject(new Error('Some error in getUser 🧐'));
    }, 1000);
  });
}

function getRepositories(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Getting Repos for ${name}`);
      resolve(['repo1', 'repo2', 'repo3']);
      reject(new Error('Some error in getRepositories  🧐'));
    }, 1000);
  });
}
