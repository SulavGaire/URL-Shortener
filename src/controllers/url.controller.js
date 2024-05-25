import { asyncHandler } from "../utils/asyncHandler.js";

const shortUrl = asyncHandler(async (req, res) => {
  res.status(500).json({
    message: "ShortUrl Called",
  });
  next();
});

export { shortUrl };
