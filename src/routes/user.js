

export const getUsers = pool => (request, response) => {

    pool.query('SELECT * FROM users;', (error, results) => {
        console.log({ results })
        if (error) {
            response.status(200).json(error);
            return

        }
        response.status(200).json(results.rows)
    })
}