export interface User {
    id: number;
    name: string;
    location: string;
    role: string;
}

export const getUserAction = async( id: number) : Promise<User>  => {
    await new Promise(res => setTimeout(res, 2000));
    console.log('funsion ejecutada');
    
    return {
        id,
        name: 'Joel Flores',
        location: 'Zacatecas, México',
        role: 'admin'
    }
}