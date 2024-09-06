import Card from "../Card";

function Skills({ skills }) {

const habilidades = [ 
  {
    titulo: "React",
    nivel: "Lutando...",
    tempoxp: "2 meses",
    color: "white"
  },
  {
    titulo: "SQL",
    nivel: "zicoso",
    tempoxp: "2 meses",
    color: "white"
  },
  {
    titulo: "Python",
    nivel: "alto",
    tempoxp: "10 anos",
    color: "white"
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