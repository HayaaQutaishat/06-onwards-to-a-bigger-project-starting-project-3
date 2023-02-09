import MeetupDetail from "../../components/meetups/meetupDetail";
import { MongoClient, ObjectId } from "mongodb";

const MeetupDetailPage = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export const getStaticPaths = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://Hayaa:Heyheyyou1997%40%40@atlascluster.k4pqhv7.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollections = db.collection("meetups");
  const meetups = await meetupCollections.find({}, { _id: 1 }).toArray();

  // console.log(meetups);

  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
};

export const getStaticProps = async (context) => {
  // fetch data from API route
  const meetupId = context.params.meetupId;

  // console.log(meetupId);

  const client = await MongoClient.connect(
    "mongodb+srv://Hayaa:Heyheyyou1997%40%40@atlascluster.k4pqhv7.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollections = db.collection("meetups");
  const selectedMeetup = await meetupCollections.findOne({
    _id: ObjectId(meetupId),
  });

  console.log(selectedMeetup);

  client.close();

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
        title: "A First Meetup",
        address: "Some address 12, City",
        description: "This is the first meetup",
      },
    },
  };
};

export default MeetupDetailPage;
