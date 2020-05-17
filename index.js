console.log('Before');

getUser(11)
  .then(usr => getRepositories(usr.gitHubUserName))
  .then(repos => console.log(`Repos - ${repos}`))
  .catch(err => console.log('Error', err.message));

console.log('After');

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: id, gitHubUserName: 'PR'});
    }, 1000);
  });
}

function getRepositories(name) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Getting Repos for ${name}`);
      resolve(['repo1', 'repo2', 'repo3']);
    }, 1000);
  });
}