// const user = {
    name: 'Jobayer',
    address: {
        city: 'Rangpur',
        coordinates: {
            lat: 25.7480,
            lng: 89.2841
        }
    },
    hobbies: ['coding', 'reading', 'gaming']
};

// Shallow copy (changes to nested objects affect original)
const shallowCopy = {...user};
shallowCopy.address.city = 'Dhaka';
console.log('Shallow copy - Original city:', user.address.city); // Dhaka (changed!)

// Deep copy using JSON method
const deepCopy = JSON.parse(JSON.stringify(user));
deepCopy.address.city = 'Chittagong';
console.log('Deep copy - Original city:', user.address.city); // Dhaka (unchanged)

