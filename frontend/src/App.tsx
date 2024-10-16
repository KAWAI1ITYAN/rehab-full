import './App.css';
import { Header } from './shared/components/header/header.tsx';
import { Router } from './shared/router/router.tsx';
import { Footer } from './shared/components/footer/footer.tsx';

function App() {
  return (
    <>
      <Header />
      <Router />
      <Footer />
    </>
  );
}

export default App;
