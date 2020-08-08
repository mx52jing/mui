import React from 'react';
import Button from './components/Button'


function App() {
  const a = 123
  if (typeof a == 'string') {

  }
  return (
    <div className="App">
      <header className="App-header">
        <Button>default</Button>
        <Button
          btnType="primary">
          primary
          </Button>
        <Button
          btnType="danger">
          danger
        </Button>
        <Button
          btnType="link"
          href="https://www.baidu.com">
          link
        </Button>
        <Button
          btnType="link"
          disabled
          href="https://www.baidu.com">
          disabled link
        </Button>
        <Button
          btnType="primary"
          size="sm">
          sm
        </Button>
        <Button
          size="lg">
          large button
        </Button>
        <Button
          disabled
          size="lg">
          large disabled btn
        </Button>
      </header>
      <button>test</button>
    </div>
  );
}

export default App;
