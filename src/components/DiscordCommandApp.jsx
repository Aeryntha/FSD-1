import {
  createContext,
  useContext,
  useRef,
} from 'react';

import useCommands from './useCommands';

const ThemeContext = createContext('light');

function DiscordCommandApp() {
  const {
    commands,
    addCommand,
    toggleCommand,
    removeCommand,
    enabledCount,
  } = useCommands();

  const inputRef = useRef(null);

  const theme = useContext(ThemeContext);

  const handleAdd = () => {
    const commandName = inputRef.current.value;

    if (!commandName.trim()) return;

    addCommand(commandName);

    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <div className={theme}>
      <h2>Discord Command Manager</h2>

      <input
        ref={inputRef}
        placeholder="Enter command"
      />

      <button onClick={handleAdd}>
        Add Command
      </button>

      <p>
        Enabled Commands: {enabledCount}
      </p>

      <ul>
        {commands.map((command) => (
          <li key={command.id}>
            <strong>
              {command.name}
            </strong>

            {' - '}

            {command.enabled
              ? 'Enabled'
              : 'Disabled'}

            {' '}

            <button
              onClick={() =>
                toggleCommand(command.id)
              }
            >
              {command.enabled
                ? 'Disable'
                : 'Enable'}
            </button>

            {' '}

            <button
              onClick={() =>
                removeCommand(command.id)
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Week6() {
  return (
    <ThemeContext.Provider value="light">
      <div>

        <DiscordCommandApp />
      </div>
    </ThemeContext.Provider>
  );
}

export default Week6;