export default function Card({dados}) {

    return (
        <>

        {
            dados.map((pegaDados, index) => (
                
                <div class="skill-card" 
                key={index}
                style={{backgroundColor: pegaDados.color}}
                >

                    <h3>{pegaDados.titulo}</h3>
                    <p>{pegaDados.nivel}</p>
                    <p>{pegaDados.tempoxp}</p>
            </div>
            ))
        }
            
        </>
    )

}