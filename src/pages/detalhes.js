import { useParams } from "react-router-dom"
import Filme from './../components/Filme/index';
import Título from './../components/Título/index';

const filmes = [

    {
        "nome": "O Segredo dos Animais",
        "duracao": "1h30",
        "foto": "SegredoDosAnimais.jpg",
        "ano": "2006",
        "genero": "Comédia/Animação",
        "descricao": "É o início do terceiro ano na escola de bruxaria Hogwarts. Harry, Ron e Hermione têm muito o que aprender. Mas uma ameaça ronda a escola e ela se chama Sirius Black. Após doze anos encarcerado na prisão de Azkaban, ele consegue escapar e volta para vingar seu mestre, Lord Voldemort. Para piorar, os Dementores, guardas supostamente enviados para proteger Hogwarts e seguir os passos de Black, parecem ser ameaças ainda mais perigosas.",
        "nota": 4
    },
    {
        "nome": "O Invisível",
        "duracao": "1H42",
        "foto": "Invisivel.jpg",
        "ano": "2007",
        "genero": "Thriller/Fantasia",
        "descricao": "Nick Powell é um jovem escritor de sucesso. Após sofrer um ataque violento, fica preso em uma dimensão entre a vida e a morte onde os vivos não podem vê-lo e está ameaçado de ficar perdido para sempre.",
        "nota": 5
    },

    {
        "nome": "Harry Potter e a Pedra Filosofal",
        "duracao": "2H32",
        "foto": "HarryPotterPedraFilosofal.jpg",
        "ano": "2001",
        "genero": "Fantasia/Aventura",
        "descricao": "Harry Potter é um garoto órfão que vive infeliz com seus tios, os Dursleys. Ele recebe uma carta contendo um convite para ingressar em Hogwarts, uma famosa escola especializada em formar jovens bruxos. Inicialmente, Harry é impedido de ler a carta por seu tio, mas logo recebe a visita de Hagrid, o guarda-caça de Hogwarts, que chega para levá-lo até a escola. Harry adentra um mundo mágico que jamais imaginara, vivendo diversas aventuras com seus novos amigos, Rony Weasley e Hermione Granger.",
        "nota": 5
    },

    {
        "nome": "Harry Potter e a Câmara Secreta",
        "duracao": "2H41",
        "foto": "HarryPotterCamaraSecreta.jpg",
        "ano": "2002",
        "genero": "Fantasia/Aventura",
        "descricao": "Após as sofríveis férias na casa dos tios, Harry Potter se prepara para voltar a Hogwarts e começar seu segundo ano na escola de bruxos. Na véspera do início das aulas, a estranha criatura Dobby aparece em seu quarto e o avisa de que voltar é um erro e que algo muito ruim pode acontecer se Harry insistir em continuar os estudos de bruxaria. O garoto, no entanto, está disposto a correr o risco e se livrar do lar problemático.",
        "nota": 5
    },

    {
        "nome": "Harry Potter e o Prisioneiro de Azkaban",
        "duracao": "2H18",
        "foto": "HarryPotterPrisioneiroAzkaban.jpg",
        "ano": "2004",
        "genero": "Fantasia/Aventura",
        "descricao": "O touro Otis gosta de cantar e tocar como todos os outros animais do celeiro quando o agricultor está fora. No entanto, o bovino despreocupado deve encontrar coragem para ser um líder quando, inesperadamente, ele se encontra em uma posição de grande responsabilidade.",
        "nota": 5
    },

]
   
export default function Detalhes() {
    const { filme } = useParams();


    return (
        <div>
            <div class="container">
                <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
                    <h1 class="display-4">Filme</h1>
                    <p class="lead">Detalhes sobre o filme</p>
                </div>
            </div>
                <p class="lead">Filme: {filme}</p>
                {(() => {
                    if (filme === 'O Segredo dos Animais') {
                        return (
                            <div>
                                <p class="lead">Sinopse: {filmes[0].descricao}</p>
                                <p class="lead">Gênero: {filmes[0].genero}</p>
                                <p class="lead">Ano: {filmes[0].ano}</p>
                                <p class="lead">Nota: {filmes[0].nota}</p>
                            </div>
                        )
                    } else if (filme === 'O Invisível') {
                        return (
                            <div>
                                <p class="lead">Sinopse: {filmes[1].descricao}</p>
                                <p class="lead">Gênero: {filmes[1].genero}</p>
                                <p class="lead">Ano: {filmes[1].ano}</p>
                                <p class="lead">Nota: {filmes[1].nota}</p>
                            </div>
                        )
                    } else if (filme === 'Harry Potter e a Pedra Filosofal') {
                        return (
                            <div>
                                <p>Sinopse: {filmes[2].descricao}</p>
                                <p>Gênero: {filmes[2].genero}</p>
                                <p>Ano: {filmes[2].ano}</p>
                                <p>Nota: {filmes[2].nota}</p>
                            </div>
                        )
                    } else if (filme === 'Harry Potter e a Câmara Secreta') {
                        return (
                            <div>
                                <p>Sinopse: {filmes[3].descricao}</p>
                                <p>Gênero: {filmes[3].genero}</p>
                                <p>Ano: {filmes[3].ano}</p>
                                <p>Nota: {filmes[3].nota}</p>
                            </div>
                        )
                    } else if (filme === 'Harry Potter e o Prisioneiro de Azkaban') {
                        return (
                            <div>
                                <p>Sinopse: {filmes[4].descricao}</p>
                                <p>Gênero: {filmes[4].genero}</p>
                                <p>Ano: {filmes[4].ano}</p>
                                <p>Nota: {filmes[4].nota}</p>
                            </div>
                        )
                    }
                })()}
            </div>
    )
}