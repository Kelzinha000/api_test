import  {criarUsuario} from "../Controllers/usuarioController.js"
import usuario from "../Models/usuarioModel.js"

 test("Verifica se função esta certa", async()=>{
 const newUser = await criarUsuario.findByEmail(email) 
 expect(usuario.email).toBe(email)
 })