export const getOptions = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
}

export const postOptions = (data:any) => {
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }
    return options;
}