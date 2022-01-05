import "./App.css";
import Button from "./components/Buttom";

function App() {
  return (
    <div className="App">
      <div className="container">
      <div className="row">
        <Button>Default</Button>
      </div>
      <div className="row">
        <Button variant="outline">Default</Button>
      </div>
      <div className="row">
        <Button variant="text">Default</Button>
      </div>
      <div className="row">
        <Button variant="disableShadow">Default</Button>
      </div>
      <div className="row">
        <Button variant="disabled">Default</Button>
      </div>
      <div className="multi-row">
        <div className="multi-row-item">
        <Button startIcon="local_grocery_store">
          <span class="material-icons">add_shopping_cart</span>
          Default
        </Button>
        </div>
        <div className="multi-row-item">
        <Button endIcon="local_grocery_store">
          Default
          <span class="material-icons">add_shopping_cart</span>
        </Button>
        </div>
      </div>
      <div className="multi-row">
        <div className="multi-row-item">
        <p>&lt;Button size=sm /&gt;</p>        
        <Button size="sm">Default</Button>
        </div>
        <div className="multi-row-item">
        <p>&lt;Button size=md /&gt;</p>        
        <Button size="md">Default</Button>
        </div>
        <div className="multi-row-item">
        <p>&lt;Button size=lg /&gt;</p>        
        <Button size="lg">Default</Button>
        </div>
      </div>
      <div className="multi-row">
        <div className="multi-row-item"> 
        <p>&lt;Button color=”default” /&gt;</p>        
      <Button color="default">Default</Button>
        </div>
        <div className="multi-row-item">
        <p>&lt;Button color=primary /&gt;</p>        
        <Button color="primary">Primary</Button>
        </div>
        <div className="multi-row-item">
        <p>&lt;Button color=secondary /&gt;</p>        
        <Button color="secondary">Secondary</Button>
        </div>
        <div className="multi-row-item">
        <p>&lt;Button color=danger /&gt;</p>        
        <Button color="danger">Danger</Button>          
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
