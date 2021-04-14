// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  const { name, age } = req.body;
  console.log(name);
  console.log(req);
  console.log(res);
  res.status(200).json({ message: `Hey ${name} looks like you are ${age}` });
};
