import Card from "../Card";

function Skills({ skills }) {

const habilidades = [ 
  {
    titulo: "React",
    nivel: "Lutando...",
    tempoxp: "2 meses",
    color: "blue"
  },
  {
    titulo: "SQL",
    nivel: "zicoso",
    tempoxp: "2 meses",
    color: "red"
  },
  {
    titulo: "Python",
    nivel: "alto",
    tempoxp: "10 anos",
    color: "green"
  }
  
]

  return (
    <div className="skills">
      <h2>Habilidades</h2>
      <Card dados={habilidades}/>
    </div>
  );
}

export default Skills;