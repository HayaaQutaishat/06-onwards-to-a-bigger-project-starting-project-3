// api/new-meetup
import { MongoClient } from "mongodb";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    // establish a connection to my MongoDB database
    const client = await MongoClient.connect(
      "mongodb+srv://Hayaa:Heyheyyou1997%40%40@atlascluster.k4pqhv7.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupCollections = db.collection("meetups");
    const result = await meetupCollections.insertOne(data);

    // close the connection with the database
    client.close();

    console.log(result);
    res.status(201).json({ message: "Meetup inserted successfully!" });
  }
};

export default handler;
