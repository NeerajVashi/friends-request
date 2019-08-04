import express from 'express';
// import fetch from 'node-fetch';
import sqlQuery from '../config/query';


const router = express.Router();


router.post('/add/:id', async (req, res) => {
  const receiverId = req.params.id;
  const sender = req.body;
  console.log('inside add', receiverId, sender);
  const newFriend = await sqlQuery.add(sender, receiverId);
  res.status(200).json(newFriend);
});

router.get('/display/:id', async (req, res) => {
  const receiverId = req.params.id;
  const [newFriend] = await sqlQuery.display(receiverId);
  res.status(200).json(newFriend);
});

router.put('/update/:id', async (req, res) => {
  const senderId = req.params.id;
  const receiver = req.body;
  console.log('inside update', senderId, ' receiver', receiver);
  const [newFriend] = await sqlQuery.updateFriendRequest(senderId, receiver);
  // console.log('done', newFriend);
  res.status(200).json(newFriend);
});

router.delete('/delete/:id', async (req, res) => {
  const userId = req.body.userId;
  const friendId = req.params.id;
  const deleteRequest = req.body;
  const request = {
    userId: deleteRequest.userId,
    friendId: req.params.id,
  };
  console.log(request);
  const deleteStatus = await sqlQuery.deleteFriend(friendId, userId);
  res.status(200).json(deleteStatus);
});

module.exports = router;
