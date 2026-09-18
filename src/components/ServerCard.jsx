function ServerCard({ name, members, status, children }) {
  return (
    <div className="server-card">
      <h2>{name}</h2>

      <p>
        <strong>Members:</strong> {members}
      </p>

      <p>
        <strong>Status:</strong> {status}
      </p>

      {children}
    </div>
  );
}

export default ServerCard;