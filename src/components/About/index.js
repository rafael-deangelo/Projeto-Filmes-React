import React from 'react';
import './about.css';

const About = () => {
  return (
    <main>
      <div className="video-background">
        <video autoPlay muted loop>
          <source src="/public/assets/videos/OCavaleiroSolitário.mp4" type="video/mp4" />
        </video>
      </div>

      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 fw-normal">Quem somos</h1>
          <p class="lead fw-normal">Bem-vindo à nossa plataforma de streaming de filmes!</p>
          <p class="lead fw-normal">Somos uma plataforma de streaming e oferecemos conteúdos de alta qualidade para nossos usuários.</p>
          <p class="lead fw-normal">Estamos comprometidos em oferecer a você a melhor experiência de visualização de filmes online</p>
        </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 fw-normal">Missão</h1>
          <p class="lead fw-normal">Nossa missão é fornecer acesso fácil e conveniente a uma ampla variedade de filmes de alta qualidade para atender a todos os gostos e interesses.</p>
          <p class="lead fw-normal">Também estamos comprometidos em fornecer uma plataforma segura e fácil de usar para nossos usuários.</p>
        </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 fw-normal">Conteúdo</h1>
          <p class="lead fw-normal">Nosso catálogo inclui filmes dos gêneros ação, aventura, comédia, drama, ficção científica, romance e muito mais. </p>
          <p class="lead fw-normal">Além disso, nosso site é atualizado regularmente com os lançamentos mais recentes, para que você possa desfrutar dos filmes mais quentes do momento.</p>
        </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <h1 class="display-4 fw-normal">Segurança</h1>
          <p class="lead fw-normal">Nosso site é projetado para ser intuitivo e fácil de navegar, para que você possa encontrar facilmente o que está procurando.</p>
          <p class="lead fw-normal">Além disso, oferecemos várias opções de pagamento seguras para garantir que suas informações pessoais e financeiras estejam protegidas.</p>
        </div>
          <div class="product-device shadow-sm d-none d-md-block"></div>
          <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
      </div>

      <div class="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary">
        <div class="col-md-5 p-lg-5 mx-auto my-5">
          <a class="btn btn-outline-secondary" href="#">Voltar ao topo</a>
        </div>
      </div>
      
    </main>
  );
};

export default About;


/* <div className="about-image">
{/* <img src={logo} alt="Empresa de streaming" />  */
// </div> */}