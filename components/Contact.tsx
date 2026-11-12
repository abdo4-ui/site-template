type ContactProps = {
  address: string;
  email: string;
  phone: string;
};

export default function Contact({ address, email, phone }: ContactProps) {
  return (
    <section>
      <h2>Contact</h2>
      <p>{address}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </section>
  );
}