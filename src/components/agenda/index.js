import React from "react";
import { Scheduler } from "@aldabil/react-scheduler";
import { ptBR } from "date-fns/locale";

const ComponentAgenda = () => {
  return (
    <div style={{ width: "90vw" }}>
      <Scheduler
        view="week"
        locale={ptBR}
        week={{
          startHour: 6,
          endHour: 23,
        }}
        day={{
          startHour: 6,
          endHour: 23,
        }}
        hourFormat={24}
        translations={{
          navigation: {
            month: "Mês",
            week: "Semana",
            day: "Dia",
            today: "Hoje",
            agenda: "Agenda",
          },
          form: {
            addTitle: "Agendar",
            editTitle: "Editar",
            confirm: "Confirmar",
            delete: "Excluir",
            cancel: "Cancelar",
          },
          event: {
            title: "Título",
            start: "Início",
            end: "Fim",
            allDay: "Dia Inteiro",
          },
          validation: {
            required: "Obrigatório",
            invalidEmail: "Email Inválido",
            onlyNumbers: "Apenas Números Permitidos",
            min: "Mínimo de {{min}} letras",
            max: "Máximo de {{max}} letras",
          },
          moreEvents: "Mais...",
          noDataToDisplay: "Sem dados para exibir",
          loading: "Carregando...",
        }}
        fields={[
          {
            name: "profissional",
            type: "input",
            config: {
              label: "Profissional",
              required: true,
              variant: "outlined",
            },
          },
          {
            name: "procedimento",
            type: "input",
            config: {
              label: "Procedimento",
              required: true,
              variant: "outlined",
            },
          },
        ]}
        events={[
          {
            event_id: 1,
            title: "Reunião de Projeto",
            start: new Date("2024/6/12 14:00"),
            end: new Date("2024/6/12 15:00"),

            textColor: "#FFFFFF",
            editable: true,
            deletable: true,
            draggable: true,
            allDay: false,
            profissional: "Dr. Silva",
            procedimento: "Reunião para revisão de projeto",
          },
          {
            event_id: 2,
            title: "Consulta Médica",
            start: new Date("2024/6/13 09:00"),
            end: new Date("2024/6/13 10:00"),

            textColor: "#FFFFFF",
            editable: true,
            deletable: true,
            draggable: true,
            allDay: false,
            profissional: "Dr. Souza",
            procedimento: "Consulta de rotina",
          },
          {
            event_id: 3,
            title: "Aniversário",
            start: new Date("2024/6/15 00:00"),
            end: new Date("2024/6/15 23:59"),

            textColor: "#000000",
            editable: true,
            deletable: true,
            draggable: true,
            allDay: true,
            profissional: "N/A",
            procedimento: "Celebração de aniversário",
          },
        ]}
      />
    </div>
  );
};

export default ComponentAgenda;
