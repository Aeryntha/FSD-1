import { useState } from 'react';

function CommandManager() {
  const [commands, setCommands] = useState([]);
  const [input, setInput] = useState('');

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
      <h2>Custom Discord Commands</h2>

      {/* Form */}
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

      {/* List rendering */}
      <ul>
        {commands.map((command) => (
          <li key={command.id}>
            <strong>{command.name}</strong>

            {' - '}

            {/* Conditional rendering */}
            {command.enabled ? 'Enabled' : 'Disabled'}

            {' '}

            <button
              onClick={() => toggleCommand(command.id)}
            >
              {command.enabled ? 'Disable' : 'Enable'}
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

export default CommandManager;