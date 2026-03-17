/**
 * Componente raiz da aplicação
 * Define as rotas e contextos globais
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthProvider } from "./contexts/AuthContext";
import { MovieListProvider } from "./contexts/MovieListContext";

// Páginas
import Home from "./pages/Home";
import Login from "./pages/Login";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import MyList from "./pages/MyList";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/login"} component={Login} />
      <Route path={"/series"} component={Series} />
      <Route path={"/movies"} component={Movies} />
      <Route path={"/mylist"} component={MyList} />
      <Route path={"/profile"} component={Profile} />
      <Route path={"/search"} component={Search} />
      <Route path={"/404"} component={NotFound} />
      {/* Fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

/**
 * Componente principal da aplicação
 * Envolve toda a aplicação com os contextos necessários
 */
function App() {
  return (
    <>
      <div className="bg-amber-400 text-black text-center py-2 text-xs font-bold uppercase tracking-widest z-[100] relative">
        ⚠️ AVISO: Este é um projeto de estudo de portfólio. Não insira dados reais ou senhas oficiais.
      </div>
      <ErrorBoundary>
        <ThemeProvider defaultTheme="dark">
          <AuthProvider>
            <MovieListProvider>
              <TooltipProvider>
                <Toaster />
                <Router />
              </TooltipProvider>
            </MovieListProvider>
          </AuthProvider>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
