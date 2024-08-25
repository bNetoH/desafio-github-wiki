import React from 'react'
import { ItemRepoContainer } from './styles';

export const ItemRepo = ({entity, handleRemoveRepos}) => {

  const handleRemove = () => {
    handleRemoveRepos(entity);
  }

  return (
    <ItemRepoContainer onClick={handleRemove}>
      <h3>{entity.name}</h3>
      <p>{entity.full_name}</p>
      <a href={entity.html_url} target="_blank" rel='noreferrer' className='fetch'>Repos</a>
      <a href="##" className='remove'>Remover</a>
      <hr />
    </ItemRepoContainer>
  )
}

export default ItemRepo;