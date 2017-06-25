import React from 'react';
import PageHeader from '../template/pageHeader';

export default props => (
  <div>
    <PageHeader name='Sobre' small='o App'></PageHeader>
    <div className='col-md max-width'>
    <p>Pequeno WebApp de cadastro de tarefas feito para aprofundar os conhecimentos na biblioteca React</p>
    </div>

    <h2>A Desenvolvedora</h2>
    <div className='col-md max-width'>
    <p>Uma forte candidata a velha dos gatos daqui a 20 anos, no momento focando-se em aprender coisas novas e ganhar dinheiro com isso (essa segunda parte ainda não chegou mas a esperança é a ultima que morre).</p>
    <p>Bianca Rocha o nome da maldita.</p>
    </div>
  </div>
)