import bcrypt from 'bcrypt';
export let  encryptPassword=async(password)=>
{
    let salt=10
    let hashedPassword= bcrypt.hash(password,salt)
    return hashedPassword
}