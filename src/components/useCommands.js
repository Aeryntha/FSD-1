import { useState, useMemo } from 'react';

function useCommands() {
  const [commands, setCommands] = useState([]);

  const addCommand = (name) => {
    if (!name.trim()) return;

    const newCommand = {
      id: Date.now(),
      name: name.trim(),
      enabled: true,
    };

    setCommands((previousCommands) => [
      ...previousCommands,
      newCommand,
    ]);
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

  const removeCommand = (id) => {
    setCommands((previousCommands) =>
      previousCommands.filter(
        (command) => command.id !== id
      )
    );
  };

  const enabledCount = useMemo(
    () =>
      commands.filter(
        (command) => command.enabled
      ).length,
    [commands]
  );

  return {
    commands,
    addCommand,
    toggleCommand,
    removeCommand,
    enabledCount,
  };
}

export default useCommands;