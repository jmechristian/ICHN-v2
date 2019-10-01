import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemList = props => {
  return (
    <div className="flex bg-white shadow-xl mx-3 p-6 rounded flex-col">
      <div className="w-full pb-6 ml-2">
        <span className="text-2xl font-semibold text-gray-800">
          {props.listType}
        </span>
      </div>
      <div className="flex">
        <table className="flex w-full my-4">
          <tbody className="w-full">
            <tr className="flex w-full bg-gray-200 text-gray-600 font-bold py-4 uppercase">
              <th className="w-1/4 text-left ml-4">Item</th>
              <th className="w-1/4 text-left ml-4">Detail</th>
              <th className="w-1/4 text-left ml-4 text-center">Organization</th>
              <th className="w-1/4 text-left ml-4 text-center">
                {props.buttonName}
              </th>
            </tr>
            {props.items.map(item => (
              <tr
                className="flex w-full py-6 border-b-2 capitalize"
                key={item.Id}
              >
                <td className="w-1/4 ml-4">{item.NeedType}</td>
                <td className="w-1/4 ml-4">{item.Details}</td>
                <td className="w-1/4 ml-4 text-center">
                  {item.OrganizationId}
                </td>
                <td className={`w-1/4 ml-4 text-center ${props.textColor}`}>
                  <button>
                    <FontAwesomeIcon icon={props.iconType} size="2x" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemList;
