window.STUDIOIA360_PROJECTS = [
  {
    "id": "360-recepcao",
    "title": "360 Recepção",
    "vertical": "Saúde",
    "tagline": "Recepção Inteligente com Lembretes e Encaixes Automáticos",
    "description": "Sistema de automação da recepção integrado com WhatsApp oficial, disparando lembretes automáticos de consultas, confirmação de presença e lista de espera dinâmica para preenchimento ágil de desistências.",
    "target_audience": "Consultórios odontológicos, fisioterapeutas, psicólogos e clínicas de pequeno porte.",
    "problem": "A recepção gasta horas confirmando consultas manualmente por telefone ou mensagens individuais, enquanto faltas não avisadas e cancelamentos de última hora deixam horários ociosos e reduzem o faturamento.",
    "solution": "Integração da agenda médica com WhatsApp por provedor homologado, disparos programados de confirmação de presença, cancelamento simplificado e acionamento inteligente de lista de espera.",
    "initial_scope": [
      "Conexão segura com sistemas de prontuário e agenda via API",
      "Disparo programado de lembretes em D-2 e D-1 via WhatsApp oficial",
      "Mecanismo de confirmação com 1 toque (Sim / Não / Reagendar)",
      "Fila de espera inteligente que oferece vagas canceladas aos pacientes prioritários",
      "Painel em tempo real para a recepcionista acompanhar o status das presenças do dia"
    ],
    "channels_integrations": [
      "WhatsApp Business Cloud API (provedor homologado Meta)",
      "Google Calendar / iCal / Sistemas de prontuário clínico (via Webhooks)"
    ],
    "validation_points": [
      "Homologação do número comercial no WhatsApp Business API",
      "Políticas de agendamento e regras de antecedência mínima para cancelamento",
      "Termos de consentimento do paciente para comunicação de saúde"
    ],
    "simulated_gains": "Redução estimada de 30% nas faltas e economia média de 8 horas semanais da equipe da recepção (metas ilustrativas a validar após implantação).",
    "concerns_dependencies": "Exigência de consentimento prévio do paciente (LGPD), estrito sigilo de dados médicos de saúde e conformidade irrestrita com a política comercial do WhatsApp.",
    "slug": "360-recepcao",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/1",
    "issue_number": 1,
    "issue_status": "created"
  },
  {
    "id": "360-oficinas",
    "title": "360 Oficinas",
    "vertical": "Serviços Automotivos",
    "tagline": "Orçamentos Ágeis e Pós-Venda Automotivo Estruturado",
    "description": "Solução de gestão e automação para oficinas mecânicas com entrada padronizada de serviços, cálculo e envio rápido de orçamentos e réguas de pós-venda para revisões periódicas.",
    "target_audience": "Oficinas mecânicas, autoelétricas, centros automotivos e pequenos prestadores de serviços automotivos.",
    "problem": "Pedidos de orçamento chegam pulverizados por telefone e WhatsApp sem padrão, gerando demora na resposta, perda de vendas e total falta de contato pós-serviço para manutenções preventivas.",
    "solution": "Formulário digital de entrada de veículos, gerador padronizado de orçamentos por mão de obra e peças, acompanhamento visual do status do conserto e lembretes automáticos de revisão baseados na quilometragem.",
    "initial_scope": [
      "Check-in do veículo com registro de fotos de avarias prévias e queixas do cliente",
      "Tabela de serviços e peças frequentes para montagem ágil de orçamentos em minutos",
      "Envio de proposta comercial interativa com aprovação digital pelo cliente",
      "Notificações de status da manutenção e aviso de conclusão com chave Pix para retirada",
      "Régua de pós-venda com lembretes automáticos de troca de óleo, freios e alinhamento"
    ],
    "channels_integrations": [
      "WhatsApp Business API",
      "Tabelas de peças e ERPs de oficinas parceiros"
    ],
    "validation_points": [
      "Integração com precificação de distribuidores de peças locais",
      "Definição de intervalos médios de revisão por modelo/ano de veículo"
    ],
    "simulated_gains": "Redução estimada de 50% no tempo administrativo gasto por orçamento e aumento substancial na taxa de retorno de clientes (metas ilustrativas a validar).",
    "concerns_dependencies": "Validação de orçamentos por mecânico responsável antes do envio; consentimento formal do cliente para mensagens periódicas de pós-venda.",
    "slug": "360-oficinas",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/2",
    "issue_number": 2,
    "issue_status": "created"
  },
  {
    "id": "360-ecommerce-produtos-loja-virtual",
    "title": "360 E-commerce _ Produtos para Loja Virtual",
    "vertical": "Varejo e E-commerce",
    "tagline": "Enriquecimento e Cadastro Automatizado de Produtos com IA",
    "description": "Pipeline automatizado que recebe dados brutos ou fotos de produtos, gera títulos persuasivos, descrições ricas otimizadas para SEO, valida atributos técnicos obrigatórios e prepara publicações em massa para e-commerces.",
    "target_audience": "Lojas virtuais de moda, artesanato, calçados, cosméticos, acessórios e pequenos e-commerces.",
    "problem": "Cadastrar dezenas de produtos manualmente consome tempo excessivo da equipe, resulta em textos rasos sem apelo comercial ou SEO e frequentemente omite dimensões e especificações cruciais.",
    "solution": "Fluxo inteligente que lê dados básicos da mercadoria ou etiquetas, utiliza IA generativa para redigir descrições estruturadas (benefícios, características, tabela de medidas) e valida consistência antes do upload.",
    "initial_scope": [
      "Importação via formulário, planilha CSV ou fotos de produtos",
      "Geração com IA de copywriting persuasivo e meta tags para SEO",
      "Validação automática de campos obrigatórios (SKU, peso, dimensões, categoria)",
      "Interface de conferência visual rápida (aprovar / editar / regenerar)",
      "Exportação para formatos de plataformas líderes (Shopify, Nuvemshop, WooCommerce)"
    ],
    "channels_integrations": [
      "APIs de plataformas de e-commerce (Shopify, Nuvemshop, WooCommerce)",
      "Modelos multimodais de visão e linguagem para extração de dados"
    ],
    "validation_points": [
      "Acurácia dos atributos técnicos extraídos sem alucinações",
      "Taxonomias específicas de cada plataforma de venda"
    ],
    "simulated_gains": "Redução de até 60% no tempo de preparação de novos cadastros de catálogo e padronização impecável das páginas de produto (metas ilustrativas).",
    "concerns_dependencies": "Direitos autorais sobre imagens de fornecedores e necessidade de conferência humana final de dados de garantia e tabelas nutricionais ou de medidas.",
    "slug": "360-ecommerce-produtos-loja-virtual",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/3",
    "issue_number": 3,
    "issue_status": "created"
  },
  {
    "id": "360-lead-imobiliario",
    "title": "360 Lead Imobiliário",
    "vertical": "Imobiliário",
    "tagline": "Centralização, Qualificação e Distribuição Ágil de Leads",
    "description": "Hub centralizador de leads imobiliários provenientes de portais, anúncios e redes sociais, com triagem inteligente de perfil de compra, capacidade de investimento e distribuição instantânea para corretores de plantão.",
    "target_audience": "Corretores autônomos, imobiliárias de bairro e pequenas incorporadoras.",
    "problem": "Leads chegam espalhados por portais (Zap, VivaReal), campanhas de Meta Ads e WhatsApp sem triagem imediata; o tempo de espera no atendimento faz o comprador buscar outra imobiliária e o negócio é perdido.",
    "solution": "Centralização de leads em painel único, classificação instantânea por ticket médio, bairro desejado e urgência de mudança, com disparo de primeiro contato em segundos e alerta no celular do corretor de plantão.",
    "initial_scope": [
      "Webhooks integrando formulários do Facebook Ads, Google Ads e portais imobiliários",
      "Chatbot de qualificação inicial rápida para confirmar interesse e faixa de preço",
      "Regra de distribuição em rodízio inteligente para a equipe de corretores",
      "Lembretes de acompanhamento obrigatório para o corretor registrar a evolução",
      "Relatório de conversão por canal de origem do lead"
    ],
    "channels_integrations": [
      "Meta Lead Ads, Google Ads Webhooks",
      "WhatsApp Business API e portais de imóveis homologados"
    ],
    "validation_points": [
      "Tempo de resposta do corretor após a distribuição",
      "Integração com CRMs existentes da imobiliária"
    ],
    "simulated_gains": "Redução estimada de 70% no tempo de triagem dos contatos e queda drástica no número de interessados sem retorno (metas ilustrativas).",
    "concerns_dependencies": "Tratamento de dados pessoais de potenciais compradores em estrita conformidade com a LGPD; consentimento explícito no formulário de captação.",
    "slug": "360-lead-imobiliario",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/4",
    "issue_number": 4,
    "issue_status": "created"
  },
  {
    "id": "360-gestao-encomendas-restaurantes",
    "title": "360 Gestão de Encomendas para Restaurantes",
    "vertical": "Alimentação",
    "tagline": "Controle Inteligente de Pedidos Antecipados e Produção Gastronômica",
    "description": "Sistema sob medida para negócios culinários artesanais receberem encomendas com regras de antecedência mínima, personalizações, sinal de pagamento e quadro Kanban para a cozinha não errar prazos.",
    "target_audience": "Restaurantes pequenos, confeitarias, buffets, marmitarias e pequenos negócios de catering.",
    "problem": "Anotar encomendas em conversas de WhatsApp gera esquecimentos graves de horários de retirada, erros em sabores personalizados ou falta de insumos especiais na véspera do preparo.",
    "solution": "Página web de pedidos com calendário de capacidade diária da cozinha, opções detalhadas de montagem do produto, confirmação automática com comprovante e painel de produção por ordem cronológica de entrega.",
    "initial_scope": [
      "Catálogo online parametrizado com prazos mínimos de preparo por item",
      "Controle de teto máximo de encomendas por data e faixa de horário",
      "Painel de produção (KDS/Kanban) para a equipe da cozinha",
      "Geração de etiqueta de despacho com dados do cliente e detalhes do pedido",
      "Notificação automática para o cliente sobre início do preparo e liberação para retirada/entrega"
    ],
    "channels_integrations": [
      "WhatsApp Business API para avisos de status",
      "Gateways de pagamento (Pix instantâneo com conciliação automática)"
    ],
    "validation_points": [
      "Limites de capacidade produtiva da cozinha em dias festivos",
      "Fluxo de cancelamento e política de retenção de sinal financeiro"
    ],
    "simulated_gains": "Redução de 50% no tempo de consolidação das encomendas e corte drástico de retrabalho na linha de montagem (metas ilustrativas).",
    "concerns_dependencies": "Atenção crítica a restrições alimentares e alergias registradas pelo cliente; segurança alimentar e conformidade sanitária.",
    "slug": "360-gestao-encomendas-restaurantes",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/5",
    "issue_number": 5,
    "issue_status": "created"
  },
  {
    "id": "calculadora-inteligente-obras-materiais",
    "title": "Calculadora Inteligente de Obras e Materiais",
    "vertical": "Construção Civil",
    "tagline": "Orçamentação Paramétrica Precisa para Empreiteiras e Reformas",
    "description": "Calculadora web parametrizada para cálculo técnico de quantitativos de materiais, diárias de mão de obra, margem de contingência e perdas, gerando propostas comerciais executivas em PDF.",
    "target_audience": "MEIs da construção civil, instaladores elétricos/hidráulicos, marcenarias e pequenas empreiteiras.",
    "problem": "Orçamentos montados em anotações soltas ou planilhas confusas, esquecendo insumos secundários (argamassa, fixadores), errando diárias e causando prejuízos ou perda de contratos por demora.",
    "solution": "Aplicação web orientada a passos onde o profissional informa metragens do cômodo e tipo de acabamento, e o sistema calcula automaticamente a lista de materiais, insumos de fixação, tempo de execução e preço de venda com margem garantida.",
    "initial_scope": [
      "Formulário intuitivo de medidas lineares e áreas quadradas por ambiente",
      "Base de coeficientes de perda de materiais (ex: 10% a 15% para cerâmicas e tintas)",
      "Cálculo de homem-dia e composição de custos indiretos",
      "Simulador de margem de lucro líquida com desconto comercial",
      "Geração de proposta formal em PDF para envio com 1 clique ao cliente"
    ],
    "channels_integrations": [
      "Exportação em PDF executivo para WhatsApp e e-mail",
      "Tabelas de referência regionais de custos de materiais"
    ],
    "validation_points": [
      "Ajuste fino dos coeficientes de consumo e perdas para cada técnica construtiva",
      "Atualização periódica dos preços médios de insumos básicos"
    ],
    "simulated_gains": "Redução de até 65% no tempo de elaboração de orçamentos técnicos e segurança na manutenção das margens de lucro planejadas (metas ilustrativas).",
    "concerns_dependencies": "Validação expressa de que o cálculo é uma estimativa técnica que requer inspeção in loco do responsável técnico antes do fechamento do contrato.",
    "slug": "calculadora-inteligente-obras-materiais",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/6",
    "issue_number": 6,
    "issue_status": "created"
  },
  {
    "id": "agenda-fidelizacao-reativacao-clientes",
    "title": "Agenda, Fidelização e Reativação de Clientes",
    "vertical": "Beleza e Bem-Estar",
    "tagline": "Gestão de Ciclo de Retorno e Fidelização de Cuidados Pessoais",
    "description": "Plataforma de agenda inteligente aliada a cadastro de preferências e histórico de visitas, com régua de automação de reativação para clientes ausentes no tempo médio do serviço.",
    "target_audience": "Salões de beleza, barbearias, manicures, podólogos e estúdios de estética facial/corporal.",
    "problem": "Clientes realizam o serviço e deixam de retornar por puro esquecimento; profissionais não monitoram o tempo decorrido desde o último corte ou manicure e sofrem com dias de agenda vazia.",
    "solution": "Sistema que cadastra cada serviço realizado e aciona automaticamente lembretes amigáveis no WhatsApp quando se aproxima o período ideal de manutenção (ex: 20 dias para corte, 15 dias para unhas), preenchendo horários vagos.",
    "initial_scope": [
      "Agenda digital com histórico completo de procedimentos por cliente",
      "Cálculo do intervalo médio de retorno por tipo de atendimento",
      "Disparo automático de mensagem de reativação personalizada com link direto para agendamento",
      "Controle de campanhas de aniversário e benefícios de fidelidade",
      "Painel de clientes inativos com taxa de recuperação de público"
    ],
    "channels_integrations": [
      "WhatsApp Business API com disparos transacionais",
      "Mecanismos de reserva online integrados à agenda"
    ],
    "validation_points": [
      "Frequência de disparo para não gerar sensação de spam",
      "Opt-in formal do cliente para recebimento de lembretes periódicos"
    ],
    "simulated_gains": "Aumento de até 15% nos retornos recorrentes e recuperação consistente de horários que ficariam desocupados (metas ilustrativas a validar).",
    "concerns_dependencies": "Respeito rigoroso às preferências de comunicação do cliente e diretrizes da LGPD para dados cadastrais.",
    "slug": "agenda-fidelizacao-reativacao-clientes",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/7",
    "issue_number": 7,
    "issue_status": "created"
  },
  {
    "id": "360-matriculas-escolas-cursos",
    "title": "360 Matrículas - Escolas e Cursos",
    "vertical": "Educação",
    "tagline": "Captação, Qualificação e Acompanhamento de Novas Matrículas",
    "description": "Funil integrado para cursos livres e escolas, reunindo página de captação, respostas instantâneas a interessados, agendamento de aulas experimentais e régua de acompanhamento até a assinatura do contrato.",
    "target_audience": "Escolas de idiomas, cursos livres de gastronomia/música, professores particulares e centros de formação profissional.",
    "problem": "Interessados pedem informações sobre mensalidades e horários nas redes sociais, mas as respostas demoram; sem uma sequência estruturada de contato, mais da metade dos potenciais alunos desiste antes de conhecer a escola.",
    "solution": "Landing page de alta conversão associada a assistente de atendimento imediato que tira dúvidas preliminares, convida para uma aula experimental e conduz o responsável até a ficha de pré-matrícula digital.",
    "initial_scope": [
      "Página de apresentação do curso com formulário de captação segmentado",
      "Atendente virtual para esclarecer dúvidas sobre metodologia, carga horária e valores",
      "Agenda integrada para marcação automática de aula experimental ou entrevista pedagógica",
      "Kanban comercial dos alunos em processo de admissão",
      "Envio do link de contrato digital e instruções de matrícula com acompanhamento de assinatura"
    ],
    "channels_integrations": [
      "WhatsApp Business API",
      "Plataformas de assinatura eletrônica e CRMs escolares"
    ],
    "validation_points": [
      "Integração com calendário de disponibilidade de turmas e salas",
      "Alinhamento dos argumentos pedagógicos do bot com a equipe pedagógica"
    ],
    "simulated_gains": "Redução de até 60% no tempo despendido em atendimento administrativo de novas inscrições e maior transparência no funil de captação (metas ilustrativas).",
    "concerns_dependencies": "Proteção reforçada de dados de menores de idade e conformidade com o Estatuto da Criança e do Adolescente (ECA) e LGPD.",
    "slug": "360-matriculas-escolas-cursos",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/8",
    "issue_number": 8,
    "issue_status": "created"
  },
  {
    "id": "360-gerador-propostas-viagem-personalizadas",
    "title": "360 Gerador de Propostas de Viagem Personalizadas",
    "vertical": "Turismo",
    "tagline": "Criação Visual e Estruturada de Roteiros e Cotações Turísticas",
    "description": "Ferramenta para agentes de viagens montarem propostas exclusivas em minutos a partir de preferências do cliente e blocos reutilizáveis de roteiro, gerando documentos visuais em PDF para fechamento rápido.",
    "target_audience": "Agentes de viagem independentes, pequenas agências de turismo e organizadores de expedições em grupo.",
    "problem": "Cada cliente exige uma cotação individualizada, e formatar o descritivo de hotéis, passeios e voos em editores comuns toma horas preciosas, tornando o atendimento lento e comercialmente vulnerável.",
    "solution": "Formulário de captação de perfil de viagem (estilo, orçamento, datas) conectado a uma biblioteca de blocos modulares de destinos, que gera propostas completas com fotos, itinerário diário, valores e condições de pagamento.",
    "initial_scope": [
      "Questionário interativo para o viajante registrar expectativas e restrições",
      "Banco de templates de destinos com descrições atrativas e dicas de passeios",
      "Calculadora paramétrica de custos terrestres, aéreos e margem da agência",
      "Geração de proposta interativa em PDF com layout premium e links para fotos dos hotéis",
      "Mecanismo de revisão rápida para o agente ajustar valores antes do envio"
    ],
    "channels_integrations": [
      "WhatsApp e e-mail para envio instantâneo do PDF gerado",
      "Armazenamento em nuvem de fotos de destinos homologados"
    ],
    "validation_points": [
      "Validação manual obrigatória de tarifas aéreas e disponibilidade de quartos",
      "Personalização das condições gerais e políticas de cancelamento da agência"
    ],
    "simulated_gains": "Redução estimada de 50% no tempo de elaboração de propostas comerciais de viagem e apresentação muito mais atraente para o cliente (metas ilustrativas).",
    "concerns_dependencies": "Aviso explícito de validade temporal das cotações em função da flutuação cambial e de disponibilidade dos fornecedores turísticos.",
    "slug": "360-gerador-propostas-viagem-personalizadas",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/9",
    "issue_number": 9,
    "issue_status": "created"
  },
  {
    "id": "crm-clientes-rotina-pet",
    "title": "CRM de Clientes e Rotina Pet",
    "vertical": "Pets",
    "tagline": "Prontuário de Cuidados, Preferências e Agenda de Banho & Tosa",
    "description": "Sistema de relacionamento para pet shops e estúdios de estética animal, unindo ficha detalhada do pet (porte, temperamento, alergias), agenda de serviços e lembretes periódicos de banho e tosa.",
    "target_audience": "Pet shops de bairro, centros de banho e tosa, clínicas veterinárias básicas e pet sitters.",
    "problem": "Preferências do animal (tipo de corte, shampoo neutro, comportamento arisco) e histórico de vacinas ficam em cadernos ou papéis soltos, gerando falhas no atendimento e perda de clientes para concorrentes.",
    "solution": "Cadastro unificado com tutor e perfil completo do pet, histórico visual de fotos de cortes anteriores, agenda de banho/tosa com controle de transporte (leva e traz) e lembrete automático de reagendamento quinzenal.",
    "initial_scope": [
      "Ficha digital do pet com anotação de restrições de saúde, porte e produtos recomendados",
      "Controle de agendamento por profissional e capacidade de gaiolas/baias",
      "Módulo de gestão de rotas do serviço 'Leva e Traz' quando aplicável",
      "Lembretes amigáveis via WhatsApp para agendamento de rotina do banho",
      "Aviso fotográfico ao tutor quando o serviço estiver concluído e o pet pronto"
    ],
    "channels_integrations": [
      "WhatsApp Business API para avisos de conclusão e agendamento",
      "Página web simplificada de solicitação de horário pelo tutor"
    ],
    "validation_points": [
      "Capacidade física de secadores e banheiras por turno",
      "Formulário de responsabilidade assinado pelo tutor para animais idosos ou com condições prévias"
    ],
    "simulated_gains": "Redução estimada de 40% no tempo de busca de dados cadastrais e elevação consistente na recorrência mensal de banhos e tosas (metas ilustrativas).",
    "concerns_dependencies": "Controle de acesso rigoroso a dados sensíveis de clientes e tutores e respeito absoluto às normas de bem-estar animal.",
    "slug": "crm-clientes-rotina-pet",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/10",
    "issue_number": 10,
    "issue_status": "created"
  },
  {
    "id": "360-mkt-central-relatorios-conteudo-ia",
    "title": "360 MKT. Central de Relatórios e Conteúdo com IA",
    "vertical": "Marketing e Serviços Profissionais",
    "tagline": "Consolidação de Métricas e Produção de Relatórios com Inteligência Artificial",
    "description": "Central inteligente que conecta dados de redes sociais e plataformas de anúncios autorizadas, elabora rascunhos de análises de desempenho com IA e agiliza calendários editoriais para aprovação humana.",
    "target_audience": "Profissionais de social media, pequenas agências de marketing digital e consultores independentes de comunicação.",
    "problem": "Compilar manualmente métricas de alcance, curtidas, seguidores e cliques espalhados em vários painéis para montar relatórios mensais em PowerPoint consome dias de trabalho operacional.",
    "solution": "Conexão com fontes de dados autorizadas, consolidação automática de indicadores-chave, redação assistida por IA de diagnósticos e recomendações preliminares e montagem de apresentações prontas para revisão.",
    "initial_scope": [
      "Importação de métricas oficiais de redes e campanhas (Meta Graph API, Google)",
      "Dashboard consolidado de evolução mensal (engajamento, seguidores, cliques)",
      "Geração de sumário executivo com insights gerados por IA",
      "Área de calendário editorial integrada para planejamento das próximas postagens",
      "Exportação em PDF com a identidade visual da agência ou consultor"
    ],
    "channels_integrations": [
      "APIs oficiais de redes sociais e relatórios em PDF para clientes",
      "Modelos de IA para síntese textual de relatórios analíticos"
    ],
    "validation_points": [
      "Limites de taxas de chamadas das APIs de redes sociais",
      "Conferência humana obrigatória antes do envio de relatórios aos clientes finais"
    ],
    "simulated_gains": "Redução de até 60% no tempo de elaboração de relatórios mensais e maior previsibilidade nas entregas estratégicas (metas ilustrativas).",
    "concerns_dependencies": "Uso exclusivo de credenciais e tokens autorizados; termos de privacidade das plataformas de redes sociais e estrita confidencialidade dos dados dos clientes.",
    "slug": "360-mkt-central-relatorios-conteudo-ia",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/11",
    "issue_number": 11,
    "issue_status": "created"
  },
  {
    "id": "360-ia-orquestrador-inteligente",
    "title": "360 IA — Orquestrador Inteligente",
    "vertical": "Inteligência Artificial & Automação",
    "tagline": "Roteamento Inteligente de LLMs com Otimização de Custo e Contingência",
    "description": "Camada de orquestração inteligente que seleciona o modelo de linguagem mais econômico e eficiente para cada prompt, monitora limites de consumo orçamentário e executa failover automático em caso de indisponibilidade.",
    "target_audience": "MEIs, agências digitais, consultorias de software e pequenas empresas com fluxos diários de IA.",
    "problem": "Utilização generalizada de modelos caros de última geração para tarefas simples de classificação ou extração, provocando faturas desnecessariamente altas e interrupções quando uma API fica fora do ar.",
    "solution": "Gateway inteligente que analisa o tamanho e a complexidade do prompt, consulta limites de orçamento do cliente, direciona para o modelo ideal (mais barato e rápido para tarefas simples; mais potente para raciocínio complexo) e possui rotas alternativas.",
    "initial_scope": [
      "Classificador de complexidade do prompt de entrada (tamanho, necessidade de raciocínio)",
      "Roteador multi-provedor (suporte a modelos ágeis e modelos de ponta)",
      "Mecanismo automático de contingência (fallback) em caso de erro 5xx ou timeout",
      "Teto de gastos por usuário/projeto com travas de segurança orçamentária",
      "Painel de telemetria exibindo tokens consumidos, custos por tarefa e latência"
    ],
    "channels_integrations": [
      "APIs de provedores de IA (OpenAI, Anthropic, Google Gemini, modelos open-weight)",
      "Webhooks de alertas de orçamento no Slack ou Discord"
    ],
    "validation_points": [
      "Benchmarking de acurácia de modelos compactos antes de rotear tarefas críticas",
      "Tempos de latência do gateway de roteamento"
    ],
    "simulated_gains": "Redução potencial de 25% a 50% no custo por tarefa em operações com alta proporção de demandas simples, além de maior estabilidade sistêmica (metas ilustrativas).",
    "concerns_dependencies": "Proteção segura de chaves de API em cofre criptografado; não envio de dados altamente sensíveis sem acordo de processamento de dados (DPA) com os provedores.",
    "slug": "360-ia-orquestrador-inteligente",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/12",
    "issue_number": 12,
    "issue_status": "created"
  },
  {
    "id": "360-llm-rag-conhecimento-empresarial-privado",
    "title": "360 LLM e RAG — Conhecimento Empresarial Privado",
    "vertical": "Gestão do Conhecimento & IA",
    "tagline": "Busca Semântica e Respostas Confiáveis Baseadas em Documentos Internos",
    "description": "Repositório privado com arquitetura RAG (Retrieval-Augmented Generation) para equipes pesquisarem contratos, políticas e metodologias da empresa com citações precisas das fontes autorizadas.",
    "target_audience": "Consultorias, escritórios de engenharia, departamentos jurídicos, redes de franquias e empresas com vasto acervo documental técnico.",
    "problem": "Colaboradores perdem horas localizando cláusulas em contratos antigos ou trechos em manuais de dezenas de páginas, recorrendo a versões desatualizadas ou sobrecarregando especialistas seniores com perguntas repetitivas.",
    "solution": "Indexação vetorial de arquivos autorizados da empresa com interface de perguntas e respostas que gera sínteses exatas, citando explicitamente a página e o arquivo de onde a informação foi extraída.",
    "initial_scope": [
      "Pipeline de ingestão e segmentação inteligente (chunking) de PDFs, DOCX e planilhas",
      "Banco de vetores com controle de acesso por departamento (RH, Jurídico, Engenharia)",
      "Chat corporativo com recuperação semântica e mecanismo de verificação de fontes",
      "Exibição lateral do trecho original do documento para conferência humana imediata",
      "Painel de auditoria com histórico das perguntas formuladas e avaliações de acurácia"
    ],
    "channels_integrations": [
      "Bancos de dados vetoriais gerenciados (ex: Pinecone, Qdrant, Chroma)",
      "Conectores de armazenamento em nuvem (Google Drive, OneDrive)"
    ],
    "validation_points": [
      "Qualidade da segmentação documental para não perder contexto entre tabelas e textos",
      "Calibragem do limiar de similaridade semântica para evitar alucinações fora de contexto"
    ],
    "simulated_gains": "Redução estimada de 40% a 70% no tempo gasto em pesquisas documentais repetitivas e padronização rigorosa das respostas institucionais (metas ilustrativas).",
    "concerns_dependencies": "RAG não garante sigilo absoluto por si só; indispensável configurar criptografia, políticas de retenção e provedores que garantam que os dados não serão utilizados para treinar modelos públicos.",
    "slug": "360-llm-rag-conhecimento-empresarial-privado",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/13",
    "issue_number": 13,
    "issue_status": "created"
  },
  {
    "id": "360-atende-atendimento-omnichannel-ia",
    "title": "360 Atende — Atendimento Omnichannel com IA",
    "vertical": "Atendimento & IA Generativa",
    "tagline": "Atendimento Unificado 24/7 com IA Generativa e Transbordo Humano",
    "description": "Assistente virtual inteligente conectado simultaneamente a WhatsApp, site, e-mail e redes sociais, respondendo dúvidas comuns com a linguagem da marca e transferindo atendimentos complexos para atendentes humanos.",
    "target_audience": "Lojas, prestadores de serviços, escolas, clínicas e empresas com alto fluxo de atendimento ao consumidor.",
    "problem": "Perguntas chegam ao mesmo tempo em diferentes canais, sobrecarregando a equipe com dúvidas idênticas, gerando filas de espera prolongadas e inconsistência nas informações passadas aos clientes.",
    "solution": "Caixa de entrada centralizada com agente de IA treinado para responder dúvidas frequentes, classificar intenções, registrar o contexto do cliente e transferir o chamado com histórico completo para a equipe humana quando necessário.",
    "initial_scope": [
      "Unificação de canais (WhatsApp, Instagram Direct, Webchat, E-mail) em fila única",
      "Agente de IA treinado na base de produtos, prazos e políticas da empresa",
      "Mecanismo de triagem automática com detecção de urgência e sentimento",
      "Transbordo transparente para o painel de atendimento humano com resumo do diálogo",
      "Métricas de tempo médio de atendimento (TMA), resolução em primeiro contato e satisfação"
    ],
    "channels_integrations": [
      "WhatsApp Business API, Meta Graph API",
      "CRMs de vendas e helpdesks existentes"
    ],
    "validation_points": [
      "Ajuste da persona e tom de voz da marca nas respostas automáticas",
      "Critérios objetivos para acionamento imediato do transbordo para humanos"
    ],
    "simulated_gains": "Redução estimada de 30% a 60% no tempo de tratamento de solicitações simples e ampliação imediata da disponibilidade de resposta inicial (metas ilustrativas).",
    "concerns_dependencies": "Aviso explícito ao usuário de que a interação inicial é conduzida por assistente virtual de inteligência artificial; conformidade estrita com as políticas de mensagens das plataformas.",
    "slug": "360-atende-atendimento-omnichannel-ia",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/14",
    "issue_number": 14,
    "issue_status": "created"
  },
  {
    "id": "360-crm-vendas-inteligencia",
    "title": "360 CRM — Vendas com Inteligência",
    "vertical": "Gestão Comercial & CRM",
    "tagline": "Gestão de Funil de Vendas com Recomendações e Alertas com IA",
    "description": "Sistema de gestão comercial com etapas de negociação customizáveis, histórico unificado de interações, alertas para leads estagnados e sugestões com IA para acelerar fechamentos.",
    "target_audience": "Representantes comerciais, distribuidoras, corretoras de seguros, consultorias e empresas de vendas B2B.",
    "problem": "Vendedores não registram reuniões ou conversas, esquecem de retornar propostas enviadas e a diretoria comercial não tem visibilidade sobre motivos de perdas ou previsibilidade real de faturamento.",
    "solution": "CRM intuitivo em formato Kanban com registro facilitado de contatos, disparos de lembretes antes que o prazo expire e análises de IA que identificam padrões de sucesso em propostas ganhas.",
    "initial_scope": [
      "Visualização em pipeline customizável por linha de negócio",
      "Timeline unificada de cada negociação com notas, e-mails e histórico de conversas",
      "Alertas automáticos para propostas sem contato há mais de X dias",
      "Assistente de IA que sugere argumentos de fechamento com base no histórico do cliente",
      "Dashboard gerencial com taxa de conversão por etapa, ticket médio e projeção de receita"
    ],
    "channels_integrations": [
      "Integração com WhatsApp e e-mail corporativo",
      "Exportação de dados para ERPs contábeis e de faturamento"
    ],
    "validation_points": [
      "Adoção e facilidade de uso pela equipe comercial no celular",
      "Definição de SLAs e tempos máximos de permanência por etapa do funil"
    ],
    "simulated_gains": "Redução de 30% a 50% nas oportunidades sem acompanhamento e visibilidade cristalina sobre as taxas de conversão (metas ilustrativas).",
    "concerns_dependencies": "Segurança de dados estratégicos de preços e margens comerciais; conformidade com a LGPD em dados cadastrais de compradores corporativos.",
    "slug": "360-crm-vendas-inteligencia",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/15",
    "issue_number": 15,
    "issue_status": "created"
  },
  {
    "id": "360-no-churn-retencao-sucesso-cliente",
    "title": "360 No Churn — Retenção e Sucesso do Cliente",
    "vertical": "Customer Success & Retenção",
    "tagline": "Monitoramento Preditivo de Sinais de Churn e Planos de Retenção",
    "description": "Plataforma de inteligência de retenção que consolida reclamações, histórico de uso e engajamento para disparar alertas preventivos à equipe antes que o cliente decida cancelar.",
    "target_audience": "Empresas SaaS, academias de ginástica, clubes de assinatura e prestadores de serviços recorrentes.",
    "problem": "Descobrir que um cliente cancelou apenas quando o pedido formal chega, sem chance prévia de entender atritos ocorridos semanas antes em atendimentos insatisfatórios ou queda de uso.",
    "solution": "Mapeamento contínuo de indicadores de risco (queda na frequência de acessos, chamados de suporte abertos sem solução rápida, atrasos de pagamento), gerando alertas e playbooks de recuperação direcionados.",
    "initial_scope": [
      "Ingestão de métricas de atividade do cliente (login, frequência de visitas ou uso do produto)",
      "Score dinâmico de risco de cancelamento (Health Score) calibrado por perfil",
      "Fila de alerta preventivo para gerentes de contas ou Customer Success",
      "Playbooks sugeridos de intervenção e melhoria da experiência",
      "Painel de motivos de rescisão para retroalimentação do produto/serviço"
    ],
    "channels_integrations": [
      "Sistemas de helpdesk, plataformas de faturamento recorrente e ERPs",
      "Canais de comunicação para disparo de pesquisas de satisfação (NPS/CSAT)"
    ],
    "validation_points": [
      "Calibragem do peso de cada indicador no cálculo do Health Score",
      "Eficácia das abordagens de reversão propostas nos playbooks"
    ],
    "simulated_gains": "Redução potencial de 10% a 20% nos cancelamentos evitáveis mediante intervenções no momento correto (metas ilustrativas a validar).",
    "concerns_dependencies": "Sensibilidade na abordagem do cliente para evitar reações negativas; proteção de dados de faturamento e históricos de atendimento.",
    "slug": "360-no-churn-retencao-sucesso-cliente",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/16",
    "issue_number": 16,
    "issue_status": "created"
  },
  {
    "id": "360-delivery-pedidos-relacionamento-direto",
    "title": "360 Delivery — Pedidos e Relacionamento Direto",
    "vertical": "Alimentação & Delivery Direto",
    "tagline": "Canal Próprio de Vendas com Fidelização e Recompra sem Taxas Abusivas",
    "description": "Solução de canal direto de pedidos para negócios gastronômicos, com cardápio online próprio, base de clientes cadastrada com opt-in e campanhas automáticas para incentivar pedidos fora dos intermediários.",
    "target_audience": "Restaurantes, pizzarias, hamburguerias, marmitarias e pequenos negócios de alimentação fora do lar.",
    "problem": "Dependência extrema de marketplaces de entrega que retêm comissões de 25% a 30% por pedido e não compartilham os dados do cliente para ações de fidelização da marca.",
    "solution": "Plataforma própria de pedidos sem comissão por venda, com impressão direta de pedidos, cadastro de clientes autorizados e programas de incentivo com cupons progressivos para compras no canal direto.",
    "initial_scope": [
      "Página web responsiva e rápida de pedidos, acessível via link na bio e QR Code",
      "Recepção de pedidos em painel único com divisão por categorias e adicionais",
      "Captura de dados de contato do cliente com consentimento para promoções",
      "Campanhas automáticas de retorno disparadas no WhatsApp para clientes inativos há 15 dias",
      "Relatórios de lucratividade comparada: canal próprio versus marketplaces"
    ],
    "channels_integrations": [
      "WhatsApp Business API para disparos de cupons e confirmação de entrega",
      "Gateways de pagamento online e máquinas de cartão na entrega"
    ],
    "validation_points": [
      "Operação de entrega e motoboys próprios ou parceiros locais",
      "Atratividade da oferta para estimular o cliente a comprar no canal próprio"
    ],
    "simulated_gains": "Aumento significativo da margem líquida por pedido direto e formação de uma base de clientes proprietária e fidelizada (metas ilustrativas).",
    "concerns_dependencies": "Respeito irrestrito às normas de plataformas de terceiros; proteção aos dados de entrega e endereço dos consumidores sob a LGPD.",
    "slug": "360-delivery-pedidos-relacionamento-direto",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/17",
    "issue_number": 17,
    "issue_status": "created"
  },
  {
    "id": "360-estetica-gestao-inteligente-procedimentos",
    "title": "360 Estética — Gestão Inteligente de Procedimentos",
    "vertical": "Estética e Cuidados Pessoais",
    "tagline": "Agendamento Avançado com Validação de Salas, Aparelhos e Profissionais",
    "description": "Sistema de marcação online com alocação simultânea de cabines, equipamentos específicos (lasers, ultrassons), tempo de recuperação de salas e confirmação profissional sem choque de horários.",
    "target_audience": "Clínicas de estética, profissionais de depilação a laser, estúdios de harmonização facial e pequenos centros de tratamentos estéticos.",
    "problem": "Agendamentos feitos em cadernos ou calendários genéricos reservam o profissional, mas geram conflito porque o aparelho de laser alugado ou a sala com maca especial já estão ocupados por outro atendimento.",
    "solution": "Motor de reserva inteligente que checa em tempo real a tríade necessária (profissional habilitado + cabine livre + aparelho específico), considerando tempos de desinfecção entre sessões e enviando lembretes aos clientes.",
    "initial_scope": [
      "Cadastro de procedimentos vinculando duração, cabine necessária e equipamento exigido",
      "Grade de agendamento online com verificação automática de conflito de recursos",
      "Gestão do calendário de equipamentos próprios ou locados por diária",
      "Ficha de anamnese e orientações pré-procedimento enviadas automaticamente",
      "Disparo de lembretes e confirmações automáticas com instruções prévias (ex: depilação prévia, protetor solar)"
    ],
    "channels_integrations": [
      "WhatsApp Business API para confirmações e instruções",
      "Gateways de pagamento para sinal de reserva de procedimentos longos"
    ],
    "validation_points": [
      "Intervalos de higienização e troca de insumos entre procedimentos",
      "Politica de cancelamento para procedimentos com equipamentos alugados"
    ],
    "simulated_gains": "Redução estimada de 30% a 50% no tempo administrativo de organização da agenda e eliminação de conflitos de aparelhos (metas ilustrativas).",
    "concerns_dependencies": "Sigilo médico/estético em fichas de anamnese e fotos de antes/depois; termos de consentimento informado para realização de procedimentos.",
    "slug": "360-estetica-gestao-inteligente-procedimentos",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/18",
    "issue_number": 18,
    "issue_status": "created"
  },
  {
    "id": "360-fisioterapia-agenda-clinica-integrada",
    "title": "360 Fisioterapia — Agenda Clínica Integrada",
    "vertical": "Saúde & Fisioterapia",
    "tagline": "Sincronização de Sessões Clínicas, Equipamentos e Planos de Tratamento",
    "description": "Agenda clínica especializada que coordena leitos, salas de cinesioterapia e aparelhos de reabilitação com a grade dos fisioterapeutas, acompanhando o pacote de sessões do paciente.",
    "target_audience": "Fisioterapeutas autônomos, clínicas de reabilitação física e consultórios ortopédicos multidisciplinares.",
    "problem": "Sessões de fisioterapia demandam aparelhos ou macas específicas com durações precisas; a falta de sincronização gera filas de espera desconfortáveis para pacientes lesionados e ociosidade de equipamentos caros.",
    "solution": "Agenda clínica parametrizada por tipo de sessão (RPG, Pilates Clínico, Eletroterapia, Reabilitação Motora), controlando a disponibilidade simultânea do terapeuta e dos recursos terapêuticos com acompanhamento da evolução.",
    "initial_scope": [
      "Configuração de recursos necessários por modalidade terapêutica",
      "Controle de pacotes de sessões contratadas versus realizadas",
      "Módulo de reagendamento assistido para evitar quebras no tratamento contínuo",
      "Envio automatizado de lembretes e exercícios complementares para casa",
      "Prontuário rápido de anotação de evolução clínica por atendimento"
    ],
    "channels_integrations": [
      "WhatsApp para envio de lembretes e guias de exercícios posturais",
      "Integração com sistemas de prontuário eletrônico em saúde"
    ],
    "validation_points": [
      "Flexibilidade para encaixes de urgência em crises agudas de dor",
      "Regras de substituição de profissionais em caso de imprevistos"
    ],
    "simulated_gains": "Redução estimada de 25% a 40% no tempo gasto remanejando horários de pacientes e melhor aproveitamento da capacidade clínica instalada (metas ilustrativas).",
    "concerns_dependencies": "Segurança estrita de dados clínicos conforme exigências do COFFITO e da LGPD para dados sensíveis de saúde.",
    "slug": "360-fisioterapia-agenda-clinica-integrada",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/19",
    "issue_number": 19,
    "issue_status": "created"
  },
  {
    "id": "360-salao-agenda-servico-profissional",
    "title": "360 Salão — Agenda por Serviço e Profissional",
    "vertical": "Beleza / Salões e Barbearias",
    "tagline": "Agendamento Dinâmico com Pausas Técnicas e Repasse de Comissões",
    "description": "Sistema de gestão e reservas para salões e barbearias com agendamento inteligente multisserviço, encaixe automático de atendimentos durante intervalos químicos (pausas técnicas) e controle de comissões.",
    "target_audience": "Salões de beleza, barbearias, manicures e estúdios de cabelo de pequeno e médio porte.",
    "problem": "Serviços como coloração, mechas e alisamentos possuem tempos de pausa química onde o profissional fica ocioso ou atende outro cliente sem organização, gerando atrasos em cascata para os clientes do dia.",
    "solution": "Algoritmo de agendamento que calcula o tempo de aplicação, a pausa técnica de ação química e a finalização, permitindo o agendamento intercalado de serviços rápidos (como corte ou sobrancelha) sem atrasos.",
    "initial_scope": [
      "Agendamento online pelo cliente escolhendo profissional, data e combo de serviços",
      "Algoritmo de pausas técnicas para encaixe inteligente de procedimentos curtos",
      "Fila de espera para notificar clientes quando houver cancelamentos no dia",
      "Cálculo automatizado do rateio de comissões por profissional parceiro",
      "Disparo de lembretes de horário via WhatsApp com 2 horas de antecedência"
    ],
    "channels_integrations": [
      "WhatsApp Business API",
      "Gateways de pagamento online ou split de pagamentos (Lei do Salão Parceiro)"
    ],
    "validation_points": [
      "Precisão no tempo real gasto por profissional em cada tipo de química",
      "Facilidade de uso no celular pelos cabeleireiros e barbeiros"
    ],
    "simulated_gains": "Redução de até 30% no trabalho administrativo de recepção e maior capacidade de preenchimento de horários que seriam ociosos (metas ilustrativas).",
    "concerns_dependencies": "Ajuste fino dos tempos para não sobrecarregar os profissionais parceiros nem gerar atrasos acumulados.",
    "slug": "360-salao-agenda-servico-profissional",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/20",
    "issue_number": 20,
    "issue_status": "created"
  },
  {
    "id": "360-oficina-gestao-servicos-automotivos",
    "title": "360 Oficina — Gestão de Serviços Automotivos",
    "vertical": "Serviços Automotivos / Operação",
    "tagline": "Sincronização de Ordens de Serviço, Boxes, Elevadores e Estoque",
    "description": "Sistema de controle operacional para oficinas automotivas, integrando a abertura de ordens de serviço à disponibilidade de elevadores mecânicos, requisição de autopeças e comunicação com o cliente.",
    "target_audience": "Oficinas mecânicas gerais, centros de diagnóstico veicular, autoelétricas e oficinas de motocicletas.",
    "problem": "Descompasso entre o recebimento de veículos, alocação de elevadores livres e chegada de peças solicitadas, fazendo com que carros desmontados ocupem boxes produtivos por dias.",
    "solution": "Quadro Kanban de controle de pátio e boxes, vinculando cada veículo a um técnico e a um elevador, com alerta de chegada de autopeças e notificação em tempo real para o cliente com fotos do serviço.",
    "initial_scope": [
      "Abertura digital de Ordem de Serviço com checklist fotográfico de entrada",
      "Alocação visual de veículos por box, elevador mecânico e técnico responsável",
      "Controle de requisição de peças com status de encomenda e entrega do distribuidor",
      "Módulo de comunicação com o cliente para envio de fotos do defeito e aprovação de acréscimos",
      "Histórico completo de intervenções anteriores realizadas na placa do veículo"
    ],
    "channels_integrations": [
      "WhatsApp para envio de fotos e aprovação de serviços adicionais",
      "Sistemas de emissão de Nota Fiscal de Serviços e Peças"
    ],
    "validation_points": [
      "Velocidade de registro pelo mecânico com as mãos sujas na bancada",
      "Integração com distribuidores parceiros para cotação rápida de peças"
    ],
    "simulated_gains": "Redução de 20% a 35% no tempo de coordenação interna dos serviços e redução expressiva de veículos parados aguardando peças (metas ilustrativas).",
    "concerns_dependencies": "Exigência de autorização formal documentada do cliente antes de iniciar qualquer serviço extra ou troca de peça não orçada previamente.",
    "slug": "360-oficina-gestao-servicos-automotivos",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/21",
    "issue_number": 21,
    "issue_status": "created"
  },
  {
    "id": "360-massoterapia-atendimento-sem-interrupcoes",
    "title": "360 Massoterapia — Atendimento sem Interrupções",
    "vertical": "Bem-Estar / Massoterapia",
    "tagline": "Agendamento Self-Service Tranquilo sem Interrupções Durante a Massagem",
    "description": "Página intuitiva de agendamento online com escolha de técnica, duração, intervalo de recomposição do ambiente e confirmações automáticas para que o massoterapeuta mantenha o foco no cliente.",
    "target_audience": "Massoterapeutas autônomos, terapeutas holísticos, quiropraxistas e pequenos estúdios de massagem relaxante.",
    "problem": "O profissional precisa interromper o clima de silêncio e concentração da massagem para atender chamadas ou responder mensagens de clientes querendo saber horários livres para a semana.",
    "solution": "Link de agendamento na bio onde o próprio cliente escolhe o tipo de terapia (relaxante, drenagem, desportiva), a duração (30, 60 ou 90 min) e visualiza apenas horários realmente livres com intervalo de descanso já incluído.",
    "initial_scope": [
      "Página de agendamento minimalista com bio do terapeuta e benefícios das técnicas",
      "Inclusão automática de intervalo técnico (15 a 30 min) para higienização da maca e troca de toalhas",
      "Disparo imediato de confirmação com localização e instruções de vestuário e alimentação",
      "Opção de pagamento antecipado para garantia de reserva de horário",
      "Lembrete automático 3 horas antes da sessão"
    ],
    "channels_integrations": [
      "WhatsApp Business para disparos automáticos",
      "Integração com Google Calendar e chave Pix para sinal"
    ],
    "validation_points": [
      "Configuração correta dos intervalos de descanso entre sessões",
      "Questionário breve pré-atendimento para identificação de gravidez ou lesões"
    ],
    "simulated_gains": "Economia média estimada de 4 a 6 horas semanais em atendimento de mensagens e eliminação de interrupções nas sessões terapêuticas (metas ilustrativas).",
    "concerns_dependencies": "Privacidade das respostas ao questionário de saúde prévio e conformidade com diretrizes da LGPD.",
    "slug": "360-massoterapia-atendimento-sem-interrupcoes",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/22",
    "issue_number": 22,
    "issue_status": "created"
  },
  {
    "id": "360-fit-reservas-espacos-esportivos",
    "title": "360 FIT — Reservas de Espaços Esportivos",
    "vertical": "Esportes & Locação de Espaços",
    "tagline": "Reserva Instantânea de Quadras e Espaços com Pagamento via Pix",
    "description": "Aplicativo web para coordenação e reserva de quadras esportivas (society, beach tennis), piscinas e estúdios, com confirmação automatizada e conciliação instantânea de Pix.",
    "target_audience": "Arenas de futebol society, centros de beach tennis, clubes esportivos, estúdios de dança e academias com espaços alugáveis.",
    "problem": "Grupos de atletas disputam os mesmos horários nobres de quadras; administradores gastam horas no WhatsApp checando comprovantes bancários manuais e lidam com no-shows frequentes.",
    "solution": "Grade visual de horários disponíveis em tempo real na arena; o cliente escolhe o horário, faz a reserva com bloqueio temporário de 10 minutos e recebe confirmação após pagamento via QR Code Pix automatizado.",
    "initial_scope": [
      "Visualização da grade de ocupação por quadra e modalidade esportiva",
      "Bloqueio transacional de horários para evitar reservas simultâneas pelo mesmo espaço",
      "Checkout com geração dinâmica de QR Code Pix integrado",
      "Cancelamento e liberação automática do horário caso o Pix não seja liquidado no prazo",
      "Painel de controle para a portaria da arena liberar a entrada dos times"
    ],
    "channels_integrations": [
      "Gateways de pagamento bancário com webhook Pix em tempo real",
      "WhatsApp para envio do voucher da partida e regras da arena"
    ],
    "validation_points": [
      "Conciliação bancária confiável do Pix sem falha de liberação",
      "Regras de cancelamento por chuva em quadras descobertas"
    ],
    "simulated_gains": "Redução estimada de 40% no tempo administrativo de marcação e eliminação total de conflitos de reservas duplicadas (metas ilustrativas).",
    "concerns_dependencies": "Integração segura com APIs bancárias autorizadas; clareza contratual nas regras de reembolso em caso de mau tempo.",
    "slug": "360-fit-reservas-espacos-esportivos",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/23",
    "issue_number": 23,
    "issue_status": "created"
  },
  {
    "id": "360-movimento-em-grupo-treinos-gamificacao",
    "title": "360 Movimento em Grupo — Treinos e Gamificação",
    "vertical": "Esportes & Comunidades",
    "tagline": "Engajamento, Check-in com Localização e Gamificação para Assessorias Esportivas",
    "description": "Plataforma para assessorias e grupos de corrida/ciclismo registrarem atividades, validarem presença via proximidade com consentimento, acompanharem rankings de metas e gerenciarem turmas.",
    "target_audience": "Assessorias esportivas, grupos de corrida de rua, comunidades de ciclismo, equipes de remo e treinadores ao ar livre.",
    "problem": "Treinadores não conseguem monitorar a frequência real de centenas de alunos dispersos em parques e pistas, resultando em desmotivação, falta de acompanhamento da evolução e evasão de mensalistas.",
    "solution": "App com desafios semanais coletivos, check-in de presença com verificação de raio de localização no ponto de encontro do treino e rankings de constância para manter a comunidade motivada.",
    "initial_scope": [
      "Check-in de presença rápido no celular com validação de proximidade geográfica",
      "Mural de desafios esportivos (km rodados, metas de constância semanal)",
      "Quadro de pontuação e badges comemorativas para conquistas individuais e de equipe",
      "Área do treinador para planejamento de treinos por nível (iniciante, intermediário, avançado)",
      "Módulo de rateio financeiro para remuneração de professores assistentes"
    ],
    "channels_integrations": [
      "Geolocalização nativa do navegador/dispositivo com consentimento",
      "WhatsApp para envio de resumos de conquistas semanais"
    ],
    "validation_points": [
      "Consumo moderado de bateria e dados móveis durante treinos externos",
      "Mecanismos justos para alunos que treinam em horários alternativos"
    ],
    "simulated_gains": "Aumento estimado de 20% na participação ativa em desafios e melhora substancial na retenção de alunos da assessoria (metas de piloto a validar).",
    "concerns_dependencies": "A coleta de localização geográfica deve ser estritamente restrita ao ato voluntário de check-in, com transparência e consentimento absoluto (LGPD).",
    "slug": "360-movimento-em-grupo-treinos-gamificacao",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/24",
    "issue_number": 24,
    "issue_status": "created"
  },
  {
    "id": "360-sempre-alerta-planejamento-escoteiro-inteligente",
    "title": "360 Sempre Alerta — Planejamento Escoteiro Inteligente",
    "vertical": "Educação & Juventude / Escotismo",
    "tagline": "Planejamento Pedagógico Escoteiro, Fichas de Atividades e Apoio ao PAXTU",
    "description": "Assistente inteligente para chefias escoteiras elaborarem ciclos de programa, sugerirem atividades alinhadas aos objetivos educativos do POR e prepararem minutas para o sistema PAXTU.",
    "target_audience": "Escotistas voluntários, diretores técnicos de métodos educativos e chefes de seção do Movimento Escoteiro.",
    "problem": "Escotistas voluntários dedicam horas de seus fins de semana preenchendo fichas burocráticas de atividades, tentando relacionar jogos aos 6 ramos de desenvolvimento sem ferramentas ágeis.",
    "solution": "Assistente especializado que recebe a faixa etária do ramo (Lobinho, Escoteiro, Sênior, Pioneiro) e a temática desejada, sugerindo jogos educativos completos e gerando minutas prontas para alimentação no PAXTU.",
    "initial_scope": [
      "Catálogo estruturado de dinâmicas e jogos escoteiros tradicionais",
      "Mapeamento automático dos objetivos educativos e áreas de desenvolvimento (Físico, Intelectual, Caráter, Afetivo, Social, Espiritual)",
      "Gerador de rascunhos de fichas de atividade com objetivos e materiais necessários",
      "Controle de presença e acompanhamento de conquistas de progressão dos jovens",
      "Exportação em formato de fácil transcrição para os sistemas oficiais do Movimento"
    ],
    "channels_integrations": [
      "Exportação em PDF e planilhas",
      "Integração documental com padrões de entrada do PAXTU quando disponível"
    ],
    "validation_points": [
      "Alinhamento irrestrito com as diretrizes do POR (Princípios, Organização e Regras)",
      "Aprovação e supervisão obrigatória do Diretor de Métodos Educativos do Grupo Escoteiro"
    ],
    "simulated_gains": "Redução estimada de 40% a 60% no tempo despendido em tarefas documentais burocráticas, permitindo mais tempo com os jovens (metas ilustrativas).",
    "concerns_dependencies": "Proteção redobrada e sigilo total sobre dados de menores de idade; conformidade com as diretrizes institucionais dos Escoteiros do Brasil.",
    "slug": "360-sempre-alerta-planejamento-escoteiro-inteligente",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/25",
    "issue_number": 25,
    "issue_status": "created"
  },
  {
    "id": "360-viagens-criativas-roteiros-sob-medida",
    "title": "360 Viagens Criativas — Roteiros Sob Medida",
    "vertical": "Turismo & Experiências",
    "tagline": "Consultoria e Roteiros Turísticos Personalizados com Inteligência Artificial",
    "description": "Agente de IA que entrevista o viajante sobre seus desejos, ritmo de viagem e preferências gastronômicas, gerando opções modulares de roteiros exclusivos com estimativas de custo e margem comercial.",
    "target_audience": "Agências de viagem boutique, consultores autônomos de viagem personalizada e operadoras de turismo de charme.",
    "problem": "Construir um roteiro totalmente exclusivo para um cliente exigente demanda dias de pesquisa de atrativos locais, horários de funcionamento e combinações logísticas, limitando a escala da agência.",
    "solution": "Assistente de curadoria de viagens que organiza as respostas do cliente e compõe de 3 a 6 alternativas de roteiros temáticos (cultural, gastronômico, aventura), com estimativas de custos de deslocamento e margem para o consultor.",
    "initial_scope": [
      "Chatbot de entrevista imersiva sobre o perfil e estilo de viagem do cliente",
      "Montagem automática de itinerários dia a dia balanceados com tempo livre",
      "Cálculo paramétrico de estimativas de hospedagem, traslados e ingressos",
      "Simulador de margem de consultoria e pacotes opcionais",
      "Painel de edição para o consultor humano lapidar e enriquecer o roteiro antes da entrega"
    ],
    "channels_integrations": [
      "Geração de páginas web privadas ou PDFs interativos para o viajante",
      "Integração com bases de dados de atrativos turísticos e clima"
    ],
    "validation_points": [
      "Checagem humana mandatória de sazonalidade, vistos e exigências sanitárias locais",
      "Validação das cotações finais junto aos fornecedores e receptivos locais"
    ],
    "simulated_gains": "Redução estimada de 50% no tempo de criação das primeiras minutas de roteiros sob medida (metas ilustrativas a validar).",
    "concerns_dependencies": "Deixar claro ao passageiro que custos e disponibilidades são estimativas sujeitas a confirmação definitiva na emissão.",
    "slug": "360-viagens-criativas-roteiros-sob-medida",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/26",
    "issue_number": 26,
    "issue_status": "created"
  },
  {
    "id": "360-genio-dos-docs-documentos-dados-estruturados",
    "title": "360 Gênio dos Docs — Documentos em Dados Estruturados",
    "vertical": "Operações & Processamento de Dados",
    "tagline": "Extração e Validação Automatizada de Documentos e Notas com IA",
    "description": "Pipeline inteligente de extração de dados com OCR e IA para capturar, validar e converter faturas, notas fiscais, recibos e contratos em dados estruturados para integração com ERPs e planilhas.",
    "target_audience": "Escritórios de contabilidade, distribuidoras, construtoras civis e pequenas empresas com alto volume de entrada de documentos fiscais.",
    "problem": "Equipes administrativas perdem horas digitando manualmente chaves de acesso, datas, itens de pedidos e valores de notas fiscais, sujeitas a erros de digitação e desencontros contábeis.",
    "solution": "Upload de lotes de documentos em PDF ou imagem com extração automática dos campos essenciais por visão computacional, checagem cruzada de cálculos matemáticos e envio estruturado para o ERP ou banco de dados.",
    "initial_scope": [
      "Upload facilitado via web, e-mail dedicado ou pasta na nuvem",
      "Pipeline de visão computacional para leitura de layouts variados de notas e comprovantes",
      "Validação automática de CNPJs, datas de competência e conferência de soma dos itens",
      "Interface de conferência rápida lado a lado (imagem original versus dados extraídos)",
      "Exportação em JSON, CSV ou webhook direto para o software contábil"
    ],
    "channels_integrations": [
      "Armazenamento em nuvem seguro com criptografia",
      "APIs de ERPs de mercado e bancos de dados SQL/NoSQL"
    ],
    "validation_points": [
      "Nível de assertividade em documentos amassados ou fotos com baixa luminosidade",
      "Regras de auditoria para campos com índice de confiança de leitura inferior a 90%"
    ],
    "simulated_gains": "Redução de 60% a 80% no tempo de digitação e conferência inicial de documentos físicos e digitais (metas ilustrativas).",
    "concerns_dependencies": "Processamento em ambiente de alta segurança, criptografia em trânsito e em repouso e estrito cumprimento da LGPD.",
    "slug": "360-genio-dos-docs-documentos-dados-estruturados",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/27",
    "issue_number": 27,
    "issue_status": "created"
  },
  {
    "id": "360-prova-real",
    "title": "360 Prova Real",
    "vertical": "Educação / Avaliação Escolar",
    "tagline": "Correção Supervisionada de Avaliações e Diagnóstico de Aprendizagem",
    "description": "Sistema pedagógico para correção assistida de avaliações escolares conforme rubricas e matrizes curriculares, gerando diagnósticos estatísticos de aprendizado por turma e aluno.",
    "target_audience": "Escolas de ensino fundamental e médio, professores particulares, cursos preparatórios e centros de idiomas.",
    "problem": "Corrigir dezenas de provas toma semanas de trabalho solitário dos educadores, atrasando o retorno para os estudantes e dificultando a identificação imediata de tópicos curriculares que a turma não compreendeu.",
    "solution": "Digitalização de folhas de respostas com leitura rápida de gabaritos objetivos e auxílio na categorização de respostas dissertativas conforme critérios previamente configurados pelo professor, com mapas visuais de desempenho.",
    "initial_scope": [
      "Cadastro de gabaritos e critérios de pontuação por habilidade/competência",
      "Leitura óptica simplificada de gabaritos objetivos através de fotos comuns de celular",
      "Rascunho de análise de coerência em questões discursivas orientado por rubrica pedagógica",
      "Painel estatístico indicando quais questões tiveram menor índice de acerto na turma",
      "Relatório comparativo de evolução histórica para reuniões de pais e conselhos de classe"
    ],
    "channels_integrations": [
      "Exportação para boletins escolares e diários de classe digitais",
      "Geração de relatórios individuais de desempenho para os estudantes"
    ],
    "validation_points": [
      "Supervisão e soberania pedagógica total do professor sobre as notas finais",
      "Alinhamentos curriculares com BNCC e matrizes de exames que exigem critérios definidos"
    ],
    "simulated_gains": "Redução estimada de 50% a 70% no tempo de consolidação de notas e mapas diagnósticos da aprendizagem (metas ilustrativas).",
    "concerns_dependencies": "A ferramenta atua unicamente como assistente pedagógico e não substitui o juízo docente; proteção de dados de estudantes conforme a LGPD.",
    "slug": "360-prova-real",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/28",
    "issue_number": 28,
    "issue_status": "created"
  },
  {
    "id": "360-movimento-certo-orientacao-movimentos-ia",
    "title": "360 Movimento Certo — Orientação de Movimentos com IA",
    "vertical": "Movimento & Inteligência Artificial",
    "tagline": "Análise de Postura Corporal e Execução de Exercícios por Visão Computacional",
    "description": "Aplicação interativa que utiliza modelos de estimativa de pose corporal (pose estimation) para acompanhar a execução de exercícios em vídeo, comparando angulações articulares e fornecendo feedbacks visuais.",
    "target_audience": "Studios de Pilates, instrutores de yoga, praticantes de calistenia, bailarinos e academias de artes marciais.",
    "problem": "Alunos que praticam movimentos em casa sem supervisão direta sofrem com a falta de consciência corporal, repetindo vícios posturais que reduzem a eficácia do treino ou aumentam riscos de sobrecarga articular.",
    "solution": "O usuário posiciona a câmera do celular enquanto se exercita; o aplicativo projeta o esqueleto articular em tempo real, compara o alinhamento com a postura padrão e exibe alertas visuais simples para guiar a execução correta.",
    "initial_scope": [
      "Detecção de pontos articulares no dispositivo com processamento local no navegador",
      "Biblioteca de posturas de referência (ex: alinhamento de coluna, joelhos e quadril)",
      "Feedback visual em tela com cores indicativas (verde para alinhado, amarelo para desvio)",
      "Contador automático de repetições completas com amplitude correta",
      "Módulo de gravação para o instrutor humano revisar e fazer comentários pontuais"
    ],
    "channels_integrations": [
      "Câmera comum de smartphones e computadores",
      "Compartilhamento do resumo de execução com o treinador do aluno"
    ],
    "validation_points": [
      "Precisão dos modelos de pose estimation em condições variadas de iluminação e roupas",
      "Privacidade do processamento de imagens preferencialmente local (on-device)"
    ],
    "simulated_gains": "Aumento expressivo na autonomia e segurança do praticante em treinos orientados à distância (metas ilustrativas).",
    "concerns_dependencies": "O sistema não substitui a avaliação de um fisioterapeuta ou profissional de Educação Física e não deve ser utilizado para reabilitação médica de lesões agudas.",
    "slug": "360-movimento-certo-orientacao-movimentos-ia",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/29",
    "issue_number": 29,
    "issue_status": "created"
  },
  {
    "id": "360-receita-certa",
    "title": "360 Receita Certa",
    "vertical": "Culinária & Multimodalidade",
    "tagline": "Assistente de Cozinha Hands-Free em Tempo Real com Áudio e Vídeo",
    "description": "Assistente culinário multimodal que acompanha o preparo de receitas passo a passo por comandos de voz e visão, cronometrando etapas críticas e oferecendo orientações contextuais durante a execução.",
    "target_audience": "Criadores de conteúdo culinário, escolas de gastronomia, cozinheiros amadores e pequenas cozinhas comerciais.",
    "problem": "Cozinhar com as mãos sujas de ingredientes obriga a parar para lavar e desbloquear telas de celular para ler o próximo passo, resultando em receitas queimadas ou etapas esquecidas.",
    "solution": "Modo de cozinha mãos-livres acionado por voz ('próximo passo', 'quanto tempo de forno?'), com múltiplos cronômetros sincronizados e avisos proativos sobre pontos de cozimento e descanso de massas.",
    "initial_scope": [
      "Leitura em voz alta de cada etapa da receita com ritmo ajustável",
      "Reconhecimento de comandos de voz simples e responsivos",
      "Gerenciador de múltiplos temporizadores nomeados ('massa', 'forno', 'molho')",
      "Guia de substituições inteligentes para ingredientes indisponíveis na despensa",
      "Checklist de mise en place inicial com conferência dos insumos"
    ],
    "channels_integrations": [
      "Interface de voz integrada (Web Speech API / assistentes de IA de voz)",
      "Importação de receitas de sites gastronômicos parceiros"
    ],
    "validation_points": [
      "Imunidade a ruídos ambientes de panelas e exaustores durante o reconhecimento de voz",
      "Validação clara de regras de segurança alimentar (temperaturas internas de carnes)"
    ],
    "simulated_gains": "Redução estimada de 20% no tempo perdido consultando receitas e menos desperdício de insumos por erros de tempo (metas experimentais).",
    "concerns_dependencies": "Instruções claras de prevenção de acidentes com óleo quente, facas e fornos; verificação rigorosa de tempos críticos.",
    "slug": "360-receita-certa",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/30",
    "issue_number": 30,
    "issue_status": "created"
  },
  {
    "id": "360-mail-mkt-comunicacao-multicanal",
    "title": "360 Mail MKT — Comunicação Multicanal",
    "vertical": "Marketing & Automação",
    "tagline": "Campanhas Segmentadas, Automação por Comportamento e Métricas Reais",
    "description": "Hub central de automação de campanhas de e-mail e canais complementares com segmentação inteligente da base, disparos baseados em comportamento de compra e relatórios detalhados de engajamento.",
    "target_audience": "Lojas virtuais, cursos online, consultorias, academias e negócios com carteira de clientes recorrentes.",
    "problem": "Disparos genéricos e manuais para toda a lista de contatos sem critérios de interesse geram altas taxas de rejeição, cancelamentos de inscrição e perda de credibilidade do domínio de e-mail.",
    "solution": "Plataforma de criação simplificada de e-mails, com segmentação por histórico de engajamento e compras, réguas automáticas de boas-vindas e acompanhamento de taxas de abertura e conversão real.",
    "initial_scope": [
      "Editor visual de templates de e-mail limpos e responsivos",
      "Segmentação dinâmica por tags, data de cadastro e histórico de compras",
      "Fluxos automatizados essenciais (boas-vindas, reengajamento, lembrete de abandono)",
      "Painel de métricas com taxas de entrega, aberturas, cliques e cancelamentos",
      "Configuração guiada de autenticação de domínio para alta entregabilidade (SPF, DKIM, DMARC)"
    ],
    "channels_integrations": [
      "Provedores de envio SMTP transacional de alta reputação",
      "Integração com bases de dados de e-commerce e formulários web"
    ],
    "validation_points": [
      "Conformidade técnica de entregabilidade para evitar a caixa de spam",
      "Validação dos links de descadastramento (opt-out) com um clique"
    ],
    "simulated_gains": "Redução de até 40% no tempo operacional de elaboração de disparos e melhoria na taxa de resposta das campanhas (metas ilustrativas).",
    "concerns_dependencies": "Conformidade obrigatória com as leis antispam e LGPD; permissão prévia documentada (opt-in) para todos os destinatários.",
    "slug": "360-mail-mkt-comunicacao-multicanal",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/31",
    "issue_number": 31,
    "issue_status": "created"
  },
  {
    "id": "360-estoque-critico-previsao-alertas-estoque",
    "title": "360 Estoque Crítico — Previsão e Alertas de Estoque",
    "vertical": "Gestão de Suprimentos & Operações",
    "tagline": "Prevenção Inteligente de Rupturas de Estoque e Compras Programadas",
    "description": "Painel de controle com cálculo automático de ponto de reposição, histórico de sazonalidade e alertas preventivos para compras prioritárias antes que matérias-primas essenciais faltem.",
    "target_audience": "Lojas varejistas, pequenos fabricantes, restaurantes, distribuidoras e empresas que dependem de insumos críticos.",
    "problem": "Descobrir que um produto ou insumo esgotou no momento em que um cliente faz o pedido gera cancelamentos, paralisa linhas de produção e força compras emergenciais a preços abusivos.",
    "solution": "Monitoramento constante de estoques mínimos e tempos de entrega dos fornecedores, com algoritmo que calcula os dias restantes de cobertura e envia alertas no WhatsApp da equipe de compras.",
    "initial_scope": [
      "Cadastro de insumos com especificação de estoque mínimo e lote econômico",
      "Cálculo contínuo da velocidade de consumo diário e projeção de esgotamento",
      "Alertas automáticos categorizados por nível de criticidade (Atenção / Urgente)",
      "Sugestão paramétrica de pedidos de compra considerando prazos de entrega do fornecedor",
      "Painel com visão consolidada do capital financeiro imobilizado por categoria de produto"
    ],
    "channels_integrations": [
      "WhatsApp e e-mail para envio de alertas à equipe de compras",
      "Integração com leitor de código de barras para baixa rápida de estoque"
    ],
    "validation_points": [
      "Acurácia dos inventários físicos e registro disciplinado das perdas",
      "Consideração de picos sazonais de demanda em datas comemorativas"
    ],
    "simulated_gains": "Redução estimada de 20% a 35% nos incidentes de ruptura de estoque para itens monitorados e eliminação de compras de emergência (metas ilustrativas).",
    "concerns_dependencies": "A precisão dos alertas depende de dados cadastrais consistentes de prazos de entrega e movimentações reais de estoque.",
    "slug": "360-estoque-critico-previsao-alertas-estoque",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/32",
    "issue_number": 32,
    "issue_status": "created"
  },
  {
    "id": "360-social-media-conteudo-direcao-estrategica",
    "title": "360 Social Media — Conteúdo com Direção Estratégica",
    "vertical": "Marketing Digital / Social Media",
    "tagline": "Planejamento Editorial Orientado por Metas e Geração Estratégica de Pautas",
    "description": "Plataforma de estratégia de conteúdo para redes sociais com geração de pautas estruturadas por objetivos de venda, adaptação de tom de voz por rede e calendário integrado com aprovação.",
    "target_audience": "MEIs, pequenos comércios, prestadores de serviços, profissionais liberais e agências de comunicação.",
    "problem": "Postar de maneira desorganizada sem estratégia comercial gera cansaço na criação de conteúdo e traz curtidas sem converter seguidores em clientes pagantes.",
    "solution": "Matriz de planejamento editorial que vincula as postagens aos objetivos do negócio (autoridade, engajamento ou venda direta), gerando rascunhos de textos com ganchos atrativos para cada plataforma.",
    "initial_scope": [
      "Diagnóstico de personas e pilares estratégicos de comunicação da marca",
      "Gerador de pautas com IA alimentado por dores reais do público-alvo",
      "Adaptação de formatos com um clique (carrossel para Instagram, texto técnico para LinkedIn)",
      "Calendário visual com fluxo de aprovação e anotações para o designer/criador",
      "Histórico de postagens com métricas de engajamento para retroalimentar a estratégia"
    ],
    "channels_integrations": [
      "Exportação para formatos de agendamento de postagens",
      "Compartilhamento do calendário para aprovação rápida do cliente via web"
    ],
    "validation_points": [
      "Alinhamento da linguagem gerada com a essência e autenticidade da marca",
      "Revisão humana mandatória antes de qualquer publicação pública"
    ],
    "simulated_gains": "Redução de 50% a 70% no tempo de elaboração de pautas e primeiras versões de publicações (metas ilustrativas a validar).",
    "concerns_dependencies": "Respeito irrestrito aos direitos autorais de imagens e normas de conduta comercial das plataformas de redes sociais.",
    "slug": "360-social-media-conteudo-direcao-estrategica",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/33",
    "issue_number": 33,
    "issue_status": "created"
  },
  {
    "id": "360-super-ecommerce-vendas-conectadas-publicidade",
    "title": "360 Super E-commerce — Vendas Conectadas à Publicidade",
    "vertical": "E-commerce & Tráfego Pago",
    "tagline": "Visão Unificada de Faturamento, Custos de Mídia, ROAS e Margem Real",
    "description": "Dashboard analítico que consolida faturamento de vendas da loja virtual e investimentos em anúncios pagos (Meta Ads, Google Ads), calculando o ROAS real e a margem de contribuição líquida.",
    "target_audience": "Lojas virtuais, marcas próprias, operações D2C de pequenos fabricantes e e-commerces de médio porte.",
    "problem": "Decisões de investimento tomadas no escuro porque os dados de vendas estão no e-commerce e os custos de anúncios estão nos gerenciadores de mídia, ocultando campanhas que geram faturamento mas dão prejuízo líquido.",
    "solution": "Painel centralizado que cruza vendas efetivamente pagas com os gastos de mídia por campanha, calculando ROAS, Custo de Aquisição de Clientes (CAC) e lucro bruto real por produto anunciado.",
    "initial_scope": [
      "Conexão de dados via webhooks de pedidos pagos do e-commerce",
      "Ingestão automatizada de gastos de campanhas via APIs de anúncios",
      "Cálculo automatizado de ROAS real, Blended CAC e Margem de Contribuição",
      "Alertas inteligentes para pausar ou revisar campanhas cujo custo superou o limite de segurança",
      "Relatórios periódicos com recomendações de otimização orçamentária"
    ],
    "channels_integrations": [
      "APIs de plataformas de e-commerce e gateways de pagamento",
      "APIs oficiais do Meta Ads, Google Ads e TikTok Ads"
    ],
    "validation_points": [
      "Conciliação exata de pedidos cancelados ou estornados para não inflar o ROAS",
      "Inclusão dos custos de mercadoria vendida (CMV) para cálculo preciso do lucro"
    ],
    "simulated_gains": "Redução estimada de 50% no tempo de consolidação de relatórios comerciais e agilidade imediata para estancar campanhas deficitárias (metas ilustrativas).",
    "concerns_dependencies": "ROAS contábil não é sinônimo de lucro real; alterações automáticas de orçamentos devem ter tetos máximos rígidos com aprovação do gestor de tráfego.",
    "slug": "360-super-ecommerce-vendas-conectadas-publicidade",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/34",
    "issue_number": 34,
    "issue_status": "created"
  },
  {
    "id": "360-financeiro-gestao-financeira-integrada",
    "title": "360 Financeiro — Gestão Financeira Integrada",
    "vertical": "Gestão Financeira & Operações",
    "tagline": "Conciliação Bancária, Controle de Fluxo de Caixa e Classificação de Despesas",
    "description": "Hub financeiro para micro e pequenas empresas organizarem contas a pagar e receber, classificarem comprovantes automaticamente e manterem previsibilidade clara do fluxo de caixa.",
    "target_audience": "MEIs, prestadores de serviços, pequenas lojas, consultorias e pequenos escritórios administrativos.",
    "problem": "Extratos bancários desarticulados de notas fiscais e recibos em papel levam à perda do controle do saldo futuro de caixa, multas por atraso de boletos e surpresas no fim do mês.",
    "solution": "Sistema de gestão financeira com importação de extratos bancários, categorização assistida de despesas, controle de agendamento de pagamentos com alertas de vencimento e projeção visual do fluxo de caixa.",
    "initial_scope": [
      "Importação simples de extratos bancários (OFX) e classificação inteligente de despesas",
      "Controle de contas a pagar e a receber com régua de cobrança preventiva",
      "Gráfico de fluxo de caixa projetado para 30, 60 e 90 dias",
      "Conciliação facilitada entre extrato bancário e comprovantes fiscais arquivados",
      "Relatório DRE gerencial simplificado para tomada de decisão"
    ],
    "channels_integrations": [
      "Importação de arquivos OFX e integração com APIs de emissão de NF autorizadas",
      "Alertas de contas a vencer via WhatsApp e e-mail"
    ],
    "validation_points": [
      "Auditoria humana obrigatória sobre as classificações contábeis de despesas",
      "Emissão fiscal exclusivamente através de canais e certificados oficiais homologados"
    ],
    "simulated_gains": "Redução estimada de 40% a 60% no tempo gasto conferindo comprovantes e fechando conciliações financeiras (metas ilustrativas).",
    "concerns_dependencies": "Sigilo e proteção de dados financeiros confidenciais sob rígida governança e trilhas de auditoria para cada lançamento.",
    "slug": "360-financeiro-gestao-financeira-integrada",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/35",
    "issue_number": 35,
    "issue_status": "created"
  },
  {
    "id": "360-sindico-pleno-condominio-conectado",
    "title": "360 Síndico Pleno — Condomínio Conectado",
    "vertical": "Gestão Condominial & Propriedades",
    "tagline": "Portal Condominial Unificado para Encomendas, Reservas e Manutenção",
    "description": "Portal web centralizado para moradores e administração condominial gerenciarem aviso de encomendas na portaria, reserva de áreas sociais com regras de uso e chamados de manutenção predial preventiva.",
    "target_audience": "Síndicos profissionais, administradoras de condomínios e condomínios residenciais ou comerciais.",
    "problem": "Comunicação caótica por grupos informais de WhatsApp gera perda de notificações de encomendas na portaria, conflitos em reservas de churrasqueiras e esquecimento de manutenções prediais obrigatórias.",
    "solution": "Portal web moderno onde o porteiro registra encomendas com código de retirada, condôminos reservam áreas comuns conforme regras do regimento interno e chamados de conserto são acompanhados com prazos claros.",
    "initial_scope": [
      "Módulo de portaria para cadastro e notificação automática de recebimento de encomendas",
      "Calendário de reservas de salão de festas e churrasqueira com aceite de termos de uso",
      "Livro de ocorrências digital com abertura de chamados técnicos de manutenção",
      "Mural oficial de avisos e repositório de atas e convenções condominiais",
      "Painel do síndico para acompanhamento de tarefas prediais preventivas (limpeza de caixa d'água, extintores)"
    ],
    "channels_integrations": [
      "Notificações de encomendas no WhatsApp dos moradores",
      "Acesso web responsivo para condôminos e equipe de portaria"
    ],
    "validation_points": [
      "Regras de convivência e prioridades de reservas segundo a convenção de cada condomínio",
      "Privacidade dos números de telefone e dados dos apartamentos"
    ],
    "simulated_gains": "Redução estimada de 30% a 50% no tempo de triagem de demandas e aumento substancial na transparência da gestão do condomínio (metas ilustrativas).",
    "concerns_dependencies": "Moderação e canais de comunicação com preservação da privacidade dos condôminos conforme a LGPD, evitando exposição de inadimplências ou conflitos particulares.",
    "slug": "360-sindico-pleno-condominio-conectado",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/36",
    "issue_number": 36,
    "issue_status": "created"
  },
  {
    "id": "360-locadora-controle-inteligente-equipamentos",
    "title": "360 Locadora — Controle Inteligente de Equipamentos",
    "vertical": "Locação de Ativos & Maquinário",
    "tagline": "Gestão de Ativos Locados, Calendário de Locação e Checklists Fotográficos",
    "description": "Sistema especializado para locadoras controlarem contratos de aluguel de equipamentos, disponibilidade no pátio por número de série, vistorias de entrega com fotos e alertas de manutenção.",
    "target_audience": "Locadoras de ferramentas elétricas, andaimes, máquinas de terraplanagem, equipamentos audiovisuais e artigos para eventos.",
    "problem": "Controle manual em cadernos ou planilhas desatualizadas resulta em locações duplicadas do mesmo equipamento, falta de comprovação de danos causados pelo cliente e negligência em manutenções preventivas.",
    "solution": "Plataforma de gestão de ativos com número de série individual, calendário visual de reservas futuras, aplicativo móvel para checklist de vistoria fotográfica na entrega/devolução e alertas de revisão periódica.",
    "initial_scope": [
      "Cadastro individual de equipamentos com horímetro/odômetro e histórico de manutenções",
      "Calendário dinâmico de locações com bloqueio automático de datas para manutenção",
      "Checklist digital com fotos do estado do equipamento assinado no ato da entrega",
      "Geração de contratos de locação parametrizados com cláusulas de responsabilidade",
      "Painel de cobranças com monitoramento de diárias excedentes e renovações"
    ],
    "channels_integrations": [
      "WhatsApp para envio do checklist de vistoria e contrato para o locatário",
      "Leitura de QR Code fixado no equipamento para consulta de histórico em campo"
    ],
    "validation_points": [
      "Validade jurídica da aceitação eletrônica dos checklists de vistoria",
      "Controle de caução e garantias financeiras para ativos de alto valor"
    ],
    "simulated_gains": "Redução de até 30% no tempo administrativo por contrato e eliminação total de conflitos de disponibilidade de equipamentos (metas ilustrativas).",
    "concerns_dependencies": "Segurança jurídica dos termos de responsabilidade por avarias e roubo assinados pelo locatário.",
    "slug": "360-locadora-controle-inteligente-equipamentos",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/37",
    "issue_number": 37,
    "issue_status": "created"
  },
  {
    "id": "360-menu-cardapio-digital-pedidos-integrados",
    "title": "360 Menu — Cardápio Digital e Pedidos Integrados",
    "vertical": "Restaurantes & Gastronomia",
    "tagline": "Cardápio Digital por QR Code com Pedidos na Mesa e Bloqueio por Estoque",
    "description": "Cardápio web interativo acessível por QR Code nas mesas, permitindo pedidos instantâneos, solicitações de fechamento de conta, gorjetas e integração automática com a disponibilidade de ingredientes da cozinha.",
    "target_audience": "Restaurantes, bares, cervejarias, cafeterias e bistrôs com atendimento presencial nas mesas.",
    "problem": "Cardápios físicos sofrem com desgaste, preços defasados e pedidos de pratos cujos insumos acabaram na cozinha, gerando constrangimento dos garçons e irritação dos clientes.",
    "solution": "Cardápio digital moderno atualizado em tempo real, onde o próprio cliente visualiza fotos atraentes dos pratos, faz o pedido com customizações e a cozinha recebe as comandas com bloqueio instantâneo de itens em falta.",
    "initial_scope": [
      "Acesso sem necessidade de download de aplicativo via leitura de QR Code na mesa",
      "Interface com fotos de alta qualidade, descrições detalhadas e tags de alérgenos",
      "Função de chamar o garçom ou solicitar a conta com 1 toque",
      "Painel de controle do gerente para desativar itens com ingredientes esgotados em segundos",
      "Opção de pagamento facilitado na mesa com divisão de conta"
    ],
    "channels_integrations": [
      "Sistemas de frente de caixa (PDV) e telas de cozinha (KDS)",
      "Pagamento instantâneo via Pix ou cartão integrado"
    ],
    "validation_points": [
      "Qualidade da cobertura de rede Wi-Fi / 4G no salão do estabelecimento",
      "Treinamento dos garçons para atuar como consultores gastronômicos amigáveis"
    ],
    "simulated_gains": "Redução de 30% no tempo de atualização do menu e queda expressiva em pedidos cancelados por falta de ingredientes (metas ilustrativas).",
    "concerns_dependencies": "Transparência total na exibição de ingredientes alérgenos e observância às normas de defesa do consumidor na clareza dos preços exibidos.",
    "slug": "360-menu-cardapio-digital-pedidos-integrados",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/38",
    "issue_number": 38,
    "issue_status": "created"
  },
  {
    "id": "360-agenda-gestao-unificada-recursos",
    "title": "360 Agenda — Gestão Unificada de Recursos",
    "vertical": "Agendamento Multi-Recursos",
    "tagline": "Motor Transacional de Agendamento com Validação Atômica Multi-Recursos",
    "description": "Motor de reservas de alta confiabilidade que valida simultaneamente a disponibilidade de múltiplos recursos interdependentes (salas, profissionais, frotas e equipamentos) de forma transacional e sem conflitos.",
    "target_audience": "Clínicas com vários consultórios, faculdades e escolas com laboratórios, locadoras de veículos e empresas com infraestrutura compartilhada.",
    "problem": "Sistemas comuns de agendamento validam apenas um recurso por vez (ex: agenda do médico), gerando situações em que a consulta é confirmada mas não há consultório livre ou aparelho disponível no momento.",
    "solution": "Motor transacional robusto que aplica bloqueio all-or-nothing: um agendamento só é consolidado se todos os recursos associados (sala + profissional + equipamento) estiverem 100% disponíveis simultaneamente.",
    "initial_scope": [
      "Configuração de regras complexas de dependência entre recursos humanos e físicos",
      "Processamento transacional com garantias de atomicidade para prevenir race conditions",
      "Gestão de bloqueios por férias, manutenções preventivas ou períodos de higienização",
      "Suporte a agendamentos recorrentes com verificação de toda a série histórica",
      "API moderna para integração com múltiplos frontends e aplicações legadas"
    ],
    "channels_integrations": [
      "Webhooks para notificações em tempo real",
      "Integração com bancos de dados relacionais com controle transacional estrito"
    ],
    "validation_points": [
      "Garantia de transações atômicas mesmo em horários de pico simultâneo",
      "Mecanismos de liberação rápida de bloqueios temporários abandonados"
    ],
    "simulated_gains": "Redução de até 40% no tempo de coordenação de agendas complexas e eliminação total de conflitos de reservas simultâneas (metas ilustrativas).",
    "concerns_dependencies": "Arquitetura transacional com bloqueios adequados para evitar sobrecarga no banco de dados e garantir escalabilidade operacional.",
    "slug": "360-agenda-gestao-unificada-recursos",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/39",
    "issue_number": 39,
    "issue_status": "created"
  },
  {
    "id": "360-concorrencia-inteligencia-competitiva-continua",
    "title": "360 Concorrência — Inteligência Competitiva Contínua",
    "vertical": "Inteligência Competitiva & Mercado",
    "tagline": "Monitoramento Automatizado de Mercado, Preços e Posicionamento com IA",
    "description": "Plataforma analítica que monitora páginas públicas autorizadas, catálogos e movimentações de mercado de concorrentes, gerando resumos estratégicos com IA e alertas de oportunidades comerciais.",
    "target_audience": "MEIs e pequenos empresários, lojas virtuais, agências de marketing e prestadores de serviços que precisam monitorar o mercado sem custos proibitivos.",
    "problem": "Acompanhar concorrentes de forma manual consome tempo da equipe e faz com que reduções de preço, lançamentos de novos produtos ou alterações de campanhas passem despercebidos até gerarem perda de clientes.",
    "solution": "Robô de monitoramento programado de dados públicos e canais oficiais que detecta alterações em preços, novos produtos e argumentos comerciais, gerando resumos semanais com sugestões práticas de ação.",
    "initial_scope": [
      "Monitoramento programado de páginas públicas, feeds e fontes autorizadas",
      "Detecção automática de variações em tabelas de preços e catálogo de produtos",
      "Análise com IA dos principais argumentos de venda e temas de campanhas de concorrentes",
      "Painel de inteligência de mercado com linha do tempo de alterações registradas",
      "Relatórios periódicos consolidados com identificação de oportunidades e alertas prioritários"
    ],
    "channels_integrations": [
      "n8n / scripts para orquestração de coletas públicas autorizadas",
      "Modelos de IA para síntese analítica e relatórios executivos"
    ],
    "validation_points": [
      "Respeito absoluto aos limites de acesso e termos de uso dos sites monitorados",
      "Validação das fontes para assegurar que apenas dados públicos e autorizados sejam coletados"
    ],
    "simulated_gains": "Redução de até 70% no tempo despendido em pesquisas manuais de mercado e agilidade para antecipar movimentos concorrenciais (metas ilustrativas a validar em piloto).",
    "concerns_dependencies": "O monitoramento deve respeitar estritamente termos de uso, limites de requisições, robô.txt, direitos autorais e políticas de privacidade das plataformas; os dados coletados limitam-se ao âmbito público.",
    "slug": "360-concorrencia-inteligencia-competitiva-continua",
    "issue_url": "https://github.com/marcusmaglia-dot/portfolio-studioia360/issues/40",
    "issue_number": 40,
    "issue_status": "created"
  }
];