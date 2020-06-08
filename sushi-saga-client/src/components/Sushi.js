import React from 'react'

const Sushi = (props) => {
  const {name, img_url, price} = props.sushi

  return (
    <div className="sushi">
      <div className="plate" 
           onClick={() => props.plateClicked(props.sushi)}>
        { props.eatenSushi.includes(props.sushi) ? null : <img src={ img_url } alt={ img_url } width="100%" /> }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi