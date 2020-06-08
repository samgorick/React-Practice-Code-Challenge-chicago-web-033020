import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushi.map(sushi => <Sushi key={sushi.id} sushi={sushi} eatenSushi={props.eatenSushi} plateClicked={props.plateClicked}/>)
        }
        <MoreButton showMoreSushi={props.showMoreSushi} />
      </div>
    </Fragment>
  )
}

export default SushiContainer