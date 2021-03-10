export const getEntry = () => {

    return fetch("http://localhost:8088/entry")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
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