// const jwt = require('jsonwebtoken');
// // import { Response, Request } from 'express';
// const authConfig = require('../config/auth');

// module.exports = (req, res, next) => {
//   // export const authMiddleware = (req, res, next) => {

//   const authHeader = req.headers.authorization;

//   if (!authHeader) {
//     return res.status(401).send({ error: 'No token provided' });
//   }

//   const parts = authHeader.split(' ');

//   if (!parts.length === 2) {
//     return res.status(401).send({ error: 'Token error' });
//   }
//   const [scheme, token] = parts;

//   if (!/^Bearer$^/i.test(scheme)) {
//     return res.status(401).send({ error: 'Not Bearer' });
//   }

//   jwt.verify(token, authConfig.secret, (err, decoded) => {
//     if (err) return res.status(401).send({ error: 'Token Invalido' });

//     req.userId = decoded.id;
//     return next();

//   });

// }
