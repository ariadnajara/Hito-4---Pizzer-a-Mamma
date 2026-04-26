const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 py-2">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        
        {/* Título y Botones de Navegación */}
        <div className="d-flex align-items-center">
          <span className="navbar-brand text-white fw-light me-4">
            Pizzería Mamma Mia!
          </span>

          <div className="d-flex gap-2">
            <button className="btn btn-outline-light btn-sm px-3">
              🏠 Home
            </button>

            {token ? (
              <>
                <button className="btn btn-outline-light btn-sm px-3">
                  🔓 Profile
                </button>
                <button className="btn btn-outline-light btn-sm px-3">
                  🔒 Logout
                </button>
              </>
            ) : (
              <>
                <button className="btn btn-outline-light btn-sm px-3">
                  🔐 Login
                </button>
                <button className="btn btn-outline-light btn-sm px-3">
                  🔐 Register
                </button>
              </>
            )}
          </div>
        </div>

        {/* Botón de Carrito (Cambiado a azul/negro como la imagen) */}
        <button className="btn btn-outline-info btn-sm px-3 fw-bold text-info">
          🛒 Total: ${total.toLocaleString("es-CL")}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
