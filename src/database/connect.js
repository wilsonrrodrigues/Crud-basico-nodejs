const mongoose = require('mongoose');

const connectToDatabase = async () => {
  await mongoose.set('strictQuery', false).
        mongoose.connect(
          `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@aulanode.oj2xqng.mongodb.net/database?retryWrites=true&w=majority`, (error) => {
    if (error) {
      return console('Ocorreu um erro ao se conectar com o banco de dados: ', error);
    }

    return console.log('Conexão ao banco de dados realizada com sucesso!');
  });
};

module.exports = connectToDatabase;