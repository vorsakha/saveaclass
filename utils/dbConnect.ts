import mongoose from "mongoose";

export default async () => {
  try {
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

        console.log("Connected to DB");
      }
    );
  } catch (error) {
    console.error(error);
  }
};
