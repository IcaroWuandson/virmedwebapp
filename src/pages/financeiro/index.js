import React, { useState, useEffect } from "react";
import Sidebar from "../../components/sidebar";
import {
  ButtonFilter,
  Cabecalho,
  Container,
  ContentWrapper,
  DivColumn,
  DivControls,
  DivFlex,
  DivTable,
  Input,
  Label,
  Select,
  Table,
  TableCell,
  TableHeader,
  Linha,
  ButtonQuitar,
} from "./styles";
import { supabase } from "../../services/supabase";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

const Financeiro = () => {
  const navigate = useNavigate();
  const [profissionais, setProfissionais] = useState([]);
  const [agendamentos, setAgendamentos] = useState([]);
  const [inicio, setInicio] = useState("");
  const [fim, setFim] = useState("");
  const [medico, setMedico] = useState("");
  const [convenio, setConvenio] = useState("");
  const [status, setStatus] = useState("");
  const [metodo, setMetodo] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { data: profissionais } = await supabase
        .from("profissionais")
        .select("*");
      setProfissionais(profissionais);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchAgendamentos() {
      const { data: agendamentos } = await supabase
        .from("agendamentos")
        .select("*")
        .order("id", { ascending: true });

      setAgendamentos(agendamentos);
    }
    fetchAgendamentos();
  }, []);

  const parseDetalheAgendamento = (detalhe) => {
    if (!detalhe) return null;
    try {
      const parsedDetalhe = JSON.parse(detalhe);
      return parsedDetalhe[0];
    } catch (error) {
      console.error("Erro ao analisar detalheAgendamento:", error);
      return null;
    }
  };

  function formatDate(dateString) {
    const date = new Date(dateString);

    const day = date.getUTCDate().toString().padStart(2, "0");
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const year = date.getUTCFullYear();
    return `${day}/${month}/${year}`;
  }

  const handleQuitarClick = (agendamento) => {
    navigate("/plataforma/quitar-valores", { state: { agendamento } });
  };

  const parseFormasPagamento = (formasPagamento) => {
    if (!formasPagamento) return null;

    try {
      const parsedFormas = JSON.parse(formasPagamento);

      if (Array.isArray(parsedFormas)) {
        return parsedFormas.map((pagamento) => {
          return pagamento.forma;
        });
      } else {
        return null;
      }
    } catch (error) {
      console.error("Erro ao analisar formasPagamento:", error);
      return null;
    }
  };
  const handleInicioChange = (event) => {
    setInicio(event.target.value);
  };

  const handleFimChange = (event) => {
    setFim(event.target.value);
  };

  const handleMedicoChange = (event) => {
    setMedico(event.target.value);
  };

  const handleConvenioChange = (event) => {
    setConvenio(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  const handleMetodoChange = (event) => {
    setMetodo(event.target.value);
  };

  const filtrarAgendamentos = (agendamentos) => {
    return agendamentos.filter((agendamento) => {
      const detalhe = parseDetalheAgendamento(agendamento.detalheAgendamento);
      const formasPagamento = parseFormasPagamento(agendamento.formasPagamento);

      const filtroDataInicio = inicio
        ? new Date(agendamento.dataDoAgendamento) >= new Date(inicio)
        : true;
      const filtroDataFim = fim
        ? new Date(agendamento.dataDoAgendamento) <= new Date(fim)
        : true;
      const filtroMedico = medico ? detalhe?.profissional === medico : true;
      const filtroConvenio = convenio ? detalhe?.convenio === convenio : true;
      const filtroStatus = status
        ? agendamento.statusQuitacao === status
        : true;
      const filtroMetodo = metodo
        ? formasPagamento && formasPagamento.includes(metodo)
        : true;

      return (
        filtroDataInicio &&
        filtroDataFim &&
        filtroMedico &&
        filtroConvenio &&
        filtroStatus &&
        filtroMetodo
      );
    });
  };

  const agendamentosFiltrados = filtrarAgendamentos(agendamentos);

  return (
    <Container>
      <Sidebar />
      <ContentWrapper>
        <DivControls>
          <>
            <DivFlex>
              <DivColumn>
                <Label>Inicio:</Label>
                <Input
                  type="date"
                  customWidth="10vw"
                  value={inicio}
                  onChange={handleInicioChange}
                />
              </DivColumn>

              <DivColumn>
                <Label>Fim:</Label>
                <Input
                  type="date"
                  customWidth="10vw"
                  value={fim}
                  onChange={handleFimChange}
                />
              </DivColumn>

              <DivColumn>
                <Label>Médico:</Label>
                <Select
                  customWidth="20vw"
                  value={medico}
                  onChange={handleMedicoChange}
                >
                  <option value="">Selecionar Profissional</option>
                  {profissionais.map((profissional) => (
                    <option
                      key={profissional.id}
                      value={profissional.nomeCompleto}
                    >
                      {profissional.nomeCompleto}
                    </option>
                  ))}
                </Select>
              </DivColumn>

              <DivColumn>
                <Label>Convênio:</Label>
                <Select
                  customWidth="10vw"
                  value={convenio}
                  onChange={handleConvenioChange}
                >
                  <option value="">Todos</option>
                  <option value="Particular">Particular</option>
                </Select>
              </DivColumn>

              <DivColumn>
                <Label>Status:</Label>
                <Select
                  customWidth="10vw"
                  value={status}
                  onChange={handleStatusChange}
                >
                  <option value="">Todos</option>
                  <option value="Quitado">Quitado</option>
                </Select>
              </DivColumn>

              <DivColumn>
                <Label>Método:</Label>
                <Select
                  customWidth="10vw"
                  value={metodo}
                  onChange={handleMetodoChange}
                >
                  <option value="">Todos</option>
                  <option value="Espécie">Espécie</option>
                  <option value="Pix">Pix</option>
                  <option value="Cartão de crédito">Cartão de crédito</option>
                  <option value="Cartão de débito">Cartão de débito</option>
                </Select>
              </DivColumn>
            </DivFlex>
          </>
        </DivControls>
        <DivTable>
          <Table>
            <Cabecalho>
              <Linha>
                <TableHeader>Data do agendamento</TableHeader>
                <TableHeader>Médico</TableHeader>
                <TableHeader>Paciente</TableHeader>
                <TableHeader>Convênio</TableHeader>
                <TableHeader>Status</TableHeader>
                <TableHeader>Método</TableHeader>
                <TableHeader>Valor</TableHeader>
                <TableHeader></TableHeader>
              </Linha>
            </Cabecalho>
            <tbody>
              {agendamentosFiltrados.map((agendamento) => {
                const detalhe = parseDetalheAgendamento(
                  agendamento.detalheAgendamento
                );
                const formasPagamento = parseFormasPagamento(
                  agendamento.formasPagamento
                );

                return (
                  <Linha key={agendamento.id}>
                    <TableCell>
                      {formatDate(agendamento.dataDoAgendamento)}
                    </TableCell>
                    <TableCell>{detalhe?.profissional || "---"}</TableCell>
                    <TableCell>{agendamento.nomePaciente}</TableCell>
                    <TableCell>{detalhe?.convenio || "---"}</TableCell>
                    <TableCell>{agendamento.statusQuitacao || "---"}</TableCell>

                    <TableCell>
                      {formasPagamento ? formasPagamento.join(" ") : "---"}
                    </TableCell>

                    <TableCell>R$ {agendamento.total || "---"}</TableCell>
                    {agendamento.statusQuitacao === "Quitado" ? (
                      <TableCell></TableCell>
                    ) : (
                      <TableCell>
                        <ButtonQuitar
                          onClick={() => handleQuitarClick(agendamento)}
                        >
                          Quitar
                        </ButtonQuitar>
                      </TableCell>
                    )}
                  </Linha>
                );
              })}
            </tbody>
          </Table>
        </DivTable>
      </ContentWrapper>
    </Container>
  );
};

export default Financeiro;
