import React from 'react'
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BooksTable = ({books}) => {
  return (
    <table className='mx-auto w-3/5 border-separate border-spacing-2'>
          <thead className='text-xl font-semibold uppercase text-gray-700 bg-gray-50'>
            <tr>
              <th className='bg-slate-200 p-2 whitespace-nowrap'><div className='font-semibold text-left flex justify-center text-gray-700'>No.</div></th>
              <th className='p-2 bg-slate-200 whitespace-nowrap'><div className='font-semibold text-left flex justify-center text-gray-700'>title</div></th>              
              <th className='p-2 bg-slate-200 whitespace-nowrap'><div className='font-semibold text-left flex justify-center text-gray-700'>Author</div></th>
              <th className='p-2 bg-slate-200 whitespace-nowrap'><div className='font-semibold text-left flex justify-center text-gray-700'>Publish Year</div></th>              
              <th className='p-2  bg-slate-200 whitespace-nowrap'><div className='font-semibold text-left flex justify-center text-gray-700'>Operations</div></th>
            </tr>
          </thead>
          <tbody className='text-m divide-y divide-gray-100'>
            {books.map((book, index) => (
              <tr key={book._id} className='h-8'>
                <td className='p-2 whitespace-nowrap '>
                  <div className='flex justify-center items-center font-medium text-gray-800'>
                  {index + 1}
                  </div>
                </td>
                <td className='p-2 whitespace-nowrap '>
                  <div className='flex justify-center items-center font-medium text-gray-800'>
                  {book.title}
                  </div>
                </td>
                <td className='p-2 whitespace-nowrap '>
                  <div className='flex justify-center items-center font-medium text-gray-800'>
                  {book.author}
                  </div>
                </td>
                <td className='p-2 whitespace-nowrap '>
                  <div className='flex justify-center items-center font-medium text-gray-800'>
                  {book.publishYear}
                  </div>
                </td>
                <td className='p-2 whitespace-nowrap'>
                  <div className='flex justify-center gap-x-4'>
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle className='text-2x1 text-green-800'></BsInfoCircle>
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className='text-2xl text-yellow-600'></AiOutlineEdit>
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete className='text-2xl text-red-600'></MdOutlineDelete>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  )
}

export default BooksTable
