function Produit({informatoin , NomStyle})
{
return(
    <div>
        <h2 style={NomStyle}>designatoin Produit:{informatoin.nom}</h2>
        <h2>prix du Produit:{informatoin.prix}</h2>
    </div>
)
}
export default Produit
