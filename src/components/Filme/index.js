import './filme.css'

const filmes = [

    {
        "nome": "O Segredo dos Animais",
        "duracao": "1h30",
        "foto": "SegredoDosAnimais.jpg",

    },
    {
        "nome": "O Invisível",
        "duracao": "1H42",
        "foto": "Invisivel.jpg",

    },

    {
        "nome": "Harry Potter e a Pedra Filosofal",
        "duracao": "2H32",
        "foto": "HarryPotterPedraFilosofal.jpg",

    },

    {
        "nome": "Harry Potter e a Câmara Secreta",
        "duracao": "2H41",
        "foto": "HarryPotterCamaraSecreta.jpg",

    },

    {
        "nome": "Harry Potter e o Prisioneiro de Azkaban",
        "duracao": "2H18",
        "foto": "HarryPotterPrisioneiroAzkaban.jpg",

    },

]

function Filme () {
  return (
        <div className='container-fluid text-center'>
            <div class ='row'>
                {filmes.map((filmes, i) => (
                    <div className="col" key={i}>
                        <div class="card">
                            <img src={'/assets/images/' + filmes.foto} alt={filmes.nome} className="card-img-top" />
                            <div class="card-body">
                                <h5 className="card-title">{filmes.nome}</h5>
                                <p className="card-text"></p>
                                <p>{filmes.duracao}</p>

                                <a href={`/detalhes/${filmes.nome}`}>

                                    <div className="btn btn-primary">
                                        Detalhes
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
         </div>
    )
}

export default Filme;
