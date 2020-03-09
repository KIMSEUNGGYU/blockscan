dockerize -wait tcp://batch-db:3306 -timeout 120s

npm install
echo "Start batch market server"
npm run dev:batch