'use strict'

const response = require('../response')

exports.users = (req, res) => {

    const users = [
        {
            "id": 1,
            "name": "Max"
        },
        {
            "id": 2,
            "name": "Ilya"
        }
    ]

    response.status(users, res)

}