import React, { useState, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

export const Terminal = () => {
  const [lines, setLines] = useState([
    { type: 'input', text: 'whoami' },
    { type: 'output', text: 'joao-vitor' }
  ]);
  
  const [input, setInput] = useState('');
  
  const handleCommand = (cmd) => {
    const newLines = [...lines, { type: 'input', text: cmd }];
    
    let output = '';
    switch(cmd.toLowerCase()) {
      case 'whoami':
        output = 'joao-vitor';
        break;
      case 'status':
        output = 'learning_and_building';
        break;
      case 'mission':
        output = 'turn_ideas_into_code';
        break;
      case 'clear':
        setLines([]);
        setInput('');
        return;
      case 'help':
        output = 'Available commands: whoami, status, mission, clear, help';
        break;
      default:
        output = `Command not found: ${cmd}. Type 'help' for available commands.`;
    }
    
    newLines.push({ type: 'output', text: output });
    setLines(newLines);
    setInput('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && input.trim()) {
      handleCommand(input.trim());
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-[#0A0A0A] rounded-lg border border-slate-800 overflow-hidden font-mono text-sm shadow-xl mt-8">
      <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="ml-4 text-xs text-slate-500 flex items-center gap-2">
          <TerminalIcon size={12} />
          joao@portfolio:~
        </div>
      </div>
      <div className="p-4 h-48 overflow-y-auto text-slate-300">
        <div className="mb-2 text-green-500">System Status: ONLINE</div>
        {lines.map((line, idx) => (
          <div key={idx} className="mb-1">
            {line.type === 'input' ? (
              <div className="flex gap-2">
                <span className="text-red-500">$</span>
                <span>{line.text}</span>
              </div>
            ) : (
              <div className="text-slate-400 ml-4">{line.text}</div>
            )}
          </div>
        ))}
        <div className="flex gap-2 mt-1">
          <span className="text-red-500">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent border-none outline-none flex-1 text-slate-300"
            spellCheck="false"
            autoComplete="off"
            autoFocus={false}
          />
        </div>
      </div>
    </div>
  );
};
