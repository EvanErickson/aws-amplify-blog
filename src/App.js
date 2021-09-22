import './App.css';
import DisplayPosts from './components/DisplayPosts';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

function App() {
  return (
    <div className="App">
      <DisplayPosts />
    </div>
  );
}

export default App;
