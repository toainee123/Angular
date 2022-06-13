const apiURl = "http://localhost:3003/api"
export const environment = {
  production: false,
  product: `${apiURl}/products`,
  createProduct: `${apiURl}/products/:userId`,
  signIn: `${apiURl}/signin`,
  signUp: `${apiURl}/signup`,
  listUser: `${apiURl}/listUser`,
  deleteUser: `${apiURl}/removeUser/:id`
}