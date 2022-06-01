import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthProvider';

// Paginas das rotas
import LoginPage from './pages/login';
import SignUpPage from './pages/cadastro';
import MealsPageLogged from './pages/mealsLogged';
import MealsPageNotLogged from './pages/mealsNotLogged';
import PedidoFinalizado from './pages/finalizarPagar';
import MeusPedidos from './pages/meusPedidos';
import PerfilPage from './pages/perfil';
import TablePage from './pages/backoffice/tabela';
import TablemealsPage from './pages/backoffice/tabelaMeals';
import TablerequestsPage from './pages/backoffice/tabelaRequests';
import NewMeal from './pages/backoffice/newMeal';
import EditUser from './pages/backoffice/usuarios';
import EditMeal from './pages/backoffice/refeicoes';
import EditRequest from './pages/backoffice/pedidos';

export default function App() {
    return (
        <>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<MealsPageNotLogged />} />
                    <Route path="/cadastro" element={<SignUpPage />} />
                    <Route path="/entrar" element={<LoginPage />} />
                    <Route path="/perfil" element={<PerfilPage />} />
                    <Route path="/meuspedidos" element={<MeusPedidos />} />
                    <Route
                        path="/pedidofinalizado"
                        element={<PedidoFinalizado />}
                    />
                    <Route path="/home" element={<MealsPageLogged />} />
                    <Route
                        path="/homenotlogged"
                        element={<MealsPageNotLogged />}
                    />
                    <Route path="/newMeal" element={<NewMeal />} />
                    <Route path="/editUser" element={<EditUser />} />
                    <Route path="/editRequest" element={<EditRequest />} />
                    <Route path="/editMeal" element={<EditMeal />} />
                    <Route path="/tabela" element={<TablePage />} />
                    <Route path="/tabelameals" element={<TablemealsPage />} />
                    <Route
                        path="/tabelarequests"
                        element={<TablerequestsPage />}
                    />
                </Routes>
            </AuthProvider>
        </>
    );
}
