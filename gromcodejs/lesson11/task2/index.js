/*
input: arr of obj, boolean;
output: sorted arr of obj;
algo:
1. return null if !arr;
2. sorted arr if true or not;
*/ 

const sortContacts = (contacts, isAsc = true) => {
    if (!Array.isArray(contacts)) {
        return null;
    }
    
    return contacts.sort((a,b) => isAsc  ?

         a.name.localeCompare(b.name) :

         b.name.localeCompare(a.name));
        
    
}



// let test = [{ name: 'Tom', phoneNumber: '777-77-77' },
// { name: 'jim', phoneNumber: '777-77-77' },
// { name: 'suzy', phoneNumber: '777-77-77' },
// { name: 'bob', phoneNumber: '777-77-77' },
// { name: 'ed', phoneNumber: '777-77-77' }];