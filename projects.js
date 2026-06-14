# Copy this file to .env and fill in your own values. Never commit .env to git.

# MongoDB connection string (MongoDB Atlas or local MongoDB)
# Example Atlas URI: mongodb+srv://<user>:<password>@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
MONGO_URI=mongodb://localhost:27017/portfolio

# Port the API server listens on
PORT=5000

# Comma-separated list of allowed frontend origins (CORS)
# e.g. http://localhost:5500,https://your-portfolio.vercel.app
CLIENT_ORIGINS=http://localhost:5500,http://127.0.0.1:5500

# Simple shared secret used to protect write/delete routes and the
# "view contact messages" route. Send it as a header: x-admin-key
ADMIN_KEY=change-this-to-a-long-random-string
