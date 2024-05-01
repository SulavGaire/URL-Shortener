async function handelcreateShortUrl(req, res) {
  const url = req.body.url;
  const newUrl = await Url.create({ url });
  res.json(newUrl);
}