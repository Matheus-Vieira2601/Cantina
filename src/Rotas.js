import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './components/template/Main';
import Login from './components/Crud_Login/Login';

export default function Rotas() {
    return (
        <Routes>
            <Route exact path='/'
                element={
                    <Main title="Bem Vindo!">
                        <div>Cadastro de alunos, cursos e carômetro</div>
                    </Main>}
            />

            <Route path='/login' element={<Login />} />
            <Route from="*" to='/' />
        </Routes>
    )
}