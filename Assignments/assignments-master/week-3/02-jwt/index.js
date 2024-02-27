const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";

/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */

const userSchema = zod.string().email();
const passSchema = zod.string().min(6);

function signJwt(username, password) {
  const userRes = userSchema.safeParse(username);
  const passRes = passSchema.safeParse(password);
  if (userRes.success && passRes.success) {
    var token = jwt.sign({ username }, jwtPassword);
    return token;
  } else {
    if (!userRes.success) {
      return null;
    }
    if (!passRes.success) {
      return null;
    }
  }
}

/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
  // Your code here
  let ans = true;
  try {
    jwt.verify(token, jwtPassword);
  } catch (error) {
    ans = false;
  }
  return ans;
}

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
  // Your code here
  if (!jwt.decode(token)) {
    return false;
  } else {
    return true;
  }
}

module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};

// jwt.verify("raj@gmail.com","12345678");
