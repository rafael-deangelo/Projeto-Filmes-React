import "./pricing.css";

export default function Pricing() {
  return (
    <div className="container">
          <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">Conheça nossos planos</h1>
            <p class="lead">Oferecemos planos de assinatura de filmes para atender a todas as suas necessidades e interesses.</p>
            <p class="lead">Escolha o plano que melhor se adapta a você e tenha acesso a uma biblioteca de filmes incríveis, com títulos de diferentes gêneros e épocas.</p>
          </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4 box-shadow text-center">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Plano Básico</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">R$ 25,90 <small className="text-muted">/ mês</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Boa qualidade de video HD(720p)</li>
                <li>Assista em celulares, tablets, computadores ou TVs</li>
                <li>Assista em até 1 aparelho</li>
                <li>Suporte 24h</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">Assinar</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 box-shadow text-center">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Padrão</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">R$ 39,90 <small className="text-muted">/ mês</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Ótima qualidade de video em Full HD(1080p)</li>
                <li>Assista em celulares, tablets, computadores ou TVs</li>
                <li>Assista em até 2 aparelhos</li>
                <li>Suporte 24h</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">Assinar</button>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card mb-4 box-shadow text-center">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">Premium</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">R$ 55,90 <small className="text-muted">/ mês</small></h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>Qualidade de video Ultra HD(4K) e HDR</li>
                <li>Assista em celulares, tablets, computadores ou TVs</li>
                <li>Assista em até 4 aparelhos</li>
                <li>Suporte 24h</li>
              </ul>
              <button type="button" className="btn btn-lg btn-block btn-primary">Assinar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
