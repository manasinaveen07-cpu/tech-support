export default function SupportPage() {
  return (
    <div>
      <h1>Support</h1>

      <form className="card">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Describe your issue"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}