import ServerCard from '../components/ServerCard';

function Week2() {
  return (
    <div>
      <h1>Week 2 - Components & Props</h1>

      <ServerCard
        name="Study Hub"
        members={1250}
        status="Online"
      >
        <p>Moderation Bot: Active</p>
      </ServerCard>

      <ServerCard
        name="Gaming Community"
        members={842}
        status="Online"
      >
        <p>Moderation Bot: Active</p>
      </ServerCard>
    </div>
  );
}

export default Week2;