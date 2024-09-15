import { supabase } from "../../services/supabase";

function cancelarAgendamento(id, setDadosAgendamentos) {
  // Função para cancelar agendamento
  async function excluirAgendamento() {
    try {
      // Exclui o agendamento do banco de dados
      const { error } = await supabase
        .from("agendamentos")
        .delete()
        .eq("id", id);

      if (error) {
        console.error("Erro ao excluir agendamento:", error.message);
        return;
      }

      // Atualize o estado após excluir o agendamento
      setDadosAgendamentos((prevDadosAgendamentos) =>
        prevDadosAgendamentos.filter((agendamento) => agendamento.id !== id)
      );
    } catch (error) {
      console.error("Erro ao excluir agendamento:", error);
    }
  }

  excluirAgendamento();
}

export default cancelarAgendamento;
