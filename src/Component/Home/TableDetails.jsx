import React from 'react';

const TableDetails = ({ list }) => {

    const { name, CQ, unit, fat, protine, crab, fiber, netCrab, calories } = list


    return (
        <>
            <tr className="bg-base-100">
                <td>{name}</td>
                <td>{CQ}</td>
                <td>{unit}</td>
                <td>{fat}</td>
                <td>{protine}</td>
                <td>{crab}</td>
                <td>{fiber}</td>
                <td>{netCrab}</td>
                <td>{calories}</td>
            </tr>

        </>
    );
};

export default TableDetails;