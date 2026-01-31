import "./Contact.styles.scss";

const socialNetworks = [
  {
    id: 1,
    name: "Instagram",
  },
  {
    id: 2,
    name: "Facebook",
  },
  {
    id: 3,
    name: "X",
  },
];
const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact us</h2>
      <span className="sub-title">These are our socials networks.</span>
      <ul>
        {socialNetworks.map((s) => (
          <div key={s.id} className="social-network-list">
            <span>{s.name}</span>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
