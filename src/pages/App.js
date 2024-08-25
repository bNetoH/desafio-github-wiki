import { Container } from './styles';
import GithubImg from '../assets/github.png';
import Input from '../components/Input';
import Button from '../components/Button';
import ItemRepo from '../components/ItemRepo';
import { api } from '../services/api'
import { useState } from 'react';
import Swal from 'sweetalert2';

const App = () => {
  const [ repos, setRepos ] = useState([]);
  const [currentRepos, setCurrentRepos] = useState('');

  const handleFetchRepos = async () => {
    if (currentRepos !== '') {

      await api.get(`repos/${currentRepos}`)
      .then(function (response) {
        if (response.status === 200) 
          {            
            if (response.data.id) {
              if (!repos.find(r => r.id === response.data.id)) {
                setRepos(prev => [...prev, response.data]);
                setCurrentRepos('');
              } else {
                Swal.fire("Repos já está lista!");                
              }
              return;
          }}
          else 
          {
            Swal.fire("Nenhum repos encontrado!");
          }
        })
        .catch(function (error) {
          if(error.response) {
            Swal.fire("Erro: certifique-se que o repos\nprocurado existe!");
          }
        })
    }
    return;
  }
  
  const handleRemoveRepos = (entity) => {
    const index = repos.indexOf(entity);

    if(index > -1) {
      setRepos(prev => [...prev, repos.splice(index, 1)]);
    }
  }
  
  return (
    <Container>
      <img src={GithubImg} alt="github icon"/>
      <Input value={currentRepos} onChange={(e) => setCurrentRepos(e.target.value)} />
      <Button onClick={handleFetchRepos} />

      { repos.map(item => item.id ? <ItemRepo handleRemoveRepos={handleRemoveRepos} entity={item}/> : "" )  }
    </Container>
  );
}

export default App;
