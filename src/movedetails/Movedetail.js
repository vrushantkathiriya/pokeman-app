import React from 'react';
import './movedetails.css';
import move from '../../src/components/images/move 1.png'

const Movedetail = () => {
  return (
    <div className='detail_main'>
        <div className='detail_container'>
            <div className='detail_header'>
                <div className='detail_img'>
                    <img className='img_top' src={move}/>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div className='detail_header_right'>
                    <div className='detail_description'>
                        <h4>Description</h4>
                        <p>A strange seed was planted on its back at birth.<br />
                         The plant sprouts and grows with this POKéMON.</p>
                    </div>
                    <div className='detail_info'>
                        <h4>Info</h4>
                        <div className='detail_data'>
                            <div>
                                <h3>Height</h3>
                                <h5>0.7m</h5>
                            </div>
                            <div>
                                <h3>Weight</h3>
                                <h5>6.9kg</h5>
                            </div>
                            <div>
                                <h3>Category</h3>
                                <h5>Seed</h5>
                            </div>
                            <div>
                                <h3>Abilities</h3>
                                <h5>Overgrow</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Movedetail