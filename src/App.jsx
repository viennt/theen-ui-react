import Button from './components/Button';

function App() {
  return (
    <div className="App flex flex-col gap-4 px-6 py-4">
      <div className="flex flex-wrap items-start gap-4">
        <Button className="w-28">Default</Button>
        <Button appearance="primary" className="w-28">
          Primary
        </Button>
        <Button appearance="success" className="w-28">
          Success
        </Button>
        <Button appearance="danger" className="w-28">
          Danger
        </Button>
        <Button appearance="warning" className="w-28">
          Warning
        </Button>
      </div>

      <div className="flex flex-wrap items-start gap-4">
        <Button isDisabled className="w-28">
          Disabled
        </Button>
        <Button appearance="primary" isDisabled className="w-28">
          Disabled
        </Button>
        <Button appearance="success" isDisabled className="w-28">
          Disabled
        </Button>
        <Button appearance="danger" isDisabled className="w-28">
          Disabled
        </Button>
        <Button appearance="warning" isDisabled className="w-28">
          Disabled
        </Button>
      </div>

      <div className="flex flex-wrap items-start gap-4">
        <Button spacing="large" className="w-28">
          Large
        </Button>
        <Button appearance="primary" spacing="large" className="w-28">
          Large
        </Button>
        <Button appearance="success" spacing="large" className="w-28">
          Large
        </Button>
        <Button appearance="danger" spacing="large" className="w-28">
          Large
        </Button>
        <Button appearance="warning" spacing="large" className="w-28">
          Large
        </Button>
      </div>

      <div className="flex flex-wrap items-start gap-4">
        <Button spacing="compact" className="w-28">
          Compact
        </Button>
        <Button appearance="primary" spacing="compact" className="w-28">
          Compact
        </Button>
        <Button appearance="success" spacing="compact" className="w-28">
          Compact
        </Button>
        <Button appearance="danger" spacing="compact" className="w-28">
          Compact
        </Button>
        <Button appearance="warning" spacing="compact" className="w-28">
          Compact
        </Button>
      </div>

      <div className="flex flex-wrap items-start gap-4">
        <Button appearance="subtle">Subtle button</Button>
        <Button appearance="link">Link button</Button>
      </div>
    </div>
  );
}

export default App;
