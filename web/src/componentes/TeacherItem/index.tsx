import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem(){
    return (

        <article className="teacher-item">
        <header>
            <img src="https://avatars0.githubusercontent.com/u/44982001?s=460&u=0385a04364b5e06131301f6774f4a5fe0066a3e6&v=4" alt="Messias" />
            <div>
                <strong>Messias Souza</strong>
                <span>Motion Design</span>
            </div>
        </header>
        <p>
            Proficional na area de motion Desing a 5 anos, empucionando a criatividade de seus alunos ao extremo.
            <br /><br />
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum distinctio facere officia natus aliquid hic ipsum ipsam quis ipsa enim maiores cumque
            minus nemo ab, quo adipisci aut? Numquam, dolorem.
        </p>
        <footer>
            <p>
                Proço/hora
                <strong>R$ 80,00</strong>
            </p>
        <button type='button'>
            <img src={whatsappIcon} alt="whatsapp"/>
        Entrar em contato
        </button>
        </footer>
    </article>
    );
}

export default TeacherItem