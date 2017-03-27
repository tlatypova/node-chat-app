const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Tse1',
      room: 'Node Course'
    },
    {
      id: '2',
      name: 'Tse2',
      room: 'React Course'
    },
    {
      id: '3',
      name: 'Tse3',
      room: 'Node Course'
    }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Tse',
      room: 'A'
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);

  });


  it('should remove user', () => {
    var user1 = users.users[0];
    var user2 = users.users[1];
    var user3 = users.users[2];
    var user = users.removeUser(users.users[2].id);
    expect(user).toBe(user3);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var user1 = users.users[0];
    var user2 = users.users[1];
    var user3 = users.users[2];
    var user = users.removeUser('2345678');
    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var user3 = users.users[2];
    var user = users.getUser(users.users[2].id);
    expect(user).toBe(user3);
  });

  it('should not find user', () => {
    var user = users.getUser('2345678');
    expect(user).toEqual(null);
  });


  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Tse1', 'Tse3']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');
    expect(userList).toEqual(['Tse2']);
  });
});