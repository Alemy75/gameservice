"use strict";

const bcrypt = require('bcryptjs')

const response = require("../response");
const db = require("./../settings/db");

exports.getAllUsers = (req, res) => {
    db.query(
        "SELECT `id`, `name`, `last_name` FROM `users`",
        (error, rows, fields) => {
            if (error) {
                response.status(400, error, res);
            } else {
                response.status(200, rows, res);
            }
        }
    );
};

exports.signup = (req, res) => {
    db.query(
        "SELECT `id`, `email`, `name` FROM `users` WHERE `email` = '" +
            req.body.email +
            "'",
        (error, rows, fields) => {
            if (error) {
                response.status(400, error, res);
            } else if (typeof rows !== "undefined" && rows.length > 0) {
                console.log(rows);
                const row = JSON.parse(JSON.stringify(rows));
                row.map((rw) => {
                    response.status(
                        302,
                        {
                            message: `User with the same email - ${rw.email} already exists`,
                        },
                        res
                    );
                    return true;
                });
            } else {
                const email = req.body.email;
                const name = req.body.name;
                const last_name =
                    req.body.last_name !== ""
                        ? req.body.last_name
                        : "Not filled";
                const salt = bcrypt.genSaltSync(15);
                const password = bcrypt.hashSync(req.body.password, salt);

                const sql = "INSERT INTO `users` (`name`, `last_name`, `email`, `password`) VALUES('" + name + "', '" + last_name + "', '" + email + "', '" + password + "')";
                db.query(sql, (error, results) => {
                    if (error) {
                        response.status(400, error, res);
                    } else {
                        response.status(200, {message: `Registered successfuly!`, results}, res);
                    }
                })
            }
        }
    );
};
