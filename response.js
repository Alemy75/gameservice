'use strict'

exports.status = (value, res) => {
    const data = {
        "status": 200,
        "values": value
    }
    res.json(data);
    res.end();
}