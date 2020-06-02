//input: arr of obj, arr
//output: arr of obj
//1. setting property isAdmin for every user
//2. compare users id to adminids array elements
//2. if they coincide, add to user object property isAdmin:true
//3. if there are no coincides, thought isAdmin: false.
function markAdmins(users, adminIds) {
  return users.map(user => {
     let isAdmin = adminIds.includes(user.id);
     return { isAdmin, ...user }
   
  });
}
// function markAdmins1(users, adminIds) {
//   return users.map(user => ({...user, isAdmin: adminIds.includes(user.id)}));
// }

// const adminIds = ['1', '3'];
// const usersInf = [
//     { id: '1',  name: 'Bob' },
//     { id: '2', name: 'Tom' },
//     { id: '3', name: 'Sam' },
//     { id: '4', name: 'Tad' }
// ];
// const adminUsers = markAdmins1(usersInf, adminIds);
// console.log(adminUsers);
//  result
//  [
//     { id: '1', isAdmin: true, name: 'Bob' },
//     { id: '2', isAdmin: false, name: 'Tom' },
//     { id: '3', isAdmin: true, name: 'Sam' },
//     { id: '4', isAdmin: false, name: 'Tad' }
//  ];