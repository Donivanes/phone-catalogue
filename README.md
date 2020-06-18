# phone-catalog-app

## To run the application

Clone the application:

```
git clone https://github.com/Donivanes/phone-catalogue.git
```

Create .env in Server folder and in Client folder

| Server       | Description                   |
| ------------ | ----------------------------- |
| [PORT]       | The port that you want to use |
| [URL_SERVER] | The url of the server         |
| [URL_CLIENT] | The url of the client         |

| Cient        | Description           |
| ------------ | --------------------- |
| [URL_SERVER] | The url of the server |

Run the server:

```
cd server/
npm install
npm run dev
```

Run the client:

```
cd client/
npm install
npm start
```

## To run with docker

Go to the root of the app and run:

```
docker-compose up
```

or

```
sudo docker-compose up
```
