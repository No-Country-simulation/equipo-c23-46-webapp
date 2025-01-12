const POST = (data: unknown) => {
  if (typeof data !== 'object' || data === null) {
    throw new Error('Invalid userData: Expected an object')
  }
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
}

let BACKEND = import.meta.env.VITE_BACKEND

if (!BACKEND) {
  BACKEND = 'http://localhost:3000/api'
}

export { BACKEND, POST }
