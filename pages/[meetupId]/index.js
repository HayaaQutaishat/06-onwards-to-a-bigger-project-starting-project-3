import MeetupDetail from "../../components/meetups/meetupDetail";
const MeetupDetailPage = () => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export const getStaticProps = async () => {
  // fetch data from API route
  return {
    props: {
      meetupData: {
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