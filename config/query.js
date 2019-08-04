import fetch from 'node-fetch';
import pool from './sqlPool';

async function add(sender, receiverId) {
  console.log('users', sender, 'Id', receiverId);
  await pool.execute('insert into friendRequest(senderId, receiverId, senderFirstName, senderSurname, receiverFirstName, receiverSurname, status, senderImage, receiverImage) values(?,?,?,?,?,?,?,?,?)', [sender.senderId, receiverId, sender.senderFirstName, sender.senderSurName, sender.receiverFirstName, sender.receiverSurName, sender.status,sender.senderImage, sender.receiverImage]);
  return { status: true, msg: 'friend successfully inserted' };
}

async function display(Id) {
  const friends = await pool.execute('select * from friendRequest where receiverId = ?', [Id]);
  return friends;
}

async function updateFriendRequest(senderId, receiver) {
  console.log('inside updateFriend', senderId, receiver);
  await pool.execute('delete from friendRequest where senderId = ? and receiverId = ?', [senderId, receiver.receiverId]);
  const loginRequest = `http://localhost:8001/friends/insert/${senderId}`;
  await fetch(loginRequest, {
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify(receiver),
  }).then(async (users) => {
    console.log('inside update wish', users);
  });
  const friends = await pool.execute('select * from friendRequest where receiverId = ?', [receiver.receiverId]);
  return friends;
}

async function deleteRequest(senderId, receiver) {
  // await pool.execute('delete from friendRequest where senderId = ? and receiverId = ?', [senderId, receiver.id]);
  const loginRequest = `http://localhost:8002/friends/add/${senderId}`;
  await fetch(loginRequest, {
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
    },
    method: 'post',
    body: JSON.stringify(receiver.user),
  }).then(async (users) => {
    console.log('inside update wish', users);
  });
  console.log('receiver Id', receiver.receiverId);
  const friends = await pool.execute('select * from friendRequest where receiverId = ?', [receiver.receiverId]);
  console.log('friends', friends);
  return (friends);
}


module.exports = {
  add,
  display,
  updateFriendRequest,
  deleteRequest,
};
