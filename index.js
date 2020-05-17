console.log('Before');
getUser(11, usr => {
  console.log('Usr - ', usr);
  getRepositories(usr.gitHubUserName, repos => {
    console.log('Repos - ', repos);
  });
});
console.log('After');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from DB...');
    callback({ id: id, gitHubUserName: 'PR'});
  }, 1000);  
}

function getRepositories(name, callback) {
  setTimeout(() => {
    console.log(`Getting Reposttories for ${name}`);
    callback(['repo1', 'repo2', 'repo3'])
  }, 1000);
}

