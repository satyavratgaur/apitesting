export default (req, res) => {
  var scopes = 'user-read-private user-read-email';
  res.redirect(
    'https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' +
      my_client_id +
      (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
      '&redirect_uri=' +
      encodeURIComponent(redirect_uri)
  );
};

// export default (req, res) => {
//     const { name, age } = req.body;
//     console.log(name);
//     res.status(200).json({ message: `Hey ${name} looks like you are ${age}` });
// };
