import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'yoursecretkey'

export function signToken(payload: object) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' }) // หรือ '15m'
}

export function verifyToken(token: string) {
  return jwt.verify(token, JWT_SECRET)
}
