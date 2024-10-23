import React, { useState } from 'react';

function MessageForm() {
  const [message, setMessage] = useState('');
  const [files, setFiles] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // Estado para controlar o envio do formulário

  const handleFileChange = (event) => {
    setFiles(event.target.files);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validação para verificar se e-mail e senha estão preenchidos
    if (!email || !password) {
      setError('E-mail e senha são obrigatórios.');
      return;
    } else {
      setError('');
    }

    const formData = new FormData();
    formData.append('message', message);
    formData.append('email', email);
    formData.append('password', password);

    // Adiciona os arquivos ao formData
    for (let i = 0; i < files.length; i++) {
      formData.append('files', files[i]);
    }

    console.log('Form data enviado:', formData);

    // Limpa os campos e indica que o formulário foi enviado com sucesso
    setMessage('');
    setEmail('');
    setPassword('');
    setFiles([]);
    setIsSubmitted(true); // Atualiza o estado para indicar o envio bem-sucedido
  };

  return (
    <div className='flex flex-col mt-72 items-center mb-56 px-4'>
  <h1 className='bg-black w-full text-white text-2xl uppercase p-8 text-center'>
    Style Creation Digital
  </h1>

  <div className='flex flex-col lg:flex-row justify-center space-x-0 lg:space-x-40 mt-10'>
    {/* Seção de Cadastro */}
    <div className='flex justify-center items-center w-full lg:w-1/2'>
      {isSubmitted ? (
        <p className='text-green-600 text-2xl font-bold mt-10'>Email cadastrado com sucesso!</p>
      ) : (
        <div className='flex flex-col items-start border shadow-lg p-6 w-full max-w-md'>
          <p className='text-xl'>Cadastre seu email</p>
          {error && <p className='text-red-500'>{error}</p>}
          <label htmlFor='email' className='mt-10'>
            E-mail <span className='text-red-500 text-xl'>*</span>
          </label>
          <input
            type='email'
            placeholder='Digite seu email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='mt-2 border border-slate-300 p-2 w-full rounded focus:outline-none'
          />

          <label htmlFor='password' className='mt-10'>
            Senha <span className='text-red-500 text-xl'>*</span>
          </label>
          <input
            type='password'
            placeholder='Digite sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='mt-2 border border-slate-300 p-2 w-full rounded focus:outline-none'
          />

          <div className='flex mt-5'>
            <input type='checkbox' />
            <a href='#' className='ml-3 w-80 text-start text-sm'>
              Li e concordo com os <span>Termos de uso</span> e <span>Políticas de Privacidade</span>
            </a>
          </div>
          <button
            onClick={handleSubmit}
            className='mt-10 text-center bg-green-500 p-3 w-full rounded font-semibold text-white border-b-2 border-green-600'
          >
            Cadastrar meu email
          </button>
        </div>
      )}
    </div>

    {/* Seção de Mensagem */}
    <div className='flex flex-col w-full lg:w-1/2 mt-10 lg:mt-0'>
      <h1 className='text-xl font-semibold text-center mb-10 uppercase'>
        Envie-nos uma mensagem ou anexe arquivos de projetos:
      </h1>

      <form className='space-y-8'>
        <div className='flex flex-col'>
          <label htmlFor='message' className='font-medium text-start text-lg mb-2'>
            Mensagem:
          </label>
          <textarea
            id='message'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Sinta-se à vontade para escrever aqui...'
            rows='5'
            className='border border-gray-300 p-4 rounded-lg focus:outline-none resize-none'
          />
        </div>

        <div className='flex flex-col'>
          <label htmlFor='file' className='font-medium text-lg mb-2'>
            Anexar Arquivos:
          </label>
          <input
            type='file'
            id='file'
            onChange={handleFileChange}
            multiple
            className='p-2 file:mr-4 file:py-2 file:px-4 file:border-0 file:text-sm file:font-semibold file:bg-gray-400 file:text-white hover:file:bg-green-500'
          />
        </div>

        {/* Botões */}
        <div className='flex justify-center space-x-5 pb-10'>
          <button
            type='submit'
            className='w-48 bg-green-600 text-white py-3 rounded-lg font-semibold border-2 border-transparent hover:bg-white hover:border-green-600 hover:text-green-600 transition duration-300'
          >
            Enviar
          </button>
          <button
            type='button'
            className='w-48 bg-red-600 text-white py-3 rounded-lg font-semibold border-2 border-transparent hover:bg-white hover:border-red-600 hover:text-red-600 transition duration-300'
            onClick={() => {
              setMessage('');
              setFiles([]);
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

  );
}

export default MessageForm;

