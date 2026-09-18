import { useEffect, useState } from 'react';

function PersistentCommandManager() {
  const [commands, setCommands] = useState(() => {
    const savedCommands =
      localStorage.getItem('discordCommands');

    return savedCommands
      ? JSON.parse(savedCommands)
      : [];
  });

  const [input, setInput] = useState('');

  // Save whenever commands change
  useEffect(() => {
    localStorage.setItem(
      'discordCommands',
      JSON.stringify(commands)
    );
  }, [commands]);

  // Component lifecycle
  useEffect(() => {
    console.log('Command Manager mounted');

    return () => {
      console.log('Command Manager unmounted');
    };
  }, []);

  const addCommand = (e) => {
    e.preventDefault();

    const commandName = input.trim();

    if (!commandName) return;

    const newCommand = {
      id: Date.now(),
      name: commandName,
      enabled: true,
    };

    setCommands((previousCommands) => [
      ...previousCommands,
      newCommand,
    ]);

    setInput('');
  };

  const toggleCommand = (id) => {
    setCommands((previousCommands) =>
      previousCommands.map((command) =>
        command.id === id
          ? {
              ...command,
              enabled: !command.enabled,
            }
          : command
      )
    );
  };

  const deleteCommand = (id) => {
    setCommands((previousCommands) =>
      previousCommands.filter(
        (command) => command.id !== id
      )
    );
  };

  return (
    <div>
      <h2>Persistent Discord Commands</h2>

      <form onSubmit={addCommand}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter command"
        />

        <button type="submit">
          Add Command
        </button>
      </form>

      <ul>
        {commands.map((command) => (
          <li key={command.id}>
            <strong>{command.name}</strong>

            {' - '}

            {command.enabled
              ? 'Enabled'
              : 'Disabled'}

            {' '}

            <button
              onClick={() => toggleCommand(command.id)}
            >
              {command.enabled
                ? 'Disable'
                : 'Enable'}
            </button>

            {' '}

            <button
              onClick={() => deleteCommand(command.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <p>
        Total Commands: {commands.length}
      </p>
    </div>
  );
}

export default PersistentCommandManager;