const sortContacts = (contacts, isAsc = true) => {
    if (!Array.isArray(contacts)) {
        return null;
    }
    
    return contacts.sort((a,b) => { 
        if  (isAsc) {
            return a.name.localeCompare(b.name);
        } 
        else {
            return b.name.localeCompare(a.name);
        }
    });
}



let test = [{ name: 'Tom', phoneNumber: '777-77-77' },
{ name: 'jim', phoneNumber: '777-77-77' },
{ name: 'suzy', phoneNumber: '777-77-77' },
{ name: 'bob', phoneNumber: '777-77-77' },
{ name: 'ed', phoneNumber: '777-77-77' }];