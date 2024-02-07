import bcrypt from 'bcrypt';
export let  encryptPassword=async(password)=>
{
    let salt=10
    let hashedPassword= bcrypt.hash(password,salt)
    return hashedPassword
}
export let matchPassword=async(password,hashPassword)=>
{
    return bcrypt.compare(password,hashPassword)
}