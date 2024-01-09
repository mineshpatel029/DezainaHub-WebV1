import Marquee from "react-fast-marquee";

const OfferStrip = () => {
  return (
     <Marquee style={{position:"fixed", top:"1%", backgroundColor:"green",zIndex:"99999" }}>
        <div >OfferStrip</div>
     </Marquee>
  )
}

export default OfferStrip