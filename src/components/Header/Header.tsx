import '../Header/Header'
import logo from '../../imagens/pc.png';
import { Button } from '../../services/button';

export function Header() {
 
    return (
     <header className="header-main" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <img 
        src={logo} 
        alt="Logo do Site" 
        style={{ width: '30px', height: 'auto' }} 
      />
      
      <h1>Aprendendo React</h1>

      
    </header>
  );
}