
export const getUser = () => ({
        uid: 'ABC123',
        username: 'El_Papi1502'
});


const user = getUser();

const getUsuarioActivo = ( nombre ) =>({
    uid: 'ABC567',
    username: nombre
})

const usuarioActivo = getUsuarioActivo('Fernando');




