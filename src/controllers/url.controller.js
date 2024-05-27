import { asyncHandler } from "../utils/asyncHandler.js";
import { Url } from "../models/url.model.js";

const allUrls = asyncHandler(async (req, res) => {
  const urls = await Url.find();
  res.status(200).json({
    urls,
  });
  console.log(urls);
});

const shortID = asyncHandler(async (req, res) => {
  const shortID = req.params.shortId;
  // console.log(shortID);
  const record = await Url.findOne({ short: shortID });
  if (record) {
    record.clicks++;
    await record.save();
    res.redirect(record.full);
  } else {
    res.status(404).json({
      message: "Url not found",
    });
  }
});

const short = asyncHandler(async (req, res) => {
  const record = await Url.create({
    full: req.body.full,
  });
  await record.save();
  console.log(req.body.full, record.short);

  res.status(200).json({
    message: "ShortUrl Called",
    FullUrl: record.full,
    ShortUrl: record.short,
  });
});

export { allUrls, shortID, short };
