import { FC } from 'react';
import { Problem } from '../utils/problem_structure';

interface TableProps {
    data: Problem[];
    columns: string[];
}


const Table: FC<TableProps> = ({ data, columns }) => {

    return (
        <div className=''>
            <div className='grid grid-cols-3 gap-4 border-t-2 border-black p-4'>
                {columns.map(columna => (
                    <div className='font-bold text-lg'>
                        {columna}
                    </div>
                ))}
            </div>
            {data.map(data => (
                <div className='grid grid-cols-3 gap-4 border-t-2 border-black p-4'>
                    <div>
                        {data.name}
                    </div>
                    <div>
                        {data.difficulty}
                    </div>
                    <div>
                        {data.topic}
                    </div>
                </div>
            ))}
            <div className='border-t-2 border-black p-4'></div>
        </div>
    );
};

export default Table;