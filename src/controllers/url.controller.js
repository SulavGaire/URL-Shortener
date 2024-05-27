import { asyncHandler } from "../utils/asyncHandler.js";
import { Url } from "../models/url.model.js";

const short = asyncHandler(async (req, res) => {
  const record = await Url.create({
    full: req.body.full,
  });
  await record.save();
  console.log(req.body.full, record.short);

  res.status(200).json({
    message: "ShortUrl Called",
  });
});

export { short };
