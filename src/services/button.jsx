export function Button({ onClick, children }) {
  return (
    <button 
      onClick={onClick} 
      className="btn-nav"
      style={{ padding: '5px 10px', cursor: 'pointer' }}
    >
      {children}
    </button>
  );
}