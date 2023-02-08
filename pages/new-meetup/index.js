import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addNewMeetupHandler = (meetupData) => {
    console.log(meetupData);
  };
  return <NewMeetupForm onAddMeetup={addNewMeetupHandler} />;
};
export default NewMeetupPage;
