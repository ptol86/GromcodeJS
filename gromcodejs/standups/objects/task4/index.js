function markAdmins(users, adminIds) {
   return users.map(user => {
     const isAdmin = adminIds.includes(user.id);
 
     return { isAdmin, ...user }
   })
 }
 
 const adminIds = ['1', '3'];
 const usersInf = [
     { id: '1',  name: 'Bob' },
     { id: '2', name: 'Tom' },
     { id: '3', name: 'Sam' },
     { id: '4', name: 'Tad' }
 ];
 const adminUsers = markAdmins(usersInf, adminIds);
 console.log(adminUsers);
 // result
 // [
 //    { id: '1', isAdmin: true, name: 'Bob' },
 //    { id: '2', isAdmin: false, name: 'Tom' },
 //    { id: '3', isAdmin: true, name: 'Sam' },
 //    { id: '4', isAdmin: false, name: 'Tad' }
 // ];
 