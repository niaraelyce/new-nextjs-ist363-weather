const PeoplePicker = ({ people }) => {
  return (
    <div>
      <h2>Team</h2>
      {people.map((person, index) => {
        return <div key={index}>{person.name.first}</div>;
      })}
    </div>
  );
};
export default PeoplePicker;
