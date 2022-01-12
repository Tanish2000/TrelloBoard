import React from 'react';
import Card from './Card';
import { generate } from 'shortid';

const List = ({ list }) => {
    return (
        <div className='p-3 d-flex'>
            {
                list === undefined &&
                <div className="d-flex align-items-center justify-content-center w-100 p-5">
                    <h1 className="text-center text-muted">No List found</h1>
                </div>
            }
            <div className="d-flex">
                {
                    Object.keys(list).map((listNo) => {
                        return (
                            <div>
                                <h3 className="text-center">List {listNo}</h3>
                                {
                                    list[listNo].map((card) => {
                                        return (
                                            <Card title={card.title} desc={card.desc} key={generate()} />
                                        )
                                    })
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>

    )
}

export default List
