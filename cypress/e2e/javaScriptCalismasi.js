const names = [ "mustafa", "nuray", "R.Nur", "omer" ]


// property             0         1
// property`s value  mustafa   nuray

// in                names[property]
// of                
const userInfo = {

    name: 'omer',
    lastName: 'ali',
    gender: 'male'
}


// for (let i = 0; i < names.length; i++) {
//     console.log(i);
//     console.log(names[ i ]);
// }





for (const key in names) {
    console.log(names[key]);
}


for (const iterator of names) {
    console.log(iterator);
}




/**
 * java da kullanimi
 * javadaki forEach javascript de for of a denk geliyor
 * 
 * String[] names = [ "mustafa", "nuray", "R.Nur", "omer" ]
 * 
 * 
 * for( String value : names ){
 * 
 * System.ou.println(value)
 * 
 * }
 * 
 * 
 * 
 */













for (const key in userInfo) {
   
    console.log(userInfo[ key ]);
}

// hatali kullanim cunku userinfo iterable degil
for (const key of userInfo) {

    console.log(userInfo[ key ]);
}