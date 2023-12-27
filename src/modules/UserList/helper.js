export default function modifyUsers(usersData, { searchStr, sortType }) {
  let users = usersData
    ?.map((user) => ({
      ...user,
      role: user.id < 3 ? 'ADMIN' : 'USER',
      subscription: 'Free',
      tokens: `${user.name
        .split('')
        .map((letter) => letter.charCodeAt())
        .reduce((num, acc) => acc + num, 0)} TKN`,
    }))
    .sort((user1, user2) => {
      const diff = parseInt(user1.tokens) - parseInt(user2.tokens);
      return sortType === 'desc' ? -diff : diff;
    });

  if (searchStr && users) {
    users = users.filter(({ name }) =>
      name.toLowerCase().includes(searchStr.toLowerCase()),
    );
  }

  return users;
}
