import './Main.css';
import React from 'react';
import Header from './Header';

export default function Main(props) {
    return (
    <div className="content">
        <Header {...props} />
        <main title="Cadastro de Alunos!">
            <div>
                {props.children}
            </div>
        </main>
    </div>
    )
}