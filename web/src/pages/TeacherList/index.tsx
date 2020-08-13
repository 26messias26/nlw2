import React from 'react';

import PageHeader from '../../componentes/PageHeader';
import TeacherItem from '../../componentes/TeacherItem';


import './styles.css';


function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Este são os proffys disponives.">
                <form id="search-teachers">

                    <div className="input-block">
                        <label htmlFor="subject">Materia</label>
                        <input type="text" id="subject" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="week_day">Dia da semana</label>
                        <input type="text" id="week_day" />
                    </div>

                    <div className="input-block">
                        <label htmlFor="time">Materia</label>
                        <input type="text" id="time" />
                    </div>

                </form>
            </PageHeader>

            <main>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </main>

        </div>
    )
}

export default TeacherList;