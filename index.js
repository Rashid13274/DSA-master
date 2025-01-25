const RATE_LIMIT_WINDOW = 2 * 60 * 1000  // 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS =  5 // 100// Maximum number of requests per IP within the window

// // Custom rate limiting middleware
// const customRateLimiter = (req, res, next) => {
//   const ip = req.ip; // Get the IP address of the client
//   const currentTime = Date.now();
console.log(Date.now());