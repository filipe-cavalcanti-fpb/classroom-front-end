export interface MiniCursoModel{
  id: number;
  nome: string;
  dataRealizacao: string;
  duracao: number;
  professor: {
    id: number;
    nome: string;
  };
}
