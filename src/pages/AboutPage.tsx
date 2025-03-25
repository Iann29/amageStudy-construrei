import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center">Sobre a Construrei Materiais</h1>
      
      {/* História da Empresa */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Nossa História</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="mb-4">
            Fundada em 1995 na cidade de São Paulo, a Construrei Materiais nasceu do sonho de dois irmãos que desejavam transformar a experiência de compra de materiais de construção, tornando-a mais acessível e menos complicada para todos.
          </p>
          <p className="mb-4">
            Começamos como uma pequena loja de bairro, atendendo apenas a comunidade local. Com o compromisso de oferecer produtos de qualidade, preços justos e um atendimento personalizado, rapidamente ganhamos a confiança dos nossos clientes.
          </p>
          <p>
            Hoje, mais de 25 anos depois, expandimos nossa operação para diversas cidades do Brasil e também para o ambiente digital, mantendo nossa essência de valorizar cada cliente e cada projeto, seja ele grande ou pequeno.
          </p>
        </div>
      </section>
      
      {/* Missão, Visão e Valores */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Missão, Visão e Valores</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium mb-3 text-blue-700">Missão</h3>
            <p>
              Fornecer materiais de construção de qualidade, com preço justo e excelente atendimento, contribuindo para a realização dos sonhos dos nossos clientes.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium mb-3 text-blue-700">Visão</h3>
            <p>
              Ser referência nacional no mercado de materiais de construção, reconhecida pela qualidade, inovação e compromisso com a satisfação do cliente.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-medium mb-3 text-blue-700">Valores</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Integridade e ética em todas as relações</li>
              <li>Responsabilidade socioambiental</li>
              <li>Valorização e respeito às pessoas</li>
              <li>Compromisso com a qualidade</li>
              <li>Inovação contínua</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Nossa Equipe */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Nossa Equipe</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="mb-6">
            Nossa equipe é formada por profissionais experientes e apaixonados pelo que fazem. Acreditamos que o nosso maior diferencial está nas pessoas que trabalham conosco.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: 'João Silva', role: 'Fundador e CEO', image: 'https://placehold.co/200x200/e5e7eb/a3a3a3?text=JS' },
              { name: 'Maria Oliveira', role: 'Diretora Comercial', image: 'https://placehold.co/200x200/e5e7eb/a3a3a3?text=MO' },
              { name: 'Pedro Santos', role: 'Gerente de Operações', image: 'https://placehold.co/200x200/e5e7eb/a3a3a3?text=PS' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-32 h-32 mx-auto rounded-full mb-4"
                />
                <h3 className="text-lg font-medium">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Compromisso com Sustentabilidade */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Compromisso com a Sustentabilidade</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="mb-4">
            Acreditamos que é nossa responsabilidade contribuir para um futuro mais sustentável. Por isso, temos implementado diversas iniciativas para reduzir nosso impacto ambiental:
          </p>
          
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Comercialização de produtos ecoeficientes e de baixo impacto ambiental</li>
            <li>Gestão de resíduos e programa de reciclagem em todas as nossas lojas</li>
            <li>Uso de energia renovável em nossas instalações</li>
            <li>Redução do consumo de água através de sistemas de captação e reúso</li>
            <li>Apoio a projetos socioambientais nas comunidades onde atuamos</li>
          </ul>
          
          <p>
            Continuamos buscando novas formas de melhorar nossas práticas e minimizar nosso impacto no planeta, porque acreditamos que construir um futuro melhor começa com ações responsáveis no presente.
          </p>
        </div>
      </section>
      
      {/* Parceiros */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Nossos Parceiros</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="mb-6">
            Trabalhamos com as melhores marcas e fornecedores do mercado para garantir produtos de qualidade aos nossos clientes.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className="flex items-center justify-center p-4 bg-gray-100 rounded-lg">
                <div className="text-gray-400 font-medium">Parceiro {index + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
