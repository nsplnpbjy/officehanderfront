import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
                <form action="http://127.0.0.1:8095/upload" method="post" enctype="multipart/form-data">
                    <div>
                      <label>主表</label>
                      <input type="file" name='file'/>
                    </div>
                    <div>
                      <label>对比表</label>
                      <input type="file" name='file'/>
                    </div>
                    <div>
                      <label>相同数据列</label>
                      <input name="clm"></input>
                    </div>
                    <input type="submit" value="上传"/>
                </form>
            </div>
      </header>
    </div>
  );
}

export default App;
