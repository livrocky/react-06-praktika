import Contact from './ContactCard';

const dataArr = [
  { title: 'Address', text: '203 Fake Address in Some Place, Some Place', id: 3 },
  { title: 'Phone', text: '+1 2335 2224 554', id: 2 },
  { title: 'Email', text: 'youremail@email.com', id: 1 },
];

function ContactList() {
  return (
    <div className="contact-container">
      {dataArr.map((dOb) => {
        return <Contact key={dOb.id} title={dOb.title} text={dOb.text} />;
      })}
    </div>
  );
}

export default ContactList;
