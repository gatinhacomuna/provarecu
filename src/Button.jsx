function Button({link, nome}){
    return(
        <button className='apps'>
              <img src={link} alt={nome} />
              <p className='nome'>{nome}</p>
        </button>
    );
}

export default Button;