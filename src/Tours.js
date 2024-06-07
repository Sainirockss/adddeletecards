import Card from "./Card";
function Tours({tours,removetour}){
    return(
        <div className="container" >
         <div>
            <h2 className="title">plan with love</h2>
         </div>
        <div className="cards">
        {
            tours.map((tour)=>{
                return <Card key={tour.id} {...tour} removetour={removetour}></Card>
            })
            //pure object ki copy pass kardi    
            //har single tour ke liye element return kar diya
        
        }

        </div>
        </div>
    )
}


export default Tours;