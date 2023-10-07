import React from 'react';

interface TableRowProps {
    cargo: string;
    apellido: string;
    nombreNroDoc: string;
}

interface TableProps {
    data: TableRowProps[];
}

function TableRow (props: TableRowProps) {
    const {cargo, apellido, nombreNroDoc} = props
    return (
        <tr>
            <td className="bg-[#808080] text-white py-2 px-4 w-1/3">{cargo}</td>
            <td className="bg-[#D9D9D9] py-2 px-4 w-1/3">{apellido}</td>
            <td className="bg-[#D9D9D9] py-2 px-4 w-1/3">{nombreNroDoc}</td>
        </tr>
    );
};

export default function Tabla (props: TableProps) {
    const { data } = props
    return (
        <table className="min-w-full border border-gray-300">
            <thead>
                <tr className="bg-gray-700 text-white">
                    <th className="py-2 px-4 bg-[#808080] text-[#010101] font-bold">CARGO</th>
                    <th className="py-2 px-4 bg-[#D9D9D9] text-[#808080] font-bold">Apellido y Nombre</th>
                    <th className="py-2 px-4 bg-[#D9D9D9] text-[#808080] font-bold">Nro de Doc</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <TableRow
                        key={index}
                        cargo={item.cargo}
                        apellido={item.apellido}
                        nombreNroDoc={item.nombreNroDoc}
                    />
                ))}
            </tbody>
        </table>
    );
};


