# Movies API
REST API created using NodeJS. It allows you to save your favourite movies. Auth system is handled by OAuth2. API requires being logged in before interacting. Available auth method is using Google Account.

## Technologies used
* NodeJS & Express
* PostgreSQL
* OAuth2

## Running on docker
```
git clone https://github.com/PiotrBlachnio/Movies-API.git
```

```
cd Movies-API/
```

```
docker-compose build
```

```
docker-compose up
```
## Running on localhost
****
**_Make sure you createad .env file with corresponding variables_**

****

```
git clone https://github.com/PiotrBlachnio/Movies-API.git
```

```
cd Movies-API/
```

```
npm install
```

```
npm run dev
```

## Contributing
1. Fork it (https://github.com/PiotrBlachnio/Movies-API/fork)
1. Create your feature branch (git checkout -b feature/fooBar)
1. Commit your changes (git commit -am 'Add some fooBar')
1. Push to the branch (git push origin feature/fooBar)
1. Create a new Pull Request
