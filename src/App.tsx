import React from 'react';
import Button from './components/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>default</Button>
        <Button
          size="lg"
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
          sm button
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
    </div>
  );
}

export default App;
