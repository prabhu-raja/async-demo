console.log('Before');
getUser(11, usr => {
  console.log('Usr Detail', usr);
});
console.log('After');

function getUser(id, callback) {
  setTimeout(() => {
    console.log('Reading a user from DB...');
    callback({ id: id, gitHubUserName: 'PR'});
  }, 2000);  
}

