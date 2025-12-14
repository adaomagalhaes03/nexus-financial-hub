import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-8xl font-bold text-gradient">404</h1>
        <p className="text-2xl text-foreground font-display">Página não encontrada</p>
        <p className="text-muted-foreground max-w-md mx-auto">
          A página que procura não existe ou foi movida. Por favor, volte à página inicial.
        </p>
        <Link to="/" className="btn-primary inline-flex items-center gap-2">
          <Home size={18} />
          Voltar ao Início
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
