import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import { Fragment } from "react";
import Head from "next/head";

// const DUMMY_MEETUPS = [
//   {
//     id: "m1",
//     title: "A First Meetup",
//     description: "This is the first meetup",
//     address: "Some address 12, City",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//   },
//   {
//     id: "m2",
//     title: "A Second Meetup",
//     description: "This is the secoond meetup",
//     address: "Some address 12, City",
//     image:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
//   },
// ];

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active react meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  // fetch data from API route
  const client = await MongoClient.connect(
    "mongodb+srv://Hayaa:Heyheyyou1997%40%40@atlascluster.k4pqhv7.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupCollections = db.collection("meetups");
  const meetups = await meetupCollections.find().toArray();

  client.close();

  // console.log(meetups);

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        id: meetup._id.toJSON(),
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      })),
    },
    revalidate: 10,
  };
};

export default HomePage;
