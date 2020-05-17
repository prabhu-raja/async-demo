console.log('Before');
getUser(11, getReps);
console.log('After');

function getReps(usr) {
  getRepositories(usr.gitHubUserName, getCommits);
}

function getCommits(repos) {
  console.log('Final Repo', repos);
}

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

