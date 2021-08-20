let token = '3ca80831f886426fd970c1052990edd5ab7f11a669d94f57';
let base_url = 'https://marvel-homies.herokuapp.com/';

export const server_calls = {
    get: async () => {
        const response = await fetch(`${base_url}/api/heroes`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'access-token': `Bearer ${token}`
            }
        });

        if (!response.ok){
            throw new Error('Failed to fetch data from server')
        }

        return await response.json()
    },

    create: async(data: any = {}) => {
        const response = await fetch(`${base_url}/api/heroes`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });

        if(!response.ok){
            throw new Error('Failed to Create new data on server')
        }

        return await response.json()
    },
    update: async (id:string, data:any = {}) => {
        const response = await fetch(`${base_url}/api/heroes/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to edit data in the database!')
        }
    },
    delete: async(id:string) => {
        const response = await fetch(`${base_url}/api/heroes/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'access-token': `Bearer ${token}`
            },
        });
        if (!response.ok){
            throw new Error('Failed to delete data from the database!')
        }
    }
}