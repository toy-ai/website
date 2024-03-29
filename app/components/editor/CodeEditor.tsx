import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/theme-textmate';
import 'ace-builds/src-noconflict/theme-idle_fingers';
import 'ace-builds/src-noconflict/ext-language_tools';
// import { useColorMode } from '@theme-ui/color-modes';

import Controls from './Controls';
import Loader from './Loader';
import Input from './Input';
import { ArrowPathIcon, PlayIcon, StopIcon } from '@heroicons/react/24/solid';
import { usePython } from 'react-py';

const editorOptions = {
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  highlightActiveLine: true,
  showPrintMargin: false
};

const editorOnLoad = (editor: any) => {
  editor.renderer.setScrollMargin(10, 10, 0, 0);
  editor.moveCursorTo(0, 0);
};

export interface Packages {
  official?: string[];
  micropip?: string[];
}

interface CodeEditorProps {
  code: string;
  packages?: Packages;
}

const CodeEditor: React.FC<CodeEditorProps> = (props) => {
  const { code, packages } = props;
  const [input, setInput] = useState(code.trimEnd());
  const [showOutput, setShowOutput] = useState(false);

  useEffect(() => {
    setInput(code.trimEnd());
    setShowOutput(false);
  }, [code]);

  // const { colorMode } = useColorMode();

  const {
    runPython,
    stdout,
    stderr,
    isLoading,
    isRunning,
    interruptExecution,
    isAwaitingInput,
    sendInput,
    prompt
  } = usePython({ packages });
  const promptName: string = prompt !== undefined ? prompt : "";

  function run() {
    runPython(input);
    setShowOutput(true);
  }

  function stop() {
    interruptExecution();
    setShowOutput(false);
  }

  function reset() {
    setShowOutput(false);
    setInput(code.trimEnd());
  }

  return (
    <div className="code-editor-wrapper">
      <div className="code-editor-container">
        <div className="relative mb-10 flex flex-col">
          <Controls
            items={[
              {
                label: 'Run',
                icon: PlayIcon,
                onClick: run,
                disabled: isLoading || isRunning,
                hidden: isRunning
              },
              { label: 'Stop', icon: StopIcon, onClick: stop, hidden: !isRunning },
              {
                label: 'Reset',
                icon: ArrowPathIcon,
                onClick: reset,
                disabled: isRunning
              }
            ]}
            isAwaitingInput={isAwaitingInput}
          />

          {isLoading && <Loader />}

          <AceEditor
            value={input}
            mode="python"
            name="CodeBlock"
            fontSize="0.9rem"
            className="min-h-[7rem] overflow-clip rounded shadow-md"
            theme={'textmate'}
            onChange={(newValue) => setInput(newValue)}
            width="100%"
            maxLines={Infinity}
            onLoad={editorOnLoad}
            editorProps={{ $blockScrolling: true }}
            setOptions={editorOptions}
          />
          {isAwaitingInput && <Input prompt={promptName} onSubmit={sendInput} />}

          {showOutput && (
            <pre className="mt-4 text-left">
              <code>{stdout}</code>
              <code className="text-red-500">{stderr}</code>
            </pre>
          )}
        </div>
      </div>

      <style jsx>{`
        .code-editor-wrapper {
          display: flex;
          justify-content: center;
          //align-items: center;
          //height: 100vh;
        }
        .code-editor-container {
          width: 60%; /* Adjust the width as needed */
          /* Add any other styling you want */
        }
      `}</style>
    </div>
  );
};

export default CodeEditor;
