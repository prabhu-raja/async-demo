console.log('Before');
const user = getUser(11);
console.log(user); //undefined
console.log('After');

function getUser(id) {
  setTimeout(() => {
    console.log('Reading a user from DB...');
    return { id: id, gitHubUserName: 'PR'};
  }, 2000);  
}

