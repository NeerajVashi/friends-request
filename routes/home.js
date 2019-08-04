import express from 'express';

const router = express.Router();
router.get('/', async (req, res) => {
  res.status(200).send('you are in home');
  // res.send('you are in Home page', req.header);
  // const id = 1;
  // const loginRequest = `http://localhost:8000/user/${id}`;
  // await fetch(loginRequest).then(response => response.json())
  //   .then((user) => {
  //     res.status(200).json(user);
  //   });
  // fetch(loginRequest, {
  //   headers: {
  //     Accept: 'application/json',
  //     'Content-type': 'application/json',
  //   },
  //   method: 'post',
  //   body: JSON.stringify(user),
  // })
  //   .then(response => response.json())
  //   .then((user) => {
  //     dispatch({ type: 'isLogin', payload: user });
  //   });
});

router.get('/form', (req, res) => {
  res.render('form');
});
router.post('/', (req, res) => {
  console.log('body:', req.body);
  res.status(200).send('yess');
});
module.exports = router;
