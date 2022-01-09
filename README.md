# MeroLedger
Steps to get the project up and running
In the project directory run:
npm i
Then in the terminal type:
cd client
Then run:
npm i
Then edit .env file of your project direction(not the .env file inside your client directory):
Replace <username> with your mongoDB access username, <password> with the password for your user and <dbname> with the name that you wish to give to your database.
Then in the terminal return back to the root directory using cd.. and run:
npm run dev
Additional Scripts:
npm run server
Runs only the backend server

npm run client
Runs only the frontend client
