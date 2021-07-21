import mongoose from "mongoose";

const connection = {
  isConnected: false,
};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  mongoose.connect(
    process.env.DB_URL as string,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    },
    (error: any) => {
      if (error) {
        return console.log(error);
      }

      connection.isConnected = true;
      console.log("Connected to DB");
    }
  );
}

export default dbConnect;
