# PRD - Formulário Diagnóstico para Planejamento de Estudos

## 1. Visão geral

O produto é um formulário diagnóstico para pessoas que estudam ou querem
começar a estudar para concursos públicos.

Ele coleta dados sobre rotina, disponibilidade, energia, experiência, base nas
disciplinas, edital, banca, orçamento, ambiente e limitações práticas. Com
essas respostas, o sistema gera ou permite gerar um diagnóstico inicial para
apoiar um planejamento de estudos realista.

Princípio central: o plano deve partir da rotina real do estudante, não da
rotina ideal que ele gostaria de ter.

## 2. Problema e objetivo

Muitos estudantes começam a preparação perguntando apenas "qual concurso eu
quero?". Antes disso, precisam entender quanto tempo realmente têm, em quais
horários rendem melhor, quais limitações enfrentam e qual maturidade possuem.

Sem esse diagnóstico, é comum que o estudante:

- monte um plano inviável;
- superestime a própria disponibilidade;
- ignore sono, cansaço, trabalho, família e deslocamento;
- escolha métodos incompatíveis com sua base atual;
- abandone os estudos por frustração ou excesso de carga.

O objetivo é coletar dados suficientes para classificar o perfil do estudante
e orientar um plano inicial possível, sustentável e personalizado.

## 3. Público-alvo

Público primário:

- pessoas que desejam começar a estudar para concurso público;
- pessoas que ainda não sabem por onde iniciar.

Público secundário:

- estudantes sem constância ou planejamento;
- estudantes que não revisam ou não resolvem questões;
- estudantes cansados, desmotivados ou com baixo desempenho;
- estudantes em fase pré-edital ou pós-edital.

Perfis contemplados:

- iniciante absoluto;
- estudante que tentou estudar e abandonou;
- estudante com rotina de trabalho;
- estudante com família ou múltiplas obrigações;
- estudante com pouco tempo disponível;
- estudante que precisa melhorar desempenho.

## 4. Escopo do MVP

Incluído:

- formulário dividido em blocos temáticos;
- orientação inicial sobre sinceridade das respostas;
- perguntas condicionais básicas;
- confirmação após o bloco de rotina;
- confirmação final antes do envio;
- coleta de rotina, trabalho, deslocamento, sono e energia;
- coleta de escolaridade, histórico e experiência com concursos;
- coleta de objetivo, edital, banca, disciplinas e desempenho;
- coleta de preferências, métodos, ambiente, orçamento e barreiras;
- diagnóstico manual ou semiautomático;
- visualização ou exportação das respostas e do diagnóstico.

Fora do MVP:

- login ou área do aluno;
- dashboard completo;
- cronograma automático completo;
- acompanhamento diário;
- notificações;
- integração com plataformas de questões;
- importação automática de editais;
- pagamento dentro da plataforma;
- inteligência artificial obrigatória.

## 5. Jornada resumida

1. O usuário acessa o formulário por link, página ou sistema interno.
2. O sistema explica o objetivo do diagnóstico.
3. O usuário confirma que responderá com base na rotina atual.
4. O usuário responde blocos temáticos com lógica condicional.
5. Após o bloco de rotina, confirma a sinceridade das respostas.
6. Antes do envio, revisa e confirma as respostas.
7. O sistema gera ou permite gerar o diagnóstico.
8. Um analista ou sistema usa o diagnóstico para montar o plano inicial.

## 6. Requisitos funcionais

### RF01 - Orientação inicial

O sistema deve exibir uma orientação antes da primeira pergunta.

Critérios:

- aparecer antes dos blocos do formulário;
- mencionar expressamente "realidade atual";
- alertar que respostas idealizadas prejudicam o planejamento;
- exigir ação consciente para iniciar.

Mensagem recomendada:

> Este formulário tem como objetivo entender sua realidade atual para construir
> um planejamento de estudos possível e eficiente. Responda com base na sua
> rotina de hoje, não na rotina ideal que você pretende ter.

### RF02 - Coleta adaptativa

O sistema deve apresentar blocos temáticos e ocultar perguntas irrelevantes.

Critérios:

- cada bloco tem objetivo claro;
- perguntas condicionais ocultam campos que não se aplicam;
- o usuário pode voltar e revisar respostas;
- campos abertos são usados apenas quando agregam contexto;
- múltipla escolha é usada sempre que suficiente.

### RF03 - Confirmações de sinceridade

O sistema deve reforçar que as respostas precisam representar a rotina real.

Critérios:

- confirmação obrigatória após o bloco de rotina;
- confirmação obrigatória antes do envio;
- possibilidade de voltar e corrigir respostas;
- linguagem sem tom culpabilizador.

Mensagem após rotina:

> Você respondeu este bloco com base na sua rotina real? Essas informações
> serão decisivas para definir horários, carga de estudo e tipo de atividade.
> Caso tenha respondido com base em uma rotina idealizada, volte e ajuste.

Mensagem final:

> Antes de enviar, revise suas respostas. Um planejamento eficiente depende de
> informações verdadeiras. É melhor começar com um plano simples e possível do
> que com um plano idealizado que será abandonado.

### RF04 - Diagnóstico final

O sistema deve gerar ou permitir gerar um diagnóstico com:

- disponibilidade real de estudo;
- maturidade como estudante;
- risco de abandono;
- melhor estratégia inicial;
- tipo de planejamento recomendado;
- melhor horário para estudo pesado;
- melhor horário para revisão;
- uso possível de horários alternativos;
- principais limitações;
- recomendações iniciais de método.

Critérios:

- o diagnóstico é baseado nas respostas;
- cada classificação tem critérios objetivos;
- o resultado pode ser visualizado ou exportado;
- inconsistências podem ser sinalizadas sem bloquear o envio.

### RF05 - Privacidade e dados sensíveis

O sistema deve informar a finalidade dos dados e evitar uso inadequado de
informações pessoais ou de saúde.

Critérios:

- perguntas de saúde são opcionais;
- perguntas sensíveis incluem "prefiro não responder";
- dados de saúde são tratados apenas como impacto na rotina;
- o sistema não emite diagnóstico médico, julgamento ou prescrição;
- respostas não são expostas publicamente;
- o tratamento de dados considera a LGPD.

## 7. Blocos do formulário

Esta seção é a fonte única das perguntas, dados coletados e uso diagnóstico.

### 7.1 Abertura e consentimento

Objetivo: alinhar expectativa e reforçar sinceridade.

Coletar:

- confirmação de leitura;
- aceite de responder com base na rotina atual.

Usar para:

- registrar que a orientação inicial foi apresentada;
- liberar início do formulário.

Regras:

- deve aparecer antes das perguntas;
- deve exigir ação consciente do usuário.

### 7.2 Rotina, trabalho e intervalos

Objetivo: entender compromissos fixos e carga real do dia.

Coletar:

- trabalha atualmente;
- tipo e modalidade de trabalho;
- dias e horários de trabalho;
- desgaste físico, mental ou ambos;
- horário e duração do almoço ou intervalo principal;
- existência de tempo livre real no intervalo;
- possibilidade de revisão no intervalo;
- variação conforme o dia.

Usar para:

- disponibilidade real;
- previsibilidade da rotina;
- risco de abandono;
- horários inviáveis para estudo pesado;
- oportunidades de revisão curta.

Regras:

- se não trabalha, ocultar perguntas de jornada;
- registrar trabalho presencial, remoto, autônomo ou eventual;
- não presumir rotina padrão de segunda a sexta;
- não presumir que intervalo é tempo livre;
- permitir opção "depende do dia".

### 7.3 Deslocamento

Objetivo: mapear tempo de trajeto e estudo leve possível.

Coletar:

- horários de saída e chegada;
- duração aproximada do deslocamento;
- meio de transporte;
- possibilidade de áudio, leitura, flashcards ou revisão.

Usar para:

- identificar tempo alternativo;
- estimar desgaste;
- recomendar estudo leve.

Regras:

- permitir home office;
- diferenciar quem dirige de quem usa transporte público ou carona;
- nunca tratar deslocamento como horário obrigatório de estudo.

### 7.4 Sono e energia

Objetivo: identificar horários de maior rendimento e risco de fadiga.

Coletar:

- horário de dormir;
- horário de acordar;
- qualidade e suficiência do sono;
- período de maior disposição;
- período de maior cansaço;
- dias mais produtivos;
- dias mais críticos;
- sensação ao final da semana.

Usar para:

- melhor horário para estudo pesado;
- melhor horário para revisão;
- risco de abandono por fadiga;
- incompatibilidade entre carga desejada e descanso.

Regras:

- aceitar rotinas noturnas ou jornadas atípicas;
- permitir opção "varia muito";
- não recomendar horários incompatíveis com o sono declarado.

### 7.5 Formação e histórico com concursos

Objetivo: entender base pedagógica e maturidade em concursos.

Coletar:

- escolaridade;
- última experiência formal de estudo;
- tempo desde o último estudo formal;
- matérias favoritas e difíceis;
- experiência anterior com concursos;
- concurso, cargo ou área já estudados;
- tempo de estudo anterior;
- provas realizadas;
- desempenho percebido;
- maior dificuldade;
- abandono anterior e motivo.

Usar para:

- maturidade como estudante;
- risco de abandono;
- necessidade de retomada ou preparação do zero;
- dificuldade provável em disciplinas de base.

Regras:

- contemplar ensino médio, técnico, superior e pós-graduação;
- diferenciar afinidade de domínio;
- diferenciar quem nunca estudou de quem já tentou;
- permitir aprovação, reprovação ou quase aprovação.

### 7.6 Objetivo, edital e banca

Objetivo: entender alvo, urgência e conhecimento do concurso.

Coletar:

- concurso, cargo ou área de interesse;
- motivação para estudar;
- restrição geográfica;
- existência de edital específico;
- edital publicado ou não;
- data da prova;
- leitura do edital;
- conhecimento da banca;
- experiência com questões da banca.

Usar para:

- cenário pré-edital ou pós-edital;
- urgência;
- risco por prazo curto;
- necessidade de priorização estratégica.

Regras:

- permitir campo aberto para cargo específico;
- permitir opção "não sei o que é banca";
- alertar quando há edital publicado e o usuário não sabe a banca;
- alertar quando a prova está próxima e a base é baixa.

### 7.7 Base, disciplinas e desempenho

Objetivo: mapear nível atual e evidência objetiva de desempenho.

Disciplinas mínimas:

- Língua Portuguesa;
- Matemática básica;
- Raciocínio lógico;
- Informática;
- Direito Constitucional;
- Direito Administrativo;
- Administração Pública;
- Atualidades;
- Redação;
- Conhecimentos específicos.

Escala por disciplina:

- nunca estudei;
- base fraca;
- base razoável;
- boa base;
- base avançada.

Coletar:

- autoavaliação por disciplina;
- disciplinas específicas do concurso;
- matérias nunca estudadas;
- matérias críticas;
- percentual de acertos, quando existir;
- matérias com mais erros;
- hábito de análise de erros.

Usar para:

- priorização do plano;
- recomendação de base teórica;
- identificação de risco em pós-edital;
- maturidade e qualidade do método.

Regras:

- diferenciar nunca estudado de base fraca;
- permitir resposta "não sei" para percentual de acertos;
- percentual de acertos é indicador, não julgamento isolado.

### 7.8 Preferências e métodos

Objetivo: identificar formatos compatíveis e maturidade metodológica.

Coletar:

- preferência por videoaula, PDF, livro, áudio ou questões;
- dificuldade de leitura;
- facilidade com aulas;
- curso ou plataforma utilizada;
- familiaridade com Pomodoro;
- tempo médio de foco;
- uso de revisão, questões, simulados e análise de erros.

Usar para:

- melhor estratégia inicial;
- risco de método incompatível;
- necessidade de revisão, questões ou simulados.

Regras:

- permitir múltiplos formatos;
- permitir "ainda não sei";
- identificar estudo apenas teórico sem questões.

### 7.9 Ambiente, orçamento e barreiras

Objetivo: mapear limitações práticas, financeiras e familiares.

Coletar:

- local fixo de estudo;
- ruído e interrupções;
- equipamentos e internet;
- orçamento mensal;
- materiais disponíveis e atualização;
- apoio das pessoas próximas;
- responsabilidades familiares;
- filhos, familiares, cônjuge e demandas domésticas;
- trabalho fora do horário;
- redes sociais ou outras distrações.

Usar para:

- limitações práticas;
- restrições financeiras;
- risco de abandono;
- recomendação de recursos gratuitos, offline ou blocos curtos.

Regras:

- permitir múltipla seleção para barreiras;
- permitir "não posso investir no momento";
- evitar recomendações incompatíveis com orçamento inexistente.

### 7.10 Saúde e fatores sensíveis

Objetivo: considerar fatores pessoais sem diagnosticar o usuário.

Coletar:

- fator de saúde ou rotina que impacta estudos;
- opção "prefiro não responder";
- observação pessoal relevante.

Usar para:

- possível impacto na rotina;
- recomendação de plano conservador;
- sinalização para análise humana cuidadosa.

Regras:

- explicar finalidade antes da pergunta;
- não solicitar detalhes desnecessários;
- não exibir diagnóstico médico.

Mensagem recomendada:

> As próximas perguntas podem envolver fatores pessoais que influenciam sua
> rotina. O objetivo não é avaliar ou diagnosticar você, mas evitar a criação
> de um planejamento incompatível com sua realidade.

### 7.11 Organização e compromisso mínimo

Objetivo: avaliar execução, constância e carga mínima sustentável.

Coletar:

- organização pessoal;
- cumprimento de planejamentos;
- maior dificuldade de constância;
- histórico de abandono;
- mínimo possível em semana ruim;
- preferência por começar leve ou intenso;
- experiência anterior com rotina intensa.

Usar para:

- risco de abandono;
- plano conservador;
- rotina mínima;
- alerta de expectativa irreal de carga.

Regras:

- diferenciar falta de tempo de falta de método;
- permitir "nunca tive planejamento claro";
- favorecer plano sustentável quando houver abandono anterior.

### 7.12 Confirmação final

Objetivo: validar que o envio representa a realidade atual.

Coletar:

- confirmação final de sinceridade;
- aceite de envio;
- sinal de revisão ou edição antes do envio.

Regras:

- confirmação final é obrigatória;
- o sistema deve permitir retorno para edição antes do envio.

## 8. Lógica condicional

Trabalho:

- se não trabalha, ocultar perguntas de jornada;
- se trabalha em home office, ocultar deslocamento obrigatório;
- em home office, perguntar sobre interrupções em casa.

Edital:

- se publicado, perguntar data da prova, banca e leitura do edital;
- se publicado, perguntar percentual atual de acertos;
- se não publicado, perguntar área e concursos de interesse;
- se não publicado, classificar como pré-edital.

Experiência:

- se nunca estudou, ocultar detalhes de provas anteriores;
- se nunca estudou, perguntar se conhece edital, banca e revisão;
- se já estudou, perguntar concursos, tempo, métodos e interrupção.

Orçamento:

- se não pode investir, recomendar recursos gratuitos e públicos;
- se não pode investir, evitar cursos pagos como sugestão principal;
- se já possui plataforma, considerar a plataforma na recomendação.

Saúde:

- se informar fator sensível, não emitir diagnóstico médico;
- classificar apenas como possível impacto na rotina;
- recomendar planejamento conservador quando fizer sentido.

## 9. Modelo diagnóstico

### 9.1 Disponibilidade

Baixa:

- até 1 hora por dia em dias úteis;
- pouco ou nenhum tempo no fim de semana;
- muitos compromissos fixos;
- sono ruim ou deslocamento longo.

Média:

- entre 1 e 2 horas por dia;
- algum tempo no fim de semana;
- rotina parcialmente previsível.

Alta:

- acima de 2 horas por dia;
- fins de semana disponíveis;
- rotina com boa previsibilidade.

### 9.2 Maturidade como estudante

Iniciante absoluto:

- nunca estudou para concurso;
- não conhece edital ou banca;
- não revisa;
- não resolve questões.

Iniciante com experiência:

- já tentou estudar;
- conhece alguns materiais;
- tem pouca constância;
- usa pouco questões e revisão.

Intermediário:

- já estudou por período relevante;
- resolve questões;
- conhece banca;
- já fez prova;
- tem alguma noção de revisão.

Avançado:

- possui rotina;
- mede desempenho;
- resolve questões por banca;
- analisa erros;
- faz simulados;
- conhece edital.

### 9.3 Risco de abandono

Baixo:

- rotina previsível;
- sono razoável;
- boa organização;
- apoio familiar;
- histórico de constância;
- plano compatível com disponibilidade.

Médio:

- alguma instabilidade;
- cansaço frequente;
- dificuldade moderada de organização;
- interrupções ocasionais;
- histórico de abandono parcial.

Alto:

- rotina imprevisível;
- sono ruim;
- muitas interrupções;
- baixa energia;
- fator sensível relevante;
- ausência de apoio;
- abandono recorrente;
- expectativa irreal de carga.

### 9.4 Estratégia inicial

Videoaula com questões guiadas:

- para iniciantes;
- para dificuldade de leitura;
- para baixa familiaridade com disciplinas jurídicas.

PDF com questões:

- para boa autonomia;
- para boa leitura;
- para tempo limitado.

Revisão com questões:

- para estudantes intermediários;
- para quem já tem base;
- para melhorar desempenho medido.

Base teórica antes de questões intensas:

- para base muito fraca;
- para matérias nunca estudadas;
- para baixo percentual de acertos.

Ciclo leve de adaptação:

- para alto risco de abandono;
- para rotina instável;
- para sono ruim;
- para retorno após longo período parado.

### 9.5 Tipo de planejamento

Pré-edital longo:

- sem edital publicado;
- mais de 6 meses de horizonte;
- foco em base, constância e evolução gradual.

Pré-edital enxuto:

- edital provável;
- área definida;
- tempo moderado;
- foco em disciplinas recorrentes.

Pós-edital emergencial:

- edital publicado;
- prova em até 90 dias;
- foco em priorização, questões, revisão e corte estratégico.

Retomada de estudos:

- já estudou antes;
- parou por algum tempo;
- precisa reconstruir rotina.

Preparação do zero:

- nunca estudou;
- não conhece edital;
- não conhece disciplinas;
- precisa de orientação inicial completa.

## 10. Validação, usabilidade e acessibilidade

Campos obrigatórios:

- confirmação inicial;
- trabalha ou não;
- horário de sono;
- disponibilidade em dias úteis;
- escolaridade;
- experiência com concursos;
- objetivo com concurso;
- confirmação final.

Campos opcionais:

- saúde;
- renda ou orçamento detalhado;
- telefone;
- observações pessoais.

Regras de horário e texto:

- horários aceitam formato HH:MM;
- rotinas noturnas devem ser aceitas;
- respostas incomuns não devem ser bloqueadas automaticamente;
- campos abertos devem ter limite entre 300 e 1.000 caracteres.

Usabilidade:

- blocos organizados por tema;
- perguntas curtas;
- indicador de progresso;
- possibilidade de voltar e revisar;
- tempo ideal de preenchimento entre 12 e 20 minutos.

Acessibilidade:

- labels claros;
- contraste adequado;
- navegação por teclado;
- botões adequados em celular;
- erros não dependem apenas de cor;
- mensagens de validação compreensíveis.

## 11. Alertas de inconsistência

O sistema pode sinalizar inconsistências sem bloquear o envio.

Alertas recomendados:

- usuário dorme 4 horas e quer estudar 4 horas por dia;
- usuário informa alta disponibilidade e muitos compromissos fixos;
- usuário nunca resolve questões e informa percentual alto de acertos;
- usuário está em pós-edital e não sabe a banca;
- usuário tem prova em menos de 30 dias e nunca leu o edital;
- usuário relata alto cansaço noturno e pretende estudar apenas à noite.

## 12. Exemplo de saída diagnóstica

Classificação:

- disponibilidade: média;
- maturidade: iniciante com experiência;
- risco de abandono: médio;
- estratégia inicial: ciclo leve com videoaula e questões guiadas;
- tipo de planejamento: preparação pré-edital enxuta.

Observações:

- há rotina de trabalho e algum tempo livre no almoço;
- pode haver revisão durante deslocamento;
- manhã é o período de maior energia;
- noite apresenta maior cansaço.

Recomendações iniciais:

- iniciar com carga conservadora;
- usar almoço para revisão curta;
- usar deslocamento para áudio ou flashcards, se aplicável;
- evitar estudo teórico pesado em horários de cansaço;
- resolver questões desde o início, ainda que em baixa quantidade;
- revisar erros semanalmente;
- medir percentual de acertos após duas semanas.

## 13. Métricas de sucesso

Preenchimento:

- taxa de conclusão do formulário;
- tempo médio de preenchimento;
- taxa de abandono por bloco;
- percentual de usuários que revisam respostas antes do envio.

Qualidade diagnóstica:

- percentual de formulários com dados suficientes para planejamento;
- percentual de respostas inconsistentes;
- percentual de usuários classificados por maturidade;
- percentual de usuários classificados por disponibilidade;
- percentual de usuários com risco de abandono identificado.

Resultado:

- taxa de conversão para planejamento;
- taxa de adesão ao plano inicial;
- taxa de continuidade após 7 dias;
- taxa de continuidade após 30 dias;
- redução de abandono por planejamento excessivo;
- satisfação com o diagnóstico recebido.

## 14. Backlog futuro

Itens fora do MVP:

- pontuação automática avançada;
- geração automática de ciclo semanal;
- distribuição automática de matérias;
- integração com banco de questões;
- importação ou leitura assistida de edital;
- área do estudante;
- acompanhamento semanal de execução;
- reavaliação após 7, 15 e 30 dias;
- exportação em PDF;
- dashboard de evolução;
- integração com IA.

## 15. Critérios gerais de aceite

O produto será considerado adequado quando:

- coletar dados suficientes para um planejamento individualizado;
- orientar o usuário a responder com base na rotina real;
- identificar disponibilidade, energia, limitações e maturidade;
- diferenciar pré-edital e pós-edital;
- considerar edital, banca e prazo;
- considerar base, desempenho, orçamento e ambiente;
- identificar risco de abandono;
- recomendar estratégia inicial compatível;
- permitir análise manual ou automatizada;
- entregar saída diagnóstica clara;
- respeitar privacidade e não emitir diagnóstico médico.

## 16. Conclusão

O formulário é uma etapa diagnóstica anterior ao planejamento de estudos. Seu
diferencial é não começar pela matéria ou pelo concurso, mas pela realidade
concreta do estudante.

Um bom plano deve refletir o que a pessoa consegue executar hoje, com espaço
para evolução gradual.
