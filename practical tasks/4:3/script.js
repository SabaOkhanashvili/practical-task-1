function sortUsersByAge(users) {
	users.sort(function(a, b) {
		return a.age - b.age;
	});
	return users;
}

const userList = document.getElementById("user-list");
const sortButton = document.getElementById("sort-btn");
const users = [{name: 'Lasha', age: 30}, {name: 'Saba', age: 20}];

sortButton.addEventListener("click", function() {
	const sortedUsers = sortUsersByAge(users);
	userList.innerHTML = "";
	for (let i = 0; i < sortedUsers.length; i++) {
		const user = sortedUsers[i];
		const listItem = document.createElement("li");
		listItem.innerText = user.name + " (" + user.age + ")";
		userList.appendChild(listItem);
	}
});
