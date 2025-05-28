import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { db } from './Firebase'
import { collection, getDocs } from 'firebase/firestore'

import AdicionarDadosComponents from './components/AdicionarDadosComponents'
import ListarDadosComponents from './components/ListarDadosComponents'
import EditarDadosComponentes from './components/EditarDadosComponents'

import './App.css'

function App() {
  const [produtos, setProdutos] = useState([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  const carregarProdutos = async () => {
    const todos_os_dados = await getDocs(collection(db, "produtos"));
    const lista = todos_os_dados.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    setProdutos(lista)
  }

  useEffect(() => {
    carregarProdutos();
  }, [])

  const handleRefresh = () => carregarProdutos();
  const handleEditar = (produto) => setProdutoSelecionado(produto);
  const handleClearEdit = () => setProdutoSelecionado(null);

  return (
    <div className='container mt-4'>
      <h2 className='text-center mb-4'>Gerenciador de Produtos</h2>

      <div className='card mb-4'>
        <div className='card-body'>
          <AdicionarDadosComponents/>
        </div>
      </div>

      {produtoSelecionado && (
        <div className='card mb-4'>
          <div className='card-body'>
            <EditarDadosComponentes
                produtoSelecionado={produtoSelecionado}
                onClear={handleClearEdit}
                onRefresh={handleRefresh}
            />
          </div>
        </div>
      )}

      <div className='card'>
        <div className='card-body'>
          <h4 className='mb-3'>Lista de Produtos</h4>
          <ListarDadosComponents
              produtos={produtos}
              onEditar={handleEditar}
              onDeleted={handleRefresh}
            />
        </div>
      </div>
    </div>
  )
}

export default App
