let entryCollection = [];

export const getEntry = () => {

    return fetch("http://localhost:8088/entry")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        entryCollection = parsedResponse
        return parsedResponse;
    })
}

const loggedInUser = {
	id: 1,
	name: "B.J. Golden",
	email: "b.j.golden@outlook.com"
}

export const getLoggedInUser = () => {
	return loggedInUser;
}



export const useEntryCollection = () => {
  //Best practice: we don't want to alter the original state, so
  //make a copy of it and then return it
  //The spread operator makes this quick work
  return [...entryCollection];
}
// export const getPosts = () => {
//   return fetch("http://localhost:8088/entry")
//     .then(response => response.json())
//     .then(parsedResponse => {
//       entryCollection = parsedResponse
//       return parsedResponse;
//     })
// }

export const createEntry = entryObj => {
    return fetch("http://localhost:8088/posts", {//fetch takes two arguments.
        method: "POST",//these are the details we want to return from the fetch. we are posting and not using the default of get.
        headers: {//this is of the type of json, so that when this call comes in from the database it konws what to do with it. 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)// is the object that we are sending to the database. 
                                      //adding "" marks around everything so it can be read by the database
    })
        .then(response => response.json())
  }