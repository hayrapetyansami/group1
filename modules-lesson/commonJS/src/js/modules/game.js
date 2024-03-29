const persons = [
	{ name: "Frodo", hasRing: false },
	{ name: "Bilbo", hasRing: false }
];

function setRing(persons, owner) {
	return persons.map(person => {
		if (person.name === owner) {
			person.hasRing = true;
		} else {
			person.hasRing = false;
		}
	});
}

module.exports = { persons, setRing };