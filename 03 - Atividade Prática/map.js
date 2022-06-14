function getAdmins(map){
    let admins = []
    for([key, value] of map){
        value === 'User' ? admins.push(key) : "";
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Stephany','Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália','Admin');

console.log(getAdmins(usuarios));