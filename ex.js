const user = {
    name:'Jobayer',
    address : {
        city:'Rangpur'
    }

}

const newUser = {...user} // shallow copy


newUser.address.city = 'mahmud'

console.log(user.address.city)