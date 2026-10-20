/**
 * StudioIA360 — Lógica Interativa do Catálogo de Portfólio
 * Conectado ao GitHub @marcusmaglia-dot
 */

(function () {
  'use strict';

  // Estado da Aplicação
  const state = {
    projects: [],
    filteredProjects: [],
    activeVertical: 'ALL',
    searchQuery: '',
    sortMode: 'default',
    selectedProject: null
  };

  // Elementos do DOM
  const elements = {
    projectsGrid: document.getElementById('projects-grid'),
    verticalChips: document.getElementById('vertical-chips'),
    searchInput: document.getElementById('search-input'),
    clearSearchBtn: document.getElementById('clear-search-btn'),
    sortSelect: document.getElementById('sort-select'),
    resultsCountText: document.getElementById('results-count-text'),
    resetFiltersBtn: document.getElementById('reset-filters-btn'),
    noResults: document.getElementById('no-results'),
    btnEmptyReset: document.getElementById('btn-empty-reset'),
    
    // Estatísticas Hero
    statTotalProjects: document.getElementById('stat-total-projects'),
    statTotalVerticals: document.getElementById('stat-total-verticals'),
    statTotalIssues: document.getElementById('stat-total-issues'),

    // Modal
    projectModal: document.getElementById('project-modal'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    modalCloseFooterBtn: document.getElementById('modal-close-footer-btn'),
    modalVertical: document.getElementById('modal-vertical'),
    modalIssueBadge: document.getElementById('modal-issue-badge'),
    modalTitle: document.getElementById('modal-title'),
    modalTagline: document.getElementById('modal-tagline'),
    modalDescription: document.getElementById('modal-description'),
    modalTargetAudience: document.getElementById('modal-target-audience'),
    modalProblem: document.getElementById('modal-problem'),
    modalSolution: document.getElementById('modal-solution'),
    modalGains: document.getElementById('modal-gains'),
    modalScopeList: document.getElementById('modal-scope-list'),
    modalChannelsList: document.getElementById('modal-channels-list'),
    modalValidationList: document.getElementById('modal-validation-list'),
    modalPromptText: document.getElementById('modal-prompt-text'),
    modalConcerns: document.getElementById('modal-concerns'),
    modalIssueLink: document.getElementById('modal-issue-link'),
    btnCopyPrompt: document.getElementById('btn-copy-prompt'),
    copyBtnText: document.getElementById('copy-btn-text'),
    modalTabs: document.querySelectorAll('.tab-btn'),
    modalTabContents: document.querySelectorAll('.tab-content'),

    // Toast
    toast: document.getElementById('toast')
  };

  /**
   * Inicialização
   */
  async function init() {
    loadProjectsData();
    setupEventListeners();
  }

  /**
   * Carregamento de dados (inlined ou via fetch)
   */
  function loadProjectsData() {
    if (window.STUDIOIA360_PROJECTS && Array.isArray(window.STUDIOIA360_PROJECTS)) {
      state.projects = window.STUDIOIA360_PROJECTS;
      state.filteredProjects = [...state.projects];
      onDataLoaded();
    } else {
      fetch('data/projects.json')
        .then(res => res.json())
        .then(data => {
          state.projects = data;
          state.filteredProjects = [...state.projects];
          onDataLoaded();
        })
        .catch(err => {
          console.error('Erro ao carregar projects.json:', err);
        });
    }
  }

  function onDataLoaded() {
    updateHeroStats();
    renderVerticalChips();
    applyFiltersAndRender();
  }

  /**
   * Atualiza as estatísticas do topo
   */
  function updateHeroStats() {
    if (elements.statTotalProjects) {
      elements.statTotalProjects.textContent = state.projects.length;
    }
    
    // Contagem de verticais únicas
    const verticals = new Set(state.projects.map(p => p.vertical));
    if (elements.statTotalVerticals) {
      elements.statTotalVerticals.textContent = verticals.size;
    }

    // Contagem de issues abertas
    const issuesCount = state.projects.filter(p => p.issue_number).length;
    if (elements.statTotalIssues) {
      elements.statTotalIssues.textContent = issuesCount || state.projects.length;
    }
  }

  /**
   * Renderiza os chips de filtros por verticais
   */
  function renderVerticalChips() {
    const verticalCounts = {};
    state.projects.forEach(p => {
      verticalCounts[p.vertical] = (verticalCounts[p.vertical] || 0) + 1;
    });

    const sortedVerticals = Object.keys(verticalCounts).sort();

    let html = `
      <button class="chip-btn ${state.activeVertical === 'ALL' ? 'active' : ''}" data-vertical="ALL">
        <span>Todas as Verticais</span>
        <span class="chip-count">${state.projects.length}</span>
      </button>
    `;

    sortedVerticals.forEach(v => {
      const activeClass = state.activeVertical === v ? 'active' : '';
      html += `
        <button class="chip-btn ${activeClass}" data-vertical="${v}">
          <span>${v}</span>
          <span class="chip-count">${verticalCounts[v]}</span>
        </button>
      `;
    });

    elements.verticalChips.innerHTML = html;

    // Adiciona listener aos chips
    elements.verticalChips.querySelectorAll('.chip-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeVertical = btn.getAttribute('data-vertical');
        renderVerticalChips();
        applyFiltersAndRender();
      });
    });
  }

  /**
   * Aplica busca, filtro de vertical e ordenação
   */
  function applyFiltersAndRender() {
    const query = state.searchQuery.trim().toLowerCase();

    // 1. Filtro
    let list = state.projects.filter(p => {
      // Filtro de Vertical
      if (state.activeVertical !== 'ALL' && p.vertical !== state.activeVertical) {
        return false;
      }

      // Filtro de Busca Textual
      if (query) {
        const textToSearch = [
          p.title,
          p.tagline,
          p.description,
          p.vertical,
          p.problem,
          p.solution,
          p.target_audience,
          ...(p.initial_scope || []),
          ...(p.channels_integrations || [])
        ].join(' ').toLowerCase();

        return textToSearch.includes(query);
      }

      return true;
    });

    // 2. Ordenação
    switch (state.sortMode) {
      case 'alpha-asc':
        list.sort((a, b) => a.title.localeCompare(b.title, 'pt-BR'));
        break;
      case 'alpha-desc':
        list.sort((a, b) => b.title.localeCompare(a.title, 'pt-BR'));
        break;
      case 'issue-num':
        list.sort((a, b) => (a.issue_number || 999) - (b.issue_number || 999));
        break;
      case 'vertical':
        list.sort((a, b) => a.vertical.localeCompare(b.vertical, 'pt-BR') || a.title.localeCompare(b.title, 'pt-BR'));
        break;
      default:
        // Mantém a ordem original do arquivo
        break;
    }

    state.filteredProjects = list;
    renderGrid();
    updateResultsMeta();
  }

  /**
   * Renderiza a grade de projetos
   */
  function renderGrid() {
    const list = state.filteredProjects;

    if (list.length === 0) {
      elements.projectsGrid.innerHTML = '';
      elements.noResults.style.display = 'block';
      return;
    }

    elements.noResults.style.display = 'none';

    const cardsHtml = list.map(project => {
      const issueNum = project.issue_number ? `#${project.issue_number}` : 'Issue';
      const issueUrl = project.issue_url || `https://github.com/marcusmaglia-dot/portfolio-studioia360/issues`;

      return `
        <article class="project-card" data-id="${project.id}">
          <div class="card-top-bar">
            <span class="badge vertical-badge">${escapeHtml(project.vertical)}</span>
            <span class="badge issue-badge">${issueNum}</span>
          </div>

          <h3 class="card-title">${escapeHtml(project.title)}</h3>
          <p class="card-tagline">${escapeHtml(project.tagline || '')}</p>
          <p class="card-description">${escapeHtml(project.description)}</p>

          <div class="card-meta-box">
            <div class="card-meta-item">
              <strong>Público:</strong>
              <span>${escapeHtml(project.target_audience)}</span>
            </div>
            <div class="card-meta-item">
              <strong>Metas:</strong>
              <span>${escapeHtml(project.simulated_gains)}</span>
            </div>
          </div>

          <div class="card-actions">
            <button class="btn-card-detail" data-action="view-details" data-id="${project.id}">
              Ver Detalhes do Projeto
            </button>
            <a href="${issueUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-issue" title="Abrir Issue no GitHub">
              <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor">
                <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
                <path fill-rule="evenodd" d="M8 0a8 8 0 100 16A8 8 0 008 0zM1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0z" clip-rule="evenodd"/>
              </svg>
              <span>${issueNum}</span>
            </a>
          </div>
        </article>
      `;
    }).join('');

    elements.projectsGrid.innerHTML = cardsHtml;

    // Listeners nos botões dos cards
    elements.projectsGrid.querySelectorAll('[data-action="view-details"]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = btn.getAttribute('data-id');
        const proj = state.projects.find(p => p.id === id);
        if (proj) {
          openModal(proj);
        }
      });
    });
  }

  /**
   * Atualiza a barra de contagem e botão de reset
   */
  function updateResultsMeta() {
    const total = state.projects.length;
    const current = state.filteredProjects.length;
    elements.resultsCountText.innerHTML = `Exibindo <strong>${current}</strong> de <strong>${total}</strong> projetos`;

    const isFiltered = state.activeVertical !== 'ALL' || state.searchQuery.trim() !== '';
    elements.resetFiltersBtn.style.display = isFiltered ? 'inline-block' : 'none';
  }

  /**
   * Abre o Modal com dados completos do projeto
   */
  function openModal(project) {
    state.selectedProject = project;

    const issueNum = project.issue_number ? `#${project.issue_number}` : 'GitHub Issue';
    const issueUrl = project.issue_url || `https://github.com/marcusmaglia-dot/portfolio-studioia360/issues`;

    elements.modalVertical.textContent = project.vertical;
    elements.modalIssueBadge.textContent = issueNum;
    elements.modalTitle.textContent = project.title;
    elements.modalTagline.textContent = project.tagline || '';
    elements.modalDescription.textContent = project.description;
    elements.modalTargetAudience.textContent = project.target_audience;
    elements.modalProblem.textContent = project.problem;
    elements.modalSolution.textContent = project.solution;
    elements.modalGains.textContent = project.simulated_gains;
    elements.modalConcerns.textContent = project.concerns_dependencies;
    elements.modalIssueLink.href = issueUrl;

    // Escopo
    elements.modalScopeList.innerHTML = (project.initial_scope || [])
      .map(item => `<li>${escapeHtml(item)}</li>`)
      .join('');

    // Canais
    elements.modalChannelsList.innerHTML = (project.channels_integrations || [])
      .map(item => `<li>${escapeHtml(item)}</li>`)
      .join('');

    // Validações
    elements.modalValidationList.innerHTML = (project.validation_points || [])
      .map(item => `<li>${escapeHtml(item)}</li>`)
      .join('');

    // Prompt de Execução Futura
    const promptText = generateFuturePromptText(project);
    elements.modalPromptText.textContent = promptText;

    // Resetar para a primeira aba
    switchTab('tab-overview');

    // Exibir modal
    elements.projectModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    elements.projectModal.style.display = 'none';
    document.body.style.overflow = '';
    state.selectedProject = null;
  }

  /**
   * Alternador de abas no modal
   */
  function switchTab(targetTabId) {
    elements.modalTabs.forEach(btn => {
      const tabId = btn.getAttribute('data-tab');
      if (tabId === targetTabId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    elements.modalTabContents.forEach(content => {
      if (content.id === targetTabId) {
        content.classList.add('active');
      } else {
        content.classList.remove('active');
      }
    });
  }

  /**
   * Gera o texto do prompt de execução futura padronizado
   */
  function generateFuturePromptText(p) {
    return `Você é o agente responsável por executar a fase dedicada de implantação técnica e comunicação global do projeto "${p.title}" do StudioIA360 (marca cujo slogan é "Tecnologia é SIMPLICIDADE a seu favor").

Execute com rigor as etapas a seguir para este projeto:

1. Repositório GitHub Dedicado:
   - Crie o repositório dedicado com o slug técnico "${p.slug}" na conta GitHub autorizada (@marcusmaglia-dot).
   - Verifique primeiro se o repositório já existe. Caso exista e corresponda com certeza ao mesmo projeto, reutilize-o preservando o histórico existente; nunca destrua dados sem autorização.
   - Adicione os arquivos fundamentais de arquitetura, documentação e estrutura inicial do projeto.

2. Copywriting Público em Inglês Internacional (Global Audience):
   - Redija os textos de divulgação institucional e produto em inglês natural, fluido e profissional voltado a uma audiência global, preservando o valor da simplicidade do StudioIA360.
   - Inclua no pacote:
     * Product Name & Tagline em inglês.
     * Hero Headline & Subheadline de alto impacto comercial.
     * Seção Problem vs Solution explicando o contexto operacional.
     * Lista de Key Benefits & Core Features baseadas no escopo técnico.
     * Audience & Target Use Cases.
     * Chamadas para Ação (CTAs) e FAQ com no mínimo 4 perguntas estratégicas.
     * SEO Title (máx 60 caracteres) e Meta Description (máx 160 caracteres).
     * Microcopy para componentes essenciais de interface.

3. Prompt para Geração da Imagem Principal (Hero Image):
   - Elabore um prompt visual detalhado para geradores de imagem generativa de alta fidelidade descrevendo o conceito hero do "${p.title}".
   - Defina iluminação, composição espacial, perspectiva contemporânea, paleta de cores elegantes (dark/tech ou clean profissional conforme a vertical), enquadramento de câmera e espaço negativo reservado para textos e tipografia hero.
   - Evite textos ilegíveis, logotipos inventados ou elementos que descaracterizem a qualidade de estúdio profissional.

4. Documentação README.md do Repositório Dedicado:
   - Crie um arquivo README.md estruturado contendo:
     * Título oficial e posicionamento do "${p.title}".
     * Descrição, público-alvo (${p.target_audience}) e problema endereçado.
     * Escopo inicial de funcionalidades e integrações planejadas.
     * Respeito às métricas: descreva ganhos numéricos (como "${p.simulated_gains}") expressamente como estimativas ilustrativas ou metas a validar em testes piloto, nunca como resultados comprovados pré-existentes.
     * Premissas técnicas, considerações éticas, LGPD/privacidade e próximos passos.
     * Link de rastreabilidade de volta para a Issue central no repositório marcusmaglia-dot/portfolio-studioia360.

5. Fechamento e Registro na Issue:
   - Comente nesta Issue original informando a conclusão, com o link do repositório criado "${p.slug}" e um resumo conciso dos artefatos entregues.`;
  }

  /**
   * Copiar Prompt com Feedback
   */
  function copyPromptToClipboard() {
    const text = elements.modalPromptText.textContent;
    navigator.clipboard.writeText(text).then(() => {
      elements.copyBtnText.textContent = 'Copiado!';
      showToast('Prompt copiado para a área de transferência!');
      setTimeout(() => {
        elements.copyBtnText.textContent = 'Copiar Prompt';
      }, 2500);
    }).catch(err => {
      console.error('Falha ao copiar:', err);
    });
  }

  /**
   * Exibe notificação Toast
   */
  function showToast(msg) {
    elements.toast.textContent = msg;
    elements.toast.classList.add('show');
    setTimeout(() => {
      elements.toast.classList.remove('show');
    }, 3000);
  }

  /**
   * Registra os ouvintes de eventos da página
   */
  function setupEventListeners() {
    // Busca com debounce leve
    let searchTimeout;
    elements.searchInput.addEventListener('input', (e) => {
      clearTimeout(searchTimeout);
      const val = e.target.value;
      elements.clearSearchBtn.style.display = val ? 'inline-block' : 'none';
      searchTimeout = setTimeout(() => {
        state.searchQuery = val;
        applyFiltersAndRender();
      }, 150);
    });

    // Limpar busca
    elements.clearSearchBtn.addEventListener('click', () => {
      elements.searchInput.value = '';
      elements.clearSearchBtn.style.display = 'none';
      state.searchQuery = '';
      applyFiltersAndRender();
      elements.searchInput.focus();
    });

    // Ordenação
    elements.sortSelect.addEventListener('change', (e) => {
      state.sortMode = e.target.value;
      applyFiltersAndRender();
    });

    // Resetar filtros
    function resetAllFilters() {
      state.activeVertical = 'ALL';
      state.searchQuery = '';
      state.sortMode = 'default';
      elements.searchInput.value = '';
      elements.clearSearchBtn.style.display = 'none';
      elements.sortSelect.value = 'default';
      renderVerticalChips();
      applyFiltersAndRender();
    }

    elements.resetFiltersBtn.addEventListener('click', resetAllFilters);
    elements.btnEmptyReset.addEventListener('click', resetAllFilters);

    // Modal Events
    elements.modalCloseBtn.addEventListener('click', closeModal);
    elements.modalCloseFooterBtn.addEventListener('click', closeModal);

    elements.projectModal.addEventListener('click', (e) => {
      if (e.target === elements.projectModal) {
        closeModal();
      }
    });

    // Tecla ESC para fechar modal e '/' para buscar
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && elements.projectModal.style.display === 'flex') {
        closeModal();
      } else if (e.key === '/' && document.activeElement !== elements.searchInput && elements.projectModal.style.display !== 'flex') {
        e.preventDefault();
        elements.searchInput.focus();
      }
    });

    // Abas do Modal
    elements.modalTabs.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab');
        switchTab(target);
      });
    });

    // Copiar Prompt
    elements.btnCopyPrompt.addEventListener('click', copyPromptToClipboard);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Inicializa a aplicação quando o DOM estiver pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
