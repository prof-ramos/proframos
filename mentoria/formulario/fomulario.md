# Formulário Diagnóstico para Planejamento de Estudos

Este arquivo descreve as perguntas, tipos de resposta, alternativas e regras
condicionais do formulário diagnóstico.

## Convenções

- `Obrigatória`: a pergunta precisa ser respondida para avançar.
- `Opcional`: a pergunta pode ser pulada.
- `Condicional`: a pergunta aparece apenas quando a regra indicada for atendida.
- Campos abertos devem ter limite entre 300 e 1.000 caracteres, conforme o
  contexto.
- Perguntas sensíveis devem permitir a opção "Prefiro não responder".

## Bloco 1 - Abertura e consentimento

### P01 - Confirmação de leitura

Texto:

> Este formulário tem como objetivo entender sua realidade atual para construir
> um planejamento de estudos possível e eficiente. Responda com base na sua
> rotina de hoje, não na rotina ideal que você pretende ter.

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Respostas possíveis:

- Li e entendi.

### P02 - Compromisso com a rotina real

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Você confirma que responderá com base na sua rotina atual?

Respostas possíveis:

- Sim, vou responder com base na minha rotina atual.
- Ainda não tenho certeza.

Regra:

- Se responder "Ainda não tenho certeza", exibir orientação para responder com
  base no presente antes de permitir avançar.

## Bloco 2 - Rotina, trabalho e intervalos

### P03 - Trabalho atual

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Você trabalha atualmente?

Respostas possíveis:

- Sim.
- Não.
- Trabalho eventualmente.

### P04 - Modalidade de trabalho

Tipo: escolha única.

Obrigatoriedade: condicional.

Condição: exibir se P03 for "Sim" ou "Trabalho eventualmente".

Pergunta:

> Qual é a modalidade principal do seu trabalho?

Respostas possíveis:

- Presencial.
- Remoto.
- Híbrido.
- Autônomo.
- Eventual.
- Outro.

### P05 - Tipo de desgaste do trabalho

Tipo: escolha múltipla.

Obrigatoriedade: condicional.

Condição: exibir se P03 for "Sim" ou "Trabalho eventualmente".

Pergunta:

> Que tipo de desgaste seu trabalho costuma gerar?

Respostas possíveis:

- Físico.
- Mental.
- Emocional.
- Pouco desgaste.
- Varia muito.

### P06 - Dias de trabalho

Tipo: escolha múltipla.

Obrigatoriedade: condicional.

Condição: exibir se P03 for "Sim" ou "Trabalho eventualmente".

Pergunta:

> Quais dias da semana você costuma trabalhar?

Respostas possíveis:

- Segunda-feira.
- Terça-feira.
- Quarta-feira.
- Quinta-feira.
- Sexta-feira.
- Sábado.
- Domingo.
- Varia conforme a semana.

### P07 - Horário de início do trabalho

Tipo: horário.

Obrigatoriedade: condicional.

Condição: exibir se P03 for "Sim" ou "Trabalho eventualmente".

Pergunta:

> Qual é o horário habitual de início do trabalho?

Respostas possíveis:

- Campo de horário no formato HH:MM.
- Varia muito.

### P08 - Horário de término do trabalho

Tipo: horário.

Obrigatoriedade: condicional.

Condição: exibir se P03 for "Sim" ou "Trabalho eventualmente".

Pergunta:

> Qual é o horário habitual de término do trabalho?

Respostas possíveis:

- Campo de horário no formato HH:MM.
- Varia muito.

### P09 - Intervalo principal

Tipo: horário e duração.

Obrigatoriedade: obrigatória.

Pergunta:

> Qual é o horário e a duração do seu almoço ou intervalo principal?

Respostas possíveis:

- Horário de início no formato HH:MM.
- Duração aproximada em minutos.
- Não tenho intervalo fixo.
- Varia conforme o dia.

### P10 - Tempo livre no intervalo

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Existe tempo livre real nesse intervalo?

Respostas possíveis:

- Sim, quase sempre.
- Sim, às vezes.
- Não.
- Depende do dia.

### P11 - Uso do intervalo para estudo

Tipo: escolha múltipla.

Obrigatoriedade: obrigatória.

Pergunta:

> O que seria possível fazer nesse intervalo?

Respostas possíveis:

- Revisão curta.
- Flashcards.
- Leitura leve.
- Questões rápidas.
- Áudio.
- Nada, preciso descansar ou resolver outras coisas.
- Depende do dia.

## Bloco 3 - Deslocamento

### P12 - Existe deslocamento regular?

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Você tem deslocamento regular para trabalho, estudo ou compromisso fixo?

Respostas possíveis:

- Sim.
- Não.
- Apenas alguns dias.
- Trabalho em home office.

### P13 - Meio de transporte

Tipo: escolha múltipla.

Obrigatoriedade: condicional.

Condição: exibir se P12 for "Sim" ou "Apenas alguns dias".

Pergunta:

> Qual meio de transporte você usa com mais frequência?

Respostas possíveis:

- Dirigindo.
- Transporte público.
- Carona.
- Aplicativo ou táxi.
- Bicicleta.
- Caminhada.
- Outro.

### P14 - Horários de deslocamento

Tipo: horário.

Obrigatoriedade: condicional.

Condição: exibir se P12 for "Sim" ou "Apenas alguns dias".

Pergunta:

> Quais são os horários aproximados de saída e chegada?

Respostas possíveis:

- Saída de casa no formato HH:MM.
- Chegada ao destino no formato HH:MM.
- Saída do destino no formato HH:MM.
- Chegada em casa no formato HH:MM.
- Varia muito.

### P15 - Estudo durante deslocamento

Tipo: escolha múltipla.

Obrigatoriedade: condicional.

Condição: exibir se P12 for "Sim" ou "Apenas alguns dias".

Pergunta:

> O que você conseguiria fazer durante o deslocamento?

Respostas possíveis:

- Ouvir aula ou áudio.
- Revisar flashcards.
- Ler.
- Resolver questões.
- Apenas descansar.
- Nada, porque dirijo ou preciso de atenção.
- Depende do dia.

## Bloco 4 - Sono e energia

### P16 - Horário de dormir

Tipo: horário.

Obrigatoriedade: obrigatória.

Pergunta:

> Que horas você costuma dormir?

Respostas possíveis:

- Campo de horário no formato HH:MM.
- Varia muito.

### P17 - Horário de acordar

Tipo: horário.

Obrigatoriedade: obrigatória.

Pergunta:

> Que horas você costuma acordar?

Respostas possíveis:

- Campo de horário no formato HH:MM.
- Varia muito.

### P18 - Qualidade do sono

Tipo: escala.

Obrigatoriedade: obrigatória.

Pergunta:

> Como você avalia a qualidade do seu sono?

Respostas possíveis:

- Muito ruim.
- Ruim.
- Regular.
- Boa.
- Muito boa.

### P19 - Suficiência do sono

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Você sente que dorme o suficiente?

Respostas possíveis:

- Sim.
- Não.
- Às vezes.
- Varia muito.

### P20 - Período de maior energia

Tipo: escolha múltipla.

Obrigatoriedade: obrigatória.

Pergunta:

> Em quais períodos você costuma ter mais energia?

Respostas possíveis:

- Madrugada.
- Manhã.
- Almoço.
- Tarde.
- Noite.
- Varia muito.

### P21 - Período de maior cansaço

Tipo: escolha múltipla.

Obrigatoriedade: obrigatória.

Pergunta:

> Em quais períodos você costuma estar mais cansado?

Respostas possíveis:

- Madrugada.
- Manhã.
- Almoço.
- Tarde.
- Noite.
- Varia muito.

### P22 - Energia por dia da semana

Tipo: escolha múltipla.

Obrigatoriedade: obrigatória.

Pergunta:

> Em quais dias você costuma ter melhor energia para estudar?

Respostas possíveis:

- Segunda-feira.
- Terça-feira.
- Quarta-feira.
- Quinta-feira.
- Sexta-feira.
- Sábado.
- Domingo.
- Varia muito.

## Bloco 5 - Formação e histórico com concursos

### P23 - Escolaridade

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Qual é seu nível de escolaridade?

Respostas possíveis:

- Ensino fundamental incompleto.
- Ensino fundamental completo.
- Ensino médio incompleto.
- Ensino médio completo.
- Técnico.
- Superior incompleto.
- Superior completo.
- Pós-graduação.
- Mestrado ou doutorado.

### P24 - Última experiência formal de estudo

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Qual foi sua última experiência formal de estudo?

Respostas possíveis:

- Ensino médio.
- Curso técnico.
- Faculdade.
- Pós-graduação.
- Curso livre.
- Preparação para concurso.
- Não lembro com precisão.

### P25 - Tempo desde o último estudo formal

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Há quanto tempo você concluiu ou interrompeu essa experiência?

Respostas possíveis:

- Menos de 6 meses.
- De 6 meses a 1 ano.
- De 1 a 3 anos.
- De 3 a 5 anos.
- Mais de 5 anos.
- Ainda estou estudando.

### P26 - Matérias de afinidade

Tipo: texto aberto.

Obrigatoriedade: opcional.

Pergunta:

> Quais matérias você sempre teve mais facilidade ou afinidade?

Respostas possíveis:

- Campo aberto.

### P27 - Matérias de dificuldade

Tipo: texto aberto.

Obrigatoriedade: opcional.

Pergunta:

> Quais matérias sempre causaram mais dificuldade?

Respostas possíveis:

- Campo aberto.

### P28 - Experiência com concursos

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Você já estudou para concurso público?

Respostas possíveis:

- Nunca estudei.
- Já comecei, mas abandonei.
- Já estudei por pouco tempo.
- Já estudei por alguns meses.
- Já estudei por mais de 1 ano.
- Estudo atualmente.

### P29 - Concurso, cargo ou área anterior

Tipo: texto aberto.

Obrigatoriedade: condicional.

Condição: exibir se P28 não for "Nunca estudei".

Pergunta:

> Para qual concurso, cargo ou área você já estudou?

Respostas possíveis:

- Campo aberto.

### P30 - Provas realizadas

Tipo: escolha única.

Obrigatoriedade: condicional.

Condição: exibir se P28 não for "Nunca estudei".

Pergunta:

> Você já realizou alguma prova de concurso?

Respostas possíveis:

- Sim, uma vez.
- Sim, algumas vezes.
- Sim, muitas vezes.
- Não.

### P31 - Resultado ou desempenho anterior

Tipo: escolha única.

Obrigatoriedade: condicional.

Condição: exibir se P30 começar com "Sim".

Pergunta:

> Como foi seu desempenho?

Respostas possíveis:

- Muito abaixo do esperado.
- Abaixo do esperado.
- Regular.
- Próximo da aprovação.
- Já fui aprovado.
- Não sei avaliar.

### P32 - Maior dificuldade anterior

Tipo: escolha múltipla.

Obrigatoriedade: condicional.

Condição: exibir se P28 não for "Nunca estudei".

Pergunta:

> Qual foi sua maior dificuldade?

Respostas possíveis:

- Falta de tempo.
- Falta de constância.
- Falta de método.
- Dificuldade nas matérias.
- Falta de revisão.
- Poucas questões.
- Cansaço.
- Ansiedade ou pressão.
- Falta de orientação.
- Outra.

## Bloco 6 - Objetivo, edital e banca

### P33 - Concurso desejado

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Você já sabe qual concurso deseja?

Respostas possíveis:

- Sim, já tenho um concurso específico.
- Tenho uma área em mente.
- Ainda estou decidindo.
- Quero começar sem concurso definido.

### P34 - Cargo ou concurso específico

Tipo: texto aberto.

Obrigatoriedade: condicional.

Condição: exibir se P33 for "Sim, já tenho um concurso específico".

Pergunta:

> Qual é o concurso ou cargo desejado?

Respostas possíveis:

- Campo aberto.

### P35 - Área de interesse

Tipo: escolha múltipla.

Obrigatoriedade: obrigatória.

Pergunta:

> Quais áreas de concurso interessam a você?

Respostas possíveis:

- Administrativa.
- Tribunais.
- Fiscal.
- Controle.
- Segurança pública.
- Educação.
- Saúde.
- Bancária.
- Legislativa.
- Jurídica.
- Ainda não sei.
- Outra.

### P36 - Motivação principal

Tipo: escolha múltipla.

Obrigatoriedade: obrigatória.

Pergunta:

> Por que você quer estudar para concurso?

Respostas possíveis:

- Estabilidade.
- Melhor salário.
- Mudança de carreira.
- Realização pessoal.
- Pressão familiar.
- Necessidade financeira.
- Qualidade de vida.
- Outro motivo.

### P37 - Restrição geográfica

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Você aceitaria mudar de cidade ou estado?

Respostas possíveis:

- Sim.
- Não.
- Depende da oportunidade.
- Ainda não sei.

### P38 - Edital específico

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Você está estudando para um edital específico?

Respostas possíveis:

- Sim.
- Não.
- Ainda não sei.

### P39 - Edital publicado

Tipo: escolha única.

Obrigatoriedade: condicional.

Condição: exibir se P38 for "Sim".

Pergunta:

> O edital já foi publicado?

Respostas possíveis:

- Sim.
- Não.
- Não sei.

### P40 - Data da prova

Tipo: data.

Obrigatoriedade: condicional.

Condição: exibir se P39 for "Sim".

Pergunta:

> Qual é a data da prova?

Respostas possíveis:

- Campo de data.
- Ainda não sei.

### P41 - Leitura do edital

Tipo: escolha única.

Obrigatoriedade: condicional.

Condição: exibir se P39 for "Sim".

Pergunta:

> Você já leu o edital?

Respostas possíveis:

- Sim, inteiro.
- Sim, parcialmente.
- Ainda não.
- Não sei como ler edital.

### P42 - Conhecimento da banca

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Você sabe qual é a banca examinadora?

Respostas possíveis:

- Sim.
- Não.
- Não sei o que é banca.
- Ainda não foi definida.

### P43 - Nome da banca

Tipo: texto aberto.

Obrigatoriedade: condicional.

Condição: exibir se P42 for "Sim".

Pergunta:

> Qual é a banca examinadora?

Respostas possíveis:

- Campo aberto.

### P44 - Questões da banca

Tipo: escolha única.

Obrigatoriedade: condicional.

Condição: exibir se P42 for "Sim".

Pergunta:

> Você já resolveu questões dessa banca?

Respostas possíveis:

- Sim, muitas.
- Sim, algumas.
- Ainda não.
- Não sei filtrar questões por banca.

## Bloco 7 - Base, disciplinas e desempenho

### P45 - Autoavaliação por disciplina

Tipo: matriz.

Obrigatoriedade: obrigatória.

Pergunta:

> Como você avalia sua base nas disciplinas abaixo?

Linhas:

- Língua Portuguesa.
- Matemática básica.
- Raciocínio lógico.
- Informática.
- Direito Constitucional.
- Direito Administrativo.
- Administração Pública.
- Atualidades.
- Redação.
- Conhecimentos específicos.

Respostas possíveis por linha:

- Nunca estudei.
- Base fraca.
- Base razoável.
- Boa base.
- Base avançada.
- Não se aplica ao meu concurso.

### P46 - Disciplinas específicas

Tipo: texto aberto.

Obrigatoriedade: opcional.

Pergunta:

> Há alguma disciplina específica do seu concurso que não apareceu na lista?

Respostas possíveis:

- Campo aberto.

### P47 - Percentual de acertos

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Você já mediu seu percentual de acertos em questões?

Respostas possíveis:

- Não sei.
- Nunca medi.
- Abaixo de 40%.
- Entre 40% e 60%.
- Entre 60% e 75%.
- Entre 75% e 85%.
- Acima de 85%.

### P48 - Matérias com mais erros

Tipo: texto aberto.

Obrigatoriedade: condicional.

Condição: exibir se P47 não for "Não sei" nem "Nunca medi".

Pergunta:

> Em quais matérias você mais erra?

Respostas possíveis:

- Campo aberto.

### P49 - Análise de erros

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Você costuma analisar os próprios erros?

Respostas possíveis:

- Sim, sempre.
- Sim, às vezes.
- Raramente.
- Não.
- Não sei como fazer.

## Bloco 8 - Preferências e métodos

### P50 - Formatos preferidos

Tipo: escolha múltipla.

Obrigatoriedade: obrigatória.

Pergunta:

> Quais formatos de estudo funcionam melhor para você?

Respostas possíveis:

- Videoaula.
- PDF.
- Livro.
- Áudio.
- Aula presencial.
- Aula online.
- Questões.
- Mapas mentais.
- Flashcards.
- Ainda não sei.

### P51 - Dificuldade com leitura

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Você tem dificuldade para estudar por leitura?

Respostas possíveis:

- Sim, muita.
- Sim, alguma.
- Pouca.
- Não.
- Nunca testei direito.

### P52 - Curso ou plataforma

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Você possui curso ou plataforma de estudos?

Respostas possíveis:

- Sim.
- Não.
- Ainda estou escolhendo.

### P53 - Plataforma utilizada

Tipo: escolha múltipla.

Obrigatoriedade: condicional.

Condição: exibir se P52 for "Sim".

Pergunta:

> Qual plataforma ou recurso você usa?

Respostas possíveis:

- Gran Cursos.
- Estratégia.
- Direção.
- AlfaCon.
- Qconcursos.
- Tec Concursos.
- YouTube.
- Material gratuito.
- Livro ou apostila.
- Outra.

### P54 - Familiaridade com técnicas

Tipo: matriz.

Obrigatoriedade: obrigatória.

Pergunta:

> Qual sua familiaridade com estas técnicas?

Linhas:

- Pomodoro.
- Revisão periódica.
- Questões.
- Simulados.
- Flashcards.
- Análise de erros.

Respostas possíveis por linha:

- Não conheço.
- Conheço, mas não uso.
- Uso às vezes.
- Uso com frequência.

### P55 - Tempo médio de foco

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Por quanto tempo você costuma manter foco em uma sessão de estudo?

Respostas possíveis:

- Menos de 15 minutos.
- De 15 a 30 minutos.
- De 30 a 45 minutos.
- De 45 a 60 minutos.
- Mais de 60 minutos.
- Não sei.

## Bloco 9 - Ambiente, orçamento e barreiras

### P56 - Ambiente de estudo

Tipo: matriz.

Obrigatoriedade: obrigatória.

Pergunta:

> Como é seu ambiente de estudo?

Linhas:

- Tenho local fixo para estudar.
- O ambiente é silencioso.
- Sofro interrupções.
- Tenho equipamentos básicos.
- Tenho internet estável.

Respostas possíveis por linha:

- Sim.
- Não.
- Às vezes.

### P57 - Orçamento

Tipo: escolha única.

Obrigatoriedade: opcional.

Pergunta:

> Quanto você poderia investir por mês nos estudos?

Respostas possíveis:

- Não posso investir no momento.
- Até R$ 50.
- De R$ 51 a R$ 150.
- De R$ 151 a R$ 300.
- Acima de R$ 300.
- Prefiro não responder.

### P58 - Materiais disponíveis

Tipo: escolha múltipla.

Obrigatoriedade: obrigatória.

Pergunta:

> Quais materiais você já possui?

Respostas possíveis:

- Curso pago.
- PDFs.
- Livros.
- Apostilas.
- Plataforma de questões.
- Provas anteriores.
- Materiais gratuitos.
- Não possuo materiais.
- Não sei se estão atualizados.

### P59 - Barreiras práticas

Tipo: escolha múltipla.

Obrigatoriedade: obrigatória.

Pergunta:

> Quais barreiras mais atrapalham sua rotina de estudos?

Respostas possíveis:

- Falta de tempo.
- Cansaço.
- Interrupções.
- Filhos.
- Familiares.
- Cônjuge.
- Demandas domésticas.
- Trabalho fora do horário.
- Redes sociais.
- Falta de local adequado.
- Falta de dinheiro.
- Falta de internet.
- Falta de apoio.
- Nenhuma barreira relevante.
- Outra.

### P60 - Apoio das pessoas próximas

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Você sente que tem apoio das pessoas próximas para estudar?

Respostas possíveis:

- Sim.
- Parcialmente.
- Não.
- Prefiro não responder.

## Bloco 10 - Saúde e fatores sensíveis

### P61 - Aviso sobre perguntas sensíveis

Texto:

> As próximas perguntas podem envolver fatores pessoais que influenciam sua
> rotina. O objetivo não é avaliar ou diagnosticar você, mas evitar a criação
> de um planejamento incompatível com sua realidade.

Tipo: informativo.

Obrigatoriedade: obrigatória.

Respostas possíveis:

- Entendi e quero continuar.

### P62 - Fatores sensíveis

Tipo: escolha múltipla.

Obrigatoriedade: opcional.

Pergunta:

> Há algum fator pessoal ou de saúde que impacta sua rotina de estudos?

Respostas possíveis:

- Ansiedade.
- Insônia.
- TDAH.
- Depressão.
- Tratamento médico.
- Dor ou limitação física.
- Rotina de cuidados com outra pessoa.
- Outro fator.
- Nenhum fator relevante.
- Prefiro não responder.

Regra:

- O sistema não deve emitir diagnóstico médico a partir desta resposta.

### P63 - Observação sensível

Tipo: texto aberto.

Obrigatoriedade: opcional.

Pergunta:

> Deseja registrar alguma observação pessoal relevante para o planejamento?

Respostas possíveis:

- Campo aberto.
- Prefiro não responder.

## Bloco 11 - Organização e compromisso mínimo

### P64 - Organização pessoal

Tipo: escala.

Obrigatoriedade: obrigatória.

Pergunta:

> Como você avalia sua organização pessoal?

Respostas possíveis:

- Muito baixa.
- Baixa.
- Média.
- Boa.
- Muito boa.

### P65 - Cumprimento de planejamentos

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Você costuma cumprir planejamentos?

Respostas possíveis:

- Sim, com frequência.
- Às vezes.
- Raramente.
- Não.
- Nunca tive planejamento claro.

### P66 - Dificuldade de constância

Tipo: escolha múltipla.

Obrigatoriedade: obrigatória.

Pergunta:

> Qual é sua maior dificuldade para manter constância?

Respostas possíveis:

- Falta de tempo.
- Falta de energia.
- Falta de método.
- Falta de clareza.
- Ansiedade.
- Procrastinação.
- Interrupções.
- Desânimo.
- Excesso de metas.
- Não sei.

### P67 - Histórico de abandono

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Você já abandonou planos de estudo anteriores?

Respostas possíveis:

- Nunca tentei seguir um plano.
- Sim, várias vezes.
- Sim, uma ou duas vezes.
- Não.
- Não lembro.

### P68 - Mínimo em semana ruim

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Em uma semana ruim, qual é o mínimo que você consegue estudar?

Respostas possíveis:

- Menos de 1 hora na semana.
- De 1 a 3 horas na semana.
- De 4 a 6 horas na semana.
- De 7 a 10 horas na semana.
- Mais de 10 horas na semana.
- Não sei.

### P69 - Preferência de intensidade

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Como prefere começar?

Respostas possíveis:

- Leve e sustentável.
- Moderado.
- Intenso.
- Não sei.

### P70 - Experiência com rotina intensa

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Você já tentou começar intenso e abandonou?

Respostas possíveis:

- Sim.
- Não.
- Nunca tentei.
- Não lembro.

## Bloco 12 - Confirmação final

### P71 - Revisão final

Texto:

> Antes de enviar, revise suas respostas. Um planejamento eficiente depende de
> informações verdadeiras. É melhor começar com um plano simples e possível do
> que com um plano idealizado que será abandonado.

Tipo: informativo.

Obrigatoriedade: obrigatória.

Respostas possíveis:

- Entendi.

### P72 - Confirmação de sinceridade

Tipo: escolha única.

Obrigatoriedade: obrigatória.

Pergunta:

> Você confirma que respondeu com sinceridade e com base na sua rotina atual?

Respostas possíveis:

- Sim, confirmo.
- Quero revisar minhas respostas antes de enviar.

Regra:

- Se responder "Quero revisar minhas respostas antes de enviar", retornar para
  a revisão dos blocos antes do envio final.

## Alertas automáticos recomendados

O envio não deve ser bloqueado por estes alertas, mas eles devem aparecer para
análise manual ou diagnóstico.

- Dorme pouco e deseja estudar muitas horas por dia.
- Informa alta disponibilidade e muitos compromissos fixos.
- Nunca resolve questões, mas informa percentual alto de acertos.
- Está em pós-edital e não sabe a banca.
- Tem prova em menos de 30 dias e nunca leu o edital.
- Relata alto cansaço noturno e pretende estudar apenas à noite.
- Não pode investir, mas depende de recomendação baseada em curso pago.
- Indica alto risco de abandono e prefere começar com rotina intensa.
